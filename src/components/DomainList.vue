<template>
  <div class="domain-list">

    <div class="title-items">

      <h2>{{ title }}</h2>

      <div
        v-for="(item, index) in items"
        :key="index"
        class="domain-items"
      >
        <img :src="icon1" alt="icon-logo" />

        <span v-if="item.type === 'text'">{{ item.value }}</span>

        <a
          v-else-if="item.type === 'link'"
          :href="item.href"
          class="link-item"
          target="_blank"
         >
          {{ item.value }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import icon1 from '@/assets/4436481.png'

const title = ref('#1 Dans les domaines premium')

const items = ref([
  { type: 'text', value: '203 779 des meilleurs . Domaines Com' },
  { type: 'text', value: 'Disponible pour achat immédiat' },
  { type: 'text', value: 'Transactions sûres et sécurisées' },
  { type: 'text', value: 'Satisfaction garantie à 100 %' },
  { type: 'link', value: 'Voir nos témoignages', href: '#' }
])
</script>

<style scoped>

.domain-list {
  background-color: #FFFFFF;
  border: 1px solid #E2EBF0;
  box-shadow: 0 4px 6px rgba(7, 3, 3, 0.1);
  width: 347px;
  height: 260px;
  margin: 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  text-align: center;
  position: relative;
}

.domain-list a {
  color:#777;
}

.domain-items {
  display: flex;
  gap: 15px;
  margin-left: 40px;
  margin-top: 18px;
  align-items: center;
}

.domain-list img {
  width: 25px;
}

.link-item {
  color: #007BFF;
  text-decoration: none;
}

.link-item:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {

  .domain-list {
    position: absolute;
    left: 55%;
    bottom: 24px;
    width: 540px;
    height: 370px;
  }

  .title-items {
    margin-top: 20px;
  }

  .title-items h2 {
    position: relative;
    right: 86px;
    color: #007BFF;
  }
}
</style>
