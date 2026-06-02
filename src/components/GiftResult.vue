<template>
  <transition name="fade-in">
    <div v-if="hasResults" class="result-section">
      <!-- 结果统计 -->
      <div class="result-summary">
        <div class="summary-left">
          <span class="summary-icon">🎀</span>
          <span class="summary-text">
            共为您找到 <strong>{{ gifts.length }}</strong> 款礼物
            <template v-if="totalExact > 0 && totalRelated > 0">
              （<em class="exact-count">{{ totalExact }}</em> 款精准匹配，
              <em class="related-count">{{ totalRelated }}</em> 款相关推荐）
            </template>
          </span>
        </div>
        <el-tag type="warning" size="small" effect="plain" round>
          🏷️ 精准匹配 · 相关推荐
        </el-tag>
      </div>

      <!-- 礼物卡片网格 -->
      <div class="gift-grid">
        <div
          v-for="(gift, index) in gifts"
          :key="gift.id"
          class="gift-card"
          :class="{ 'exact-match': gift.isExactMatch, 'related-match': !gift.isExactMatch }"
          :style="{ animationDelay: (index * 0.05) + 's' }"
        >
          <!-- 卡片顶部装饰图 -->
          <div class="card-image">
            <span class="card-emoji">{{ getGiftEmoji(gift.name) }}</span>
            <div v-if="gift.isExactMatch" class="match-badge exact-badge">精准推荐</div>
            <div v-else class="match-badge related-badge">相关推荐</div>
          </div>

          <!-- 卡片信息 -->
          <div class="card-body">
            <h3 class="card-name">{{ gift.name }}</h3>
            <div class="card-tags">
              <span class="price-tag">{{ gift.priceRange }}</span>
              <span
                v-for="scene in getSceneTags(gift.sceneDesc)"
                :key="scene"
                class="scene-tag"
              >{{ scene }}</span>
            </div>
            <p class="card-reason">💡 {{ gift.reason }}</p>
          </div>

          <!-- 卡片底部 -->
          <div class="card-footer">
            <span class="gift-id">#{{ gift.id }}</span>
            <span class="card-action">查看详情 →</span>
          </div>
        </div>
      </div>

      <!-- 祝福语卡片 -->
      <el-card v-if="greeting" class="greeting-card" shadow="hover">
        <template #header>
          <div class="greeting-header">
            <span class="greeting-title">💌 祝福语</span>
            <el-button
              type="primary"
              size="small"
              plain
              @click="copyGreeting"
              class="copy-btn"
            >
              {{ copied ? '✅ 已复制' : '📋 一键复制' }}
            </el-button>
          </div>
        </template>
        <p class="greeting-text">{{ greeting }}</p>
      </el-card>

      <!-- 操作按钮 -->
      <div class="result-actions">
        <el-button size="large" @click="handleReset" class="btn-retry">
          🔄 重新筛选
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
  gifts: {
    type: Array,
    default: () => []
  },
  greeting: {
    type: String,
    default: ''
  },
  filters: {
    type: Object,
    default: null
  },
  totalExact: {
    type: Number,
    default: 0
  },
  totalRelated: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['reset'])

const copied = ref(false)

const hasResults = computed(() => props.gifts.length > 0)

