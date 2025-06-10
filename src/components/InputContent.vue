<script setup>
import TextContent from '../components/TextContent.vue';
import FormInput from '../components/FormInput.vue';
</script>

<template>
  <div class="input-content">

  <div>
    <TextContent/>
  </div>
  
  <div>
   <FormInput/>
  </div>
  </div>
</template>


<style scoped>
.input-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px)   {

  .input-content {
    display: flex;
    flex-direction: row-reverse;
    /* justify-content: space-between; */
    
  }
}
</style>
