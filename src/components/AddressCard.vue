<script setup>
import FooterCard from './FooterCard.vue'
import { ref } from 'vue';
const title = ref("Addresse")

import footerImage from "@/assets/footer-building.png"
import icon1 from "@/assets/149441.png"
import icon2 from "@/assets/149252.png"
import icon3 from "@/assets/3916611.png"
</script>

<template>

  <div class="address-card">

    <FooterCard>
      <h2>{{ title }}</h2>
    </FooterCard>

    <FooterCard class="footer-image">
      <img :src="footerImage" alt="footer-image">
    </FooterCard>

    <div class="icon1-class">

      <FooterCard>
       <img :src="icon1" alt="icon-phone">
      </FooterCard>

      <FooterCard>
      <p>102 NE 2e rue #217 <br/> Boca Raton, FL 33432-3908</p>
      </FooterCard>
    </div>

    <div class="icon2-class">

      <FooterCard>
        <img :src="icon2" alt="icon2">
      </FooterCard>

      <FooterCard class="span-content">
         (888) 694-6735
      </FooterCard>

    </div>

    <div class="icon3-class">

      <FooterCard>
        <img :src="icon3" alt="icon3">
      </FooterCard>

      <FooterCard>
        <a href="#" target="_blank">
         interested@domainmarket.com</a>
      </FooterCard>
    </div>



  </div>
</template>

<style  scoped>

.address-card {
  margin:20px ;
  padding: 16px;
}

.address-card  a {
  color: #f79c16 ;
  text-decoration: none;
  font-size: 17px;
  position: relative;
  bottom: 4px;
  transition: color 0.3s ease;
}

.span-content  {
  color: #f79c16 ;
  margin-bottom: 2px;
  cursor: pointer;
  transition: color 0.3s ease;
  width: 140px;
}

.address-card  a:hover {
  color:#70af31;
}


.span-content:hover {
  color: #70af31;
}

.footer-image img {
  max-width: 100%;
  margin: 10px;
}

.icon1-class img ,
.icon2-class img ,
.icon3-class img{
  width: 20px;
  color: white;
}

.icon1-class p {
  color: white;
  font-size: 17px;
  position: relative;
  bottom: 15px;
}


h2 {
  color: white;
}


.icon1-class ,
.icon2-class ,
.icon3-class {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 20px;
}

@media (min-width: 1024px)   {
}
</style>
