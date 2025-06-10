<script setup>
import MainContainer from './MainContainer.vue'
import ButtonCard from './ButtonCard.vue'
</script>

<template>
  <div class="pay-content">
   <MainContainer>
   <p>Achetez  RestaurantLasserre.com  <br/> maintenant !</p>
   </MainContainer>

   <ButtonCard class="btnComponent">
   Acheter maintenant
    </ButtonCard>
  </div>
</template>


<style scoped>

.pay-content {
  background-color: #136382;
  margin:20px;
  padding: 15px;
  max-width: 100%;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  text-align: center;
  justify-content: center;
  height: 240px;
}

.pay-content p {
  color: white;
  font-size: 20px;
  margin-top:22px;
  padding:15px;
}

.btnComponent {
  background-color:#70af31;
  border: none;
  width: 260px;
  padding: 10px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
  font-size:20px;
  margin-top: 30px;
  margin-left: 10px;
}


@media (min-width: 1024px)  {
  .pay-content  {
    width: 440px;
    height: 220px;
    margin-top: 57px;
  }

  .btnComponent  {
    width: 340px;
    margin-top: 50px;
  }
}
</style>