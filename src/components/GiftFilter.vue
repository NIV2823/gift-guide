<template>
  <el-card class="filter-card" shadow="hover">
    <template #header>
      <div class="filter-header">
        <span class="filter-title">✨ 筛选条件</span>
      </div>
    </template>

    <el-form :model="form" label-position="top" class="filter-form">
      <el-form-item label="🎯 送礼对象">
        <el-checkbox-group v-model="form.recipient" :max="1" class="recipient-group">
          <el-checkbox
            v-for="item in recipients"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            border
          />
        </el-checkbox-group>
      </el-form-item>

      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-form-item label="💰 预算范围">
            <el-select
              v-model="form.budget"
              placeholder="请选择预算范围"
              clearable
              class="full-width"
            >
              <el-option
                v-for="item in budgets"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12">
          <el-form-item label="📂 礼物大类">
            <el-select
              v-model="form.category"
              placeholder="请选择礼物大类"
              clearable
              class="full-width"
              @change="onCategoryChange"
            >
              <el-option
                v-for="item in categories"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-form-item label="📎 礼物小类">
            <el-select
              v-model="form.subcategory"
              placeholder="请先选择大类"
              clearable
              class="full-width"
              :disabled="!form.category"
            >
              <el-option
                v-for="item in currentSubcategories"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12">
          <el-form-item label="💬 送礼场景">
            <el-select
              v-model="form.scene"
              placeholder="请选择送礼场景"
              clearable
              class="full-width"
            >
              <el-option
                v-for="item in giftScenes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="filter-actions">
        <el-button type="primary" size="large" @click="handleRecommend" class="btn-recommend">
          🎁 开始推荐
        </el-button>
        <el-button size="large" @click="handleReset" class="btn-reset">
          🔄 重置筛选
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { recipients, budgets, categories, giftScenes } from '../data/giftData.js'

const emit = defineEmits(['recommend', 'reset'])

const form = reactive({
  recipient: [],
  budget: '',
  category: '',
  subcategory: '',
  scene: ''
})

const currentSubcategories = ref([])

watch(() => form.category, (newVal) => {
  if (!newVal) {
    currentSubcategories.value = []
    return
  }
  const found = categories.find(c => c.value === newVal)
  currentSubcategories.value = found ? found.children : []
})

function onCategoryChange() {
  form.subcategory = ''
}

function handleRecommend() {
  const recipient = form.recipient.length > 0 ? form.recipient[0] : ''

  emit('recommend', {
    recipient,
    budget: form.budget,
    category: form.category,
    subcategory: form.subcategory,
    scene: form.scene
  })
}

function handleReset() {
  form.recipient = []
  form.budget = ''
  form.category = ''
  form.subcategory = ''
  form.scene = ''
  currentSubcategories.value = []
  emit('reset')
}
</script>

<style scoped>
.filter-card {
  border-radius: 16px;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(251, 146, 130, 0.1);
}

.filter-card :deep(.el-card__header) {
  border-bottom: 1px solid #fde8e4;
  padding: 18px 24px;
}

.filter-card :deep(.el-card__body) {
  padding: 20px 24px 28px;
}

.filter-header {
  display: flex;
  align-items: center;
}

.filter-title {
  font-size: 18px;
  font-weight: 600;
  color: #d4846a;
}

.filter-form {
  width: 100%;
}

.filter-form :deep(.el-form-item__label) {
  color: #8b6b5e;
  font-weight: 500;
  font-size: 14px;
}

.recipient-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.recipient-group :deep(.el-checkbox) {
  margin-right: 0;
}

.recipient-group :deep(.el-checkbox.is-bordered) {
  border-radius: 20px;
  border-color: #e8d5cd;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

.recipient-group :deep(.el-checkbox.is-bordered.is-checked) {
  border-color: #f9a8d4;
  background: linear-gradient(135deg, #fef3e7, #fde8f4);
}

.recipient-group :deep(.el-checkbox__label) {
  color: #8b6b5e;
  font-size: 14px;
}

.full-width {
  width: 100%;
}

.full-width :deep(.el-input__wrapper) {
  border-radius: 10px;
  background: #fef9f3;
  box-shadow: 0 0 0 1px #e8d5cd inset;
}

.full-width :deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 1px #f9a8d4 inset;
}

.full-width :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #f9a8d4 inset;
}

.filter-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 28px;
  flex-wrap: wrap;
}

.btn-recommend {
  background: linear-gradient(135deg, #f9a8d4, #fbc2a0);
  border: none;
  border-radius: 25px;
  padding: 12px 48px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-recommend:hover {
  background: linear-gradient(135deg, #f592c4, #fab890);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 168, 212, 0.4);
}

.btn-reset {
  border-radius: 25px;
  padding: 12px 36px;
  font-size: 14px;
  color: #c99a8a;
  border-color: #e8d5cd;
  transition: all 0.3s ease;
}

.btn-reset:hover {
  color: #f9a8d4;
  border-color: #f9a8d4;
  background: #fef9f3;
}

@media (max-width: 768px) {
  .filter-card :deep(.el-card__body) {
    padding: 16px 12px 20px;
  }

  .btn-recommend {
    width: 100%;
    padding: 12px 24px;
  }

  .btn-reset {
    width: 100%;
    padding: 12px 24px;
  }

  .filter-actions {
    flex-direction: column;
    gap: 12px;
  }
}
</style>