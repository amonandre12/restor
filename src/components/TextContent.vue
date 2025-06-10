<script setup>
import MainContainer from './MainContainer.vue'

</script>

<template>

  <div class="text-content">

    <MainContainer>

      <h1>Recevez les dernières nouvelles de  DomainMarket.com</h1>

      <p>
        Rejoignez notre communauté et restez informé des dernières actualités, astuces et 
        tendances. En vous inscrivant à notre newsletter, vous recevrez du contenu 
        exclusif et des offres spéciales. Ne manquez rien ! Abonnez-vous dès aujourd'hui !
      </p>

    </MainContainer>
  </div>
</template>


<style scoped>

.text-content {
  margin:20px;
  padding:20px;
  max-width: 500px;
}

.text-content p {
  line-height: 25px;
  margin-top:20px;
  
}

.text-content h1 {
  color: #1f5378;
}

@media (min-width: 1024px)  {
  
.text-content p {
  line-height: 30px;
  margin-top:20px;
  font-size: 20px;
  width: 610px;
  
}


.text-content h1 {
  font-size: 40px;
  width: 650px;
}
}
</style>