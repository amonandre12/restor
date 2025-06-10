<script setup>
import MainContainer from './MainContainer.vue'
import ButtonCard from './ButtonCard.vue'
</script>

<template>

   <MainContainer class="info-restore">

    <div class="titleParagraph">

       <h2>Domaine à vendre</h2>

     <h1>RestaurantLasserre.com</h1>

     <p>4 888 $ US</p>

       <ButtonCard class="btnComponent">

       Acheter maintenant
       </ButtonCard>



    </div>

  </MainContainer>

</template>


<style scoped>
/* The styles mobiles first */

.info-restore {
  background-color:#FFFFFF;
  border:1px solid #E2EBF0;
  box-shadow: 0 4px 6px rgba(7, 3, 3, 0.2) ;
  width:340px;
  height:250px;
  padding-bottom:98px;
  margin:30px;
}


.info-restore
.titleParagraph  {
  align-items: center;
  text-align: center;
}


.btnComponent {
  background-color:#70af31;
  border: none;
  padding: 12px 55px 12px 55px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
  position:relative;
  top:61px;
  font-size:20px;
}



.btnComponent:hover {
  background-color:  #1f5378;
}


.info-restore p {
  color: #1f5378;
  position:relative;
  top:17px;
}


.info-restore h1 {
  color: black;
  font-size: 25px;
}

/* The media styles for laptop */

@media (min-width: 1024px)  {

  .btnComponent {
    width: 350px;
    position: relative;
    bottom: 25px;
  }

  .info-restore {
    width: 690px;
    height: 335px;
  }


.info-restore h1 {
  color: black;
  font-size: 2.6em;
}


.info-restore
.titleParagraph {
  position: relative;
  top: 30px;
  text-align: center;
}


}
</style>
