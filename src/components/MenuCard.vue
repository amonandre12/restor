<script setup>
import FooterCard from './FooterCard.vue'
import { ref } from 'vue';
const title = ref("Menu")
</script>

<template>
  <div class="menu-card">

    <h2>{{ title }}</h2>

    <FooterCard class="link">
      <a href="#">Maison</a>
    </FooterCard>

    <FooterCard class="link">
      <a href="#">Recherche</a>
    </FooterCard>

    <FooterCard class="link">
    <a href="#">Apprendre</a>
    </FooterCard>

    <FooterCard class="link">
    <a href="#">10 raisons</a>
    </FooterCard>

    <FooterCard class="link">
      <a href="#">Catégories</a>
    </FooterCard>

    <FooterCard class="link">
      <a href="#">À propos</a>
    </FooterCard>

    <FooterCard class="link">
     <a href="#">Blog</a>
    </FooterCard>

    <FooterCard class="link">
      <a href="#">Témoignages</a>
    </FooterCard>

     <FooterCard class="link">
      <a href="#">Vidéos</a>
    </FooterCard>
  </div>
</template>


<style scoped>
.menu-card , .link a {
  color: white;
  font-size: 17px;
  text-decoration: none;
  line-height: 30px;
  transition: color 0.3s ease;
}

h2 {
  color: white;
  position:relative;
  bottom:7px;
}

.menu-card  {
  margin: 10px;
  padding: 35px;
  display:flex;
  flex-direction:column;
  gap:14px;
  /* margin-bottom:20px; */
}

.link :hover {
  color: #f79c16 ;

}
</style>
