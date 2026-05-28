<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">🎁 送礼指南</h1>
        <p class="app-subtitle">为你在乎的人，挑选一份心仪的礼物</p>
      </div>
    </header>

    <main class="app-main">
      <div class="main-content">
        <GiftFilter
          @recommend="handleRecommend"
          @reset="handleReset"
        />
        <GiftResult
          :gifts="recommendedGifts"
          :greeting="currentGreeting"
          :filters="lastFilters"
          @reset="handleReset"
        />
      </div>
    </main>

    <footer class="app-footer">
      <p>用心挑选，温暖每份心意 💝</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GiftFilter from './components/GiftFilter.vue'
import GiftResult from './components/GiftResult.vue'
import { recommendGifts, generateGreeting } from './data/giftData.js'

const recommendedGifts = ref([])
const currentGreeting = ref('')
const lastFilters = ref(null)

function handleRecommend(filters) {
  const result = recommendGifts(filters)
  recommendedGifts.value = result.gifts
  currentGreeting.value = result.greeting
  lastFilters.value = filters
}

function handleReset() {
  recommendedGifts.value = []
  currentGreeting.value = ''
  lastFilters.value = null
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #fdf6f0 0%, #fef3e7 30%, #fef9f3 60%, #fce4d6 100%);
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: linear-gradient(135deg, #f9a8d4 0%, #fbc2a0 40%, #fce4b8 100%);
  padding: 40px 20px 35px;
  text-align: center;
  box-shadow: 0 2px 20px rgba(251, 146, 130, 0.15);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.app-title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(200, 100, 100, 0.2);
  margin-bottom: 10px;
}

.app-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

.app-main {
  flex: 1;
  padding: 30px 20px 40px;
}

.main-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.app-footer {
  text-align: center;
  padding: 20px;
  color: #c99a8a;
  font-size: 14px;
  border-top: 1px solid rgba(200, 150, 130, 0.15);
}

@media (max-width: 768px) {
  .app-header {
    padding: 30px 16px 25px;
  }

  .app-title {
    font-size: 28px;
  }

  .app-subtitle {
    font-size: 14px;
  }

  .app-main {
    padding: 20px 12px 30px;
  }
}
</style>