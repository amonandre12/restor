<script setup>
import MainContainer from './MainContainer.vue'
import { ref } from 'vue';
import icon1 from "@/assets/3916864.png"
const title1 =  ref("Comment puis-je acquérir la propriété  du domaine ?")
const title2 = ref("Y aura t-il des frais réccurents après l'acquisition du domaine ?")
const title3 = ref("Quels modes de paiements acceptez-vous ?")

const toggleShow = ref(null)

const toggleContent = (contentId) => {
  toggleShow.value = toggleShow.value === contentId ? null : contentId
}
</script>

<template>

  <div class="toggle-text">

    <div>

    <MainContainer class="title1"  @click="toggleContent('content1') " >
      <h3>{{ title1 }}  <img :src="icon1" alt="icon"> </h3>
    </MainContainer>

   <MainContainer v-if="toggleShow  === 'content1' ">
    <p>
      Chez DomainMarket.com, notre objectif est de rendre le processus de gestion de votre <br/>
      domaine aussi simple et transparent que possible. Une fois vos fonds réglés et la<br/>
      transaction vérifiée (généralement sous 3 à 7 jours ouvrés), nous vous contacterons par <br/>
      e-mail avec les instructions de transfert pour prendre le contrôle de <br/>
      RestaurantLasserre.com.
    </p>
   </MainContainer> 
  </div>

  <div>
    <MainContainer class="title2"  @click="toggleContent('content2') ">
        <h3>{{ title2 }}  <img :src="icon1" alt="icon"> </h3>
    </MainContainer>
    
    <MainContainer v-if="toggleShow === 'content2' ">
      <p>
        L'acquisition du domaine entraîne des frais uniques. Par la suite, une fois le domaine <br/>
        transféré, vous devrez le renouveler chaque année auprès de votre bureau <br/>
        d'enregistrement. Ces frais varient selon votre bureau d'enregistrement et vous seront <br/>
        directement versés.
      </p>
    </MainContainer>
  </div>

  <div>
    <MainContainer class="title3"  @click.prevent="toggleContent('content3') ">
      <h3>{{ title3 }}  <img :src="icon1" alt="icon"> </h3>
    </MainContainer>

    <MainContainer v-if="toggleShow === 'content3' ">
      <p>
        Nous acceptons différents modes de paiement, notamment les principales cartes de <br/>
        crédit, PayPal et les virements bancaires. Notre système de traitement des paiements <br/>
        garantit une expérience de transaction sécurisée et fluide.
      </p>
    </MainContainer>
   </div>

  </div>

</template>


<style  scoped>
.toggle-text {
  margin: 20px;
  padding: 15px;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toggle-text h2{
 /* margin: 5px; */
 text-align: center;
 height: 20px;
}

.toggle-text .title1, .title2, .title3 {
  background-color: #FFFFFF;
  border: 1px solid #E2EBF0;
  box-shadow: 0 4px 6px rgba(7, 3, 3, 0.1);
  width: 100%;
  padding-bottom:16px;
  margin: 10px;
  height: 60px;
  align-items: center;
  cursor: pointer;
  padding-bottom: 40px;
  
}

img {
  width: 25px;
  position:absolute ;
  right: 2%;
  margin-top: 1px;
  text-align: center;
}

@media (min-width: 1024px)  {
  .toggle-text .title1, .title2, .title3  {
    width: 764px;
  }

  img {
    margin-right: 20px;
    margin-top: 10px;
  }

  h3 {
    margin-left: 20px;
    position: relative;
    top: 7px;
  }

  p {
    font-size:18px ;
    margin-left: 14px;
  }
}
</style>