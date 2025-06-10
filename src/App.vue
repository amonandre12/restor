<script setup>
import HeaderContent from './components/HeaderContent.vue'
import NavCard from './components/NavCard.vue'
import DomainList from './components/DomainList.vue';
import CatégorieMenu from './components/CatégorieMenu.vue'
import DomaineContent from './components/DomaineContent.vue';
import ParagraphContent from './components/ParagraphContent.vue';
import IconsList from './components/IconsList.vue';
import InputContent from './components/InputContent.vue';
import NomDomaine from './components/NomDomaine.vue';
import AproposContent from './components/AproposContent.vue';
import WhyContent from './components/WhyContent.vue';
import CommerceContent from './components/CommerceContent.vue';
import ToggleList from './components/ToggleList.vue';

import FooterContent from './components/FooterContent.vue';

import { ref } from 'vue';

const showDomain = ref(false)


</script>

<template>
  <header>
    <div>
       <p>Renseignez-vous sur les offres spéciales de mai !</p>
    </div>
  </header>

 <HeaderContent msg="Service à la clientèle :"/>
 <main>
<NavCard/>

<DomaineContent/>

<Transition name="fade">
<CatégorieMenu  v-if="showDomain"/>
</Transition>

<DomainList/>
<ParagraphContent/>
<IconsList/>
<InputContent/>
<NomDomaine/>
<AproposContent/>
<WhyContent/>
<CommerceContent/>
<ToggleList/>
 </main>

 <footer>
  <FooterContent />
 </footer>


</template>

<style scoped>

header{
  background-color: #f79c16 ;
  height:30px;
  padding:1px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4ms ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

header p {
  color:#ffffff;
  font-size : 15px;
  text-align : center ;
  align-items:center;
}



@media (min-width: 1024px) {

}
</style>
