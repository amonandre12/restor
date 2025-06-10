<script setup>
import AddressCard from '../components/AddressCard.vue';
import MenuCard from '../components/MenuCard.vue';
import ResourceCard from '../components/ResourceCard.vue';
</script>

<template>
 <div class="footer-content">

  
  <div>
    <AddressCard/>
  </div>

  <div>
    <MenuCard/>
  </div>

   <div>
    <ResourceCard/>
  </div>
  
 </div> 

 
</template>


<style scoped>
.footer-content {
  background-color: #1f5378;
  display:flex;
  flex-direction:column;
  justify-content: center;
}

@media (min-width: 1024px)   {
  .footer-content {
    display:flex;
    flex-direction:row;
    gap:20px;
  }
}
</style>