// 分类对应的默认emoji
const categoryEmojiMap = {
  '保温杯': '🫖', '水杯': '🥤', '毛巾': '🧺', '伞': '☂️', '护手霜': '🧴',
  '沐浴': '🛁', '护肤': '🧴', '面膜': '💆', '洁面': '🧼', '洗手': '🧽',
  '口腔': '🪥', '加湿器': '💧', '收纳': '📦', '旅行': '🧳', '便携': '🎒',
  '折叠': '👜', '急救': '🏥', '餐具': '🍽️', '钢笔': '🖊️', '马克笔': '🎨',
  '毛笔': '🖌️', '宝珠笔': '✒️', '手账': '📒', '贴纸': '🌟', '便签': '📝',
  '书签': '🔖', '印章': '🏷️', '笔记本': '📓', '文创': '🏛️', '零食': '🍿',
  '坚果': '🥜', '海苔': '🌊', '水果': '🍓', '猪肉': '🥩', '咖啡': '☕',
  '茶': '🍵', '龙井': '🍃', '花茶': '🌸', '蜂蜜': '🍯', '燕窝': '🥣',
  '阿胶': '💊', '蛋白': '💪', '枸杞': '🫐', '马卡龙': '🍬', '蛋黄酥': '🥮',
  '曲奇': '🍪', '牛轧糖': '🍬', '巧克力': '🍫', '松露': '🍫', '红酒': '🍷',
  '茅台': '🥃', '装饰画': '🖼️', '花瓶': '🏺', '花束': '💐', '挂布': '🖼️',
  '照片墙': '📷', '绿植': '🪴', '餐具': '🍽️', '茶具': '🫖', '水壶': '🫖',
  '调料': '🧂', '香薰': '🕯️', '精油': '💧', '车载': '🚗', '毛毯': '🛏️',
  '眼罩': '😴', '抱枕': '🛋️', '地毯': '🧶', '午休': '💤', '项链': '📿',
  '珍珠': '🦪', '手链': '💎', '戒指': '💍', '耳钉': '✨', '水晶': '💠',
  '包': '👜', '帆布': '🎒', '双肩包': '🎒', '斜挎': '👜', '化妆包': '💄',
  '卡包': '💳', '钱包': '👛', '丝巾': '🧣', '围巾': '🧣', '棒球帽': '🧢',
  '渔夫帽': '👒', '墨镜': '🕶️', '发饰': '🎀', '腰带': '👔', '胸针': '📌',
  '袖扣': '🤵', '钥匙扣': '🔑', '牙刷': '🪥', '筋膜枪': '💪', '耳机': '🎧',
  '音箱': '🔊', '手环': '⌚', '手表': '⌚', '平板': '📱', '充电': '🔋',
  '数据线': '🔌', 'U盘': '💾', 'USB': '🔌', '手机': '📱', '台灯': '💡',
  '屏幕挂灯': '💡', '暖杯': '🔥', '风扇': '🌬️', '水壶电': '🫖', '插座': '🔌',
  '灯泡': '💡', '体脂秤': '⚖️', '单词': '📖', '相机': '📸', '键盘': '⌨️',
  '自拍杆': '🤳', '挂烫': '👕', '香水': '🌸', '摆件': '🏆', '工艺品': '🗿',
  '琉璃': '💎', '景泰蓝': '🏺', '铜': '🥉', '手办': '🎎', '纪念币': '🪙',
  '版画': '🎨', '挂毯': '🧶', '行李': '🧳', '护肤套装': '🧴'
}

function getGiftEmoji(name) {
  for (const [key, emoji] of Object.entries(categoryEmojiMap)) {
    if (name.includes(key)) return emoji
  }
  return '🎁'
}

function getSceneTags(sceneDesc) {
  if (!sceneDesc) return []
  return sceneDesc.split('、').slice(0, 3)
}

function copyGreeting() {
  if (!props.greeting) return
  navigator.clipboard.writeText(props.greeting).then(() => {
    copied.value = true
    ElMessage.success('祝福语已复制到剪贴板！')
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }).catch(() => {
    ElMessage.error('复制失败，请手动复制')
  })
}

function handleReset() {
  emit('reset')
}
</script>

<style scoped>
.result-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ===== 结果统计条 ===== */
.result-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  border: 1px solid #fde8e4;
}

.summary-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-icon {
  font-size: 20px;
}

.summary-text {
  font-size: 14px;
  color: #8b6b5e;
}

.summary-text strong {
  color: #d4846a;
  font-size: 18px;
}

.exact-count {
  font-style: normal;
  color: #67c23a;
  font-weight: 600;
}

