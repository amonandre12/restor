<script setup>
import MainContainer from './MainContainer.vue'
import ButtonCard from './ButtonCard.vue'

import { ref } from 'vue';
const title = ref("À propos de RestaurantLasserre.com")
</script>

<template>
  <div class="apropos-content">

    <MainContainer>

      <h1>{{ title }}</h1>

      <p>
        RestaurantLasserre.com est plus qu'un simple nom de domaine ; c'est un investissement dans l'avenir numérique de votre entreprise. Ce nom de 
        domaine, spécialement conçu pour les restaurants, transmet immédiatement une image de sophistication et de professionnalisme aux clients 
        potentiels.
      </p>
    </MainContainer>

    <MainContainer class="paragraph-two">
      <p>
        RestaurantLasserre.com peut être utilisé dans divers secteurs, tels que la gastronomie, les restaurants décontractés, les cafétérias et même les food 
        trucks. En choisissant ce nom de domaine, vous garantissez que votre présence en ligne reflète l'identité de votre entreprise.
      </p>
    </MainContainer>

    <ButtonCard  class="btnComponent">
       Acheter maintenant 
  </ButtonCard>
  </div>
</template>


<style  scoped>

.apropos-content {
  margin: 20px;
  padding: 15px;
  justify-content: center;
  text-align: center;
}

.apropos-content h1 {
  color: #1f5378;
  font-size: 35px;
}

.apropos-content ,
.paragraph-two {
  margin-top: 20px;
}
 
.btnComponent {
  background-color:#70af31;
  border: none;
  width: 320px;
  padding: 10px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
  font-size:20px;
  margin-top: 50px;
  margin-left: 10px;
}


.btnComponent:hover {
  background-color:  #1f5378;
}

@media (min-width: 1024px)  {
  .apropos-content {
    margin-top: 60px;
  }

   .apropos-content  p {
    font-size: 17px;
   }

   .btnComponent {
    margin-top: 80px;
   }
}
</style>