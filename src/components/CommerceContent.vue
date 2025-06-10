<script setup>
import MainContainer from './MainContainer.vue'
import { ref } from 'vue';

const title = ref("Commercialisation de RestaurantLasserre.com")

import marketAbility from "@/assets/marketAbility.avif"
</script>

<template>
     <MainContainer class="title">
      <h1>{{ title }}</h1>
    </MainContainer>

  <div class="commerce-content">

    <div class="paragraph-content">
          <MainContainer>
       <p>
        RestaurantLasserre.com peut vous fournir un avantage concurrentiel 
        en matière de marketing numérique en vous aidant à vous classer
        plus haut dans les résultats des moteurs de recherche, ce qui permet 
        aux clients potentiels de découvrir et d'interagir plus facilement avec 
        votre entreprise.
      </p>

    </MainContainer>

    <MainContainer class="commerce-paragraph2">
      <p>
        Ce nom de domaine est polyvalent et peut être utilisé sur différents 
        canaux marketing, tels que les réseaux sociaux, les campagnes par 
        e-mail, les publicités imprimées, etc. En utilisant systématiquement 
        une identité en ligne claire et reconnaissable, vous attirerez et 
        convertirez de nouveaux clients en clients fidèles.
      </p>
    </MainContainer>

    </div>

    <div>
       <MainContainer>
      <img :src="marketAbility" alt="market-ability">
    </MainContainer>
    </div>


  </div>
</template>


<style  scoped>
.commerce-content  {
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  justify-content: center;
}

.commerce-content  p {
  max-width: 100%;
  font-size: 18px;
}

.title {
  margin: 20px;
  padding: 15px;
  color:  #1F5378;
}

.commerce-paragraph2 {
  margin-top: 30px;
}

.commerce-content  img {
  width: 100%;
}

@media (min-width: 1024px)  {
  .commerce-content  {
    display: flex;
    flex-direction: row;
  }

  .commerce-content img {
    width: 660px;
  }

  .paragraph-content {
    margin-top: 98px;
  }

  .title {
    text-align: center;
    margin-top: 90px;
    font-size: 16px;
  }
}
</style>