.related-count {
  font-style: normal;
  color: #e6a23c;
  font-weight: 600;
}

/* ===== 卡片网格 ===== */
.gift-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1100px) {
  .gift-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gift-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .gift-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== 单个卡片 ===== */
.gift-card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  border: 1.5px solid #fde8e4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  animation: cardSlideIn 0.4s ease both;
}

.gift-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(251, 146, 130, 0.15);
  border-color: #fbc2a0;
}

.gift-card.exact-match {
  border-left: 3px solid #67c23a;
}

.gift-card.related-match {
  border-left: 3px solid #e6a23c;
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 卡片图片区 */
.card-image {
  height: 100px;
  background: linear-gradient(135deg, #fef9f3, #fef3e7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-emoji {
  font-size: 48px;
  transition: transform 0.3s ease;
}

.gift-card:hover .card-emoji {
  transform: scale(1.15);
}

.match-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 500;
}

.exact-badge {
  background: #e8f5e9;
  color: #4caf50;
}

.related-badge {
  background: #fff3e0;
  color: #f57c00;
}

/* 卡片内容 */
.card-body {
  padding: 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-name {
  font-size: 15px;
  font-weight: 600;
  color: #3e2723;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.price-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #f9a8d4, #fbc2a0);
  padding: 2px 10px;
  border-radius: 10px;
}

.scene-tag {
  display: inline-block;
  font-size: 11px;
  color: #c99a8a;
  background: #fef9f3;
  border: 1px solid #fde8e4;
  padding: 2px 8px;
  border-radius: 8px;
}

.card-reason {
  font-size: 12px;
  color: #9e8b7e;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

/* 卡片底部 */
.card-footer {
  padding: 10px 14px;
  border-top: 1px solid #fef3e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gift-id {
  font-size: 11px;
  color: #d4b8a8;
}

.card-action {
  font-size: 12px;
  color: #d4846a;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
}

.card-action:hover {
  color: #f9a8d4;
}

/* ===== 祝福语卡片 ===== */
.greeting-card {
  border-radius: 16px;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(251, 146, 130, 0.1);
}

.greeting-card :deep(.el-card__header) {
  border-bottom: 1px solid #fde8e4;
  padding: 18px 24px;
}

.greeting-card :deep(.el-card__body) {
  padding: 20px 24px;
}

.greeting-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.greeting-title {
  font-size: 18px;
  font-weight: 600;
  color: #d4846a;
}

.copy-btn {
  border-radius: 20px;
}

.copy-btn.el-button--primary.is-plain {
  border-color: #f9a8d4;
  color: #d4846a;
  background: #fef3e7;
}

.copy-btn.el-button--primary.is-plain:hover {
  background: linear-gradient(135deg, #f9a8d4, #fbc2a0);
  color: #fff;
  border-color: transparent;
}

.greeting-text {
  font-size: 15px;
  line-height: 1.8;
  color: #5a3e34;
  background: linear-gradient(135deg, #fef9f3, #fef3e7);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #fde8e4;
}

/* ===== 操作按钮 ===== */
.result-actions {
  display: flex;
  justify-content: center;
}

.btn-retry {
  border-radius: 25px;
  padding: 12px 36px;
  font-size: 14px;
  color: #c99a8a;
  border-color: #e8d5cd;
  transition: all 0.3s ease;
}

.btn-retry:hover {
  color: #f9a8d4;
  border-color: #f9a8d4;
  background: #fef9f3;
}

/* ===== 动画 ===== */
.fade-in-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-in-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* ===== 移动端适配 ===== */
@media (max-width: 768px) {
  .result-summary {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-image {
    height: 80px;
  }

  .card-emoji {
    font-size: 36px;
  }

  .card-name {
    font-size: 14px;
  }

  .card-body {
    padding: 10px;
  }

  .card-footer {
    padding: 8px 10px;
  }

  .greeting-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .greeting-text {
    font-size: 14px;
  }
}
</style>
