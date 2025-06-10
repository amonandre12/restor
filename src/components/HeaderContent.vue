<script setup>
// import { ref } from 'vue';

import imageSrc1 from '@/assets/6422199.png'
import imageSrc2 from '@/assets/6422200.png'
import imageSrc3 from '@/assets/6422202.png'
import imageSrc4 from '@/assets/3917759.png'
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

</script>

<template>

  <div class="section1">

    <div class="headerSection">


      <div class="infoSection">

       <div class="customInfo">

       <h3 class="title">{{msg}}</h3>


       <div>
       <a :href="linkNumber" target="_blank"> (888) <br/> 562-2184
       </a>
       </div>

       <div>
       <a :href="messageCustom" target="_blank"> Messagerie <br/> électronique  </a>
       </div>
     </div>

    </div>


    <div class="imageContainer">

      <div>
      <img :src="imageSrc1" alt="image1">
      </div>

     <div>
       <img :src="imageSrc2" alt="image2">
     </div>

     <div>
       <img :src="imageSrc3" alt="image3">
    </div>

     <div>
       <img :src="imageSrc4" alt="image4">
    </div>
    </div>
  </div>

  </div>


</template>

<style scoped>

.section1 .headerSection {
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.section1 {
  position: relative;
}


.section1 .headerSection .title  {
  display: none;
}


.customInfo a  {
  color:  #f79c16 ;
  cursor: pointer;
}


.section1 .customInfo {
  display: flex;
  flex-direction: row;
  gap:41px;
}


.section1 .imageContainer {
  display: flex;
  margin-top:10px;
  /* flex-direction: row; */
  gap: 7px;
}


.section1 .imageContainer  img {
  width: 20px;
}

@media (min-width: 1024px) {

.section1 .headerSection .title  {
  display: block;
  position:relative;
  left:30px;
}


 .infoSection {
  position:relative;
  left:650px;
  margin-top:8px;

}

br {
  display: none;
}

.barre-color  {
  display: block;
}

}
</style>
