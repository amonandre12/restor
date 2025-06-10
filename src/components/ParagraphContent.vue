<script setup>
import MainContainer from './MainContainer.vue'
</script>

<template>

  <MainContainer class="welcome-section">
    <p>
      Bienvenue sur <strong>RestaurantLasserre.com</strong>, le nom de domaine parfait pour votre établissement de restauration estimé.
      Gagnez une présence en ligne distincte et renforcez la crédibilité de votre marque grâce à cette adresse mémorable et facile à retenir.
    </p>
  </MainContainer>

</template>

<style scoped>

.welcome-section {
  background-color: #1f5378;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 27px;
  height: 440px;
  padding: 20px;
}

.welcome-section p {
  font-size: 19px;
  color: #fff;
  max-width: 1200px;
  line-height: 1.6;
}

@media (min-width: 1024px) {
  .welcome-section {
    height: auto;
    padding: 40px;
    position:relative;
    top:35px;
    /* margin-bottom:30px; */
  }
}
</style>
