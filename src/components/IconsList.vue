<script setup>
import { ref } from 'vue'
import MainContainer from './MainContainer.vue'
import icon1 from '@/assets/telechargement1.jpg'
import search from '@/assets/search.jpg'
import marque from '@/assets/marque.jpg'
import presence from '@/assets/presence.jpg'
import money from '@/assets/money.jpg'
import home from '@/assets/home.jpg'

const title = ref("Quels sont les avantages d’un super premium . Domaine Com ?")

const avantages = ref([ 
  { src: icon1, text: 'Augmentation du <br/>trafic' },
  { src: search, text: 'Classement des <br/>moteurs de <br/>recherche' },
  { src: marque, text: 'Reconnaissance <br/>de la marque' },
  { src: presence, text: 'Présence <br/>immédiate' },
  { src: money, text: 'Des bénéfices plus <br/>élevés' },
  { src: home, text: 'Excellent <br/>investissement' }
])
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="container-icon">
    <div
      v-for="(item, index) in avantages"
      :key="index"
      class="icon-group"
    >
      <MainContainer>
        <img :src="item.src" :alt="'image-' + index" />
        <p v-html="item.text"></p>
      </MainContainer>
    </div>
  </div>
</template>

<style scoped>
.container-icon {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  text-align: center;
}

.icon-group {
  flex: 1 1 40%;
  max-width: 300px;
}

h1 {
  text-align: center;
  margin: 20px;
  padding: 20px;
  font-size: 24px;
}

@media (min-width: 1024px) {
  .container-icon {
    flex-wrap: nowrap;
    gap:2px;
  }


  h1 {
    font-size: 41px;
    position:relative;
    top:20px;
    word-spacing:4px;
  }

}
</style>
