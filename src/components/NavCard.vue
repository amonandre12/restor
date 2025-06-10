<script setup>
import MainContainer from './MainContainer.vue'
import logoSite from '@/assets/domain-market-logo.png'
import menuMobile from '@/assets/3917762.png'
import ButtonCard from './ButtonCard.vue'


</script>

<template>

    <MainContainer class="NavContent">

     <div class="logo">
            <img :src="logoSite" alt="Logo du site">
        </div>

        <img :src="menuMobile"  alt="the menu" class="menu">
        <nav>
            <ul>
                <li><a href="#apprendre">Apprendre</a></li>
                <li><a href="#catégorie" @mouseenter="toggleMenu" @mouseleave="hiddenMenu">Catégories</a></li>
                <li><a href="#environ">Environ</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#témoignage">Témoignages</a></li>
            </ul>


        </nav>

          <ButtonCard class="btnCard">
          Rechercher des domaines 
          </ButtonCard>
  </MainContainer>

</template>

<style  scoped>

.NavContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

}

.btnCard {
  width:250px;
  height:42px;
  font-size:1.1em;
}

.NavContent .btnCard {
  background-color:#70af31;
  border: none;
  padding: 10px 9px 10px 23px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
}

.NavContent .btnCard:hover {
  background-color:  #1f5378;
}

.logo img {
  max-height: 50px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
   margin: 0 15px;
}

nav ul li a {
  color: #777;
  text-decoration: none;
  font-weight: bold;
}

.NavContent .menu {
  display: none;
}


@media screen and (max-width: 600px) {

 nav {
  display: none;
 }

 .btnCard {
  display: none;
  
 }

 .NavContent .menu {
  display: block;
  width: 35px;
  margin-bottom:11px;
  cursor:pointer;
 }

.NavContent  {
  margin-bottom:30px;
}
}
</style>
