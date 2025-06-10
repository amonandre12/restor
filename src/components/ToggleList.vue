<script setup>
import PayContent from '../components/PayContent.vue';
import ToggleText from '../components/ToggleText.vue';
</script>

<template>
  <div class="toggle-list">

  <div>
    <PayContent/>
  </div>

  <div>
    <ToggleText/>
  </div>

  </div>
</template>



<style scoped>
.toggle-list {
  display: flex;
  flex-direction: column;

}

@media (min-width: 1024px)   {
  .toggle-list {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
}
</style>