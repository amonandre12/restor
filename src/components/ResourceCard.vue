<script setup>
import FooterCard from './FooterCard.vue'
import { ref } from 'vue';

const title = ref("Dernières ressources")
</script>

<template>

  <div class="resource-card">
    <h2>{{ title }}</h2>

    <FooterCard class="link">
      <a href="#">
      Pourquoi les domaines premium sont la clé du succès en ligne</a> <br/>
      <span>29 Avril 2025</span>
    </FooterCard>

    <FooterCard  class="link">
      <a href="#">
      Pourquoi les domaines premium sont importants : comment un bon  nom de domaine peut booster votre activité </a><br/>

      <span>4 Avril 2025</span>
    </FooterCard>

    <FooterCard  class="link">
      <a href="#">Le pouvoir des noms de domaine : un guide pour les startups</a> <br/>
      <span>21 Avril 2025</span>
    </FooterCard>
  </div>
</template>



<style scoped>
.resource-card a {
  color: #f79c16 ;
  text-decoration:none;
  font-size:25px;
  transition: color 0.3s ease;
}


.link a:hover {
  color:#70af31;
}

.resource-card {
  max-width:100%;
  margin:20px;
  padding:15px;
  display:flex;
  flex-direction:column;
  gap:20px;
}

h2 {
  color: white;
}

span {
  color:white;
}
</style>
