import { defineStore } from "pinia";
import { ref } from "vue";
export const useComponentStore = defineStore("component" ,() => {

  const showComponent = ref(false)

  const hovering = ref(false)
  // state : () => ({
    // showComponent : false
  // }),

  function setHovering (state) {
    showComponent.value = state
    hovering.value = state
  }

  return {setHovering, showComponent}
});
