<script setup>
import MainContainer from './MainContainer.vue'

</script>

<template>
  <div class="nom-domaine">
    
    <MainContainer class="paragraph-one">

      <p>
        Notre équipe a vendu et transféré plus de 75 000 marques de noms de domaine .com super <br/>
        premium aux plus grandes entreprises du monde et aux dirigeants marketing les plus <br/>
        intelligents.
      </p>
   </MainContainer>

   <div class="number-content">

   <MainContainer class="number-para1">

    <span>203 777</span>
    <p>Domaines disponibles</p>
   </MainContainer>

   <MainContainer  class="number-para2">

    <span>75 000+</span>
    <p>Vendu et transféré</p>

   </MainContainer>
   </div>

   

  </div>
</template>


<style scoped>
.nom-domaine {
  margin: 20px;
  padding: 15px;
  background-color: #1F5378;
  padding-bottom: 110px;
}

.number-content {
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-top: 30px;
}

.nom-domaine .paragraph-one p {
  font-size: 27px;
  margin: 10px;
  color: white;
}

.nom-domaine  span {
  color: #70AF31;
  font-size: 1.9em;
}

.number-para1,
.number-para2 {
 background-color: white;
 text-align: center;
 height: 98px;
}


.number-para1,
.number-para2 p{
 color: black;
 font-size: 21px;
}

@media (min-width: 1024px)  {
  .paragraph-one p{
   width: 1200px;
   text-align: center;
  }

  
.number-para1,
.number-para2 {
 background-color: white;
 text-align: center;
 width: 550px;
 margin-top: 30px;
}

 .number-content {
  display: flex;
  flex-direction: row;
  margin-left: 42px;
 }
}
</style>