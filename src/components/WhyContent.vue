<script setup>
import MainContainer from './MainContainer.vue'
import { ref } from 'vue';
const title = ref("Pourquoi RestaurantLasserre.com ?")
</script>

<template>

  <div class="why-content">

    <MainContainer class="why-para1">

      <h3>{{ title }}</h3>

      <p>
        RestaurantLasserre.com peut avoir un impact significatif sur la croissance de votre entreprise en augmentant le trafic organique grâce à l'optimisation 
        des moteurs de recherche et en permettant aux clients de vous trouver plus facilement en ligne. 
      </p>
    </MainContainer>

    <MainContainer  class="why-para2">
      <p>
        De plus, un nom de domaine qui reflète fidèlement votre entreprise peut contribuer à établir la confiance et la fidélité de votre clientèle. Votre marque 
        paraîtra plus authentique et professionnelle lorsque les clients verront une URL correspondant au nom de votre restaurant.
      </p>
    </MainContainer>
  </div>
</template>



<style scoped>
.why-content {
  margin: 20px;
  padding: 15px;
  justify-content: center;
  text-align: center;
  
}

.why-content h3 {
  color: #1f5378;
  font-size: 29px;
}

.why-content,
.why-para1 p{
  position: relative;
  top: 23px;
}


.why-content,
.why-para2 p{
  margin-top: 50px;
}


@media (min-width: 1024px)  {

   .why-content  p {
    font-size: 17px;
   }

   .why-content h3 {
    font-size: 2.5em;
   }
}
</style>