<template>
  <transition name="fade-in">
    <div v-if="hasResults" class="result-section">
      <el-card class="gifts-card" shadow="hover">
        <template #header>
          <div class="gifts-header">
            <span class="gifts-title">🎀 为您推荐</span>
            <el-tag type="warning" size="small" effect="plain">
              共推荐 {{ gifts.length }} 款礼物
            </el-tag>
          </div>
        </template>

        <div class="gifts-list">
          <div
            v-for="(gift, index) in gifts"
            :key="gift.id"
            class="gift-item"
            :style="{ animationDelay: (index * 0.1) + 's' }"
          >
            <div class="gift-number">{{ index + 1 }}</div>
            <div class="gift-content">
              <div class="gift-name-row">
                <span class="gift-name">{{ gift.name }}</span>
                <el-tag size="small" effect="light" class="price-tag">
                  {{ gift.priceRange }}
                </el-tag>
              </div>
              <p class="gift-reason">💡 {{ gift.reason }}</p>
              <p class="gift-scene">📌 适合场景：{{ gift.sceneDesc }}</p>
            </div>
          </div>
        </div>
      </el-card>

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
  }
})

const emit = defineEmits(['reset'])

const copied = ref(false)

const hasResults = computed(() => props.gifts.length > 0)

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

.gifts-card {
  border-radius: 16px;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(251, 146, 130, 0.1);
}

.gifts-card :deep(.el-card__header) {
  border-bottom: 1px solid #fde8e4;
  padding: 18px 24px;
}

.gifts-card :deep(.el-card__body) {
  padding: 20px 24px;
}

.gifts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gifts-title {
  font-size: 18px;
  font-weight: 600;
  color: #d4846a;
}

.gifts-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.gift-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: linear-gradient(135deg, #fef9f3, #fef3e7);
  border-radius: 12px;
  border: 1px solid #fde8e4;
  animation: slideIn 0.5s ease both;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gift-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f9a8d4, #fbc2a0);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
}

.gift-content {
  flex: 1;
  min-width: 0;
}

.gift-name-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.gift-name {
  font-size: 17px;
  font-weight: 600;
  color: #5a3e34;
}

.price-tag {
  border-radius: 12px;
  background: #fef3e7;
  border-color: #f9c5a0;
  color: #c97e5a;
}

.gift-reason {
  font-size: 14px;
  color: #8b6b5e;
  line-height: 1.6;
  margin-bottom: 4px;
}

.gift-scene {
  font-size: 13px;
  color: #c99a8a;
  line-height: 1.5;
}

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
  white-space: pre-wrap;
  word-break: break-all;
}

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

.fade-in-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-in-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .gifts-card :deep(.el-card__body) {
    padding: 16px 12px;
  }

  .gift-item {
    flex-direction: column;
    gap: 10px;
  }

  .gift-number {
    align-self: flex-start;
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