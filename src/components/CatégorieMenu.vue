<script setup>
import MainContainer from './MainContainer.vue'
</script>

<template>
  <div class="menu-carte">

    <div class="menu-card">

        <MainContainer>
            <a href="#">Art</a><br/>
            <a href="#">Automobile</a> <br/>
            <a href="#">Beauté</a> <br/>
            <a href="#">Entreprise</a> <br/>
            <a href="#">Construction</a> <br/>
            <a href="#">Culture</a>
        </MainContainer>

        <MainContainer>
            <a href="#">Education</a> <br/>
            <a href="#">Diverstissement</a> <br/>
            <a href="#">Environnement</a> <br/>
            <a href="#">Mode</a> <br/>
            <a href="#">Finance</a> <br/>
            <a href="#">Alimentation et boissons </a>
        </MainContainer>

        <MainContainer>
            <a href="#">Jeux vidéo</a> <br/>
            <a href="#">Général</a> <br/>
            <a href="#">Santé</a> <br/>
            <a href="#">Maison</a> <br/>
            <a href="#">Légal</a> <br/>
            <a href="#">Style de vie</a>
        </MainContainer>

        <MainContainer>
          <a href="#">Media</a> <br/>
          <a href="#">Divers</a> <br/>
          <a href="#">Musique</a> <br/>
          <a href="#">Personnel</a> <br/>
          <a href="#">Immobilié</a> <br/>
          <a href="#">Religion</a>
        </MainContainer>

        <MainContainer>
          <a href="#">Vente au detail</a> <br/>
          <a href="#">Services</a> <br/>
          <a href="#">Achats</a> <br/>
          <a href="#">Sportif</a> <br/>
          <a href="#">Technologies</a> <br/>
          <a href="#">Voyage</a>
        </MainContainer>
    </div>
  </div>
</template>


<style  scoped>

.menu-carte {
  position: relative;
}

.menu-card  {
  display: flex;
  margin: 15px;
  padding: 20px;
  justify-content: space-around;
  z-index: 1;
  position: absolute;
  bottom: 195px;
  width: 100%;
  /* margin-top: 30px; */
  background-color:  #1f5378;

}

.menu-card a {
  color: white;
  text-decoration: none;
  margin: 16px;
  transition: color 0.3s ease;
}

.menu-card a:hover {
  color:#70af31;
}
</style>
