<script setup>
import MainContainer from './MainContainer.vue'
import ButtonCard from './ButtonCard.vue'
import { reactive } from 'vue';

const form = reactive({
  name:"",
  email:"",
  checked:false,
});
console.log(form)
</script>

<template>
    <div>

<MainContainer class="form-content">

  <form>
    <div class="text-input">
       <label for="name">Votre nom : </label> <br/>
       <input type="text" id="name" v-model="form.name" required>
    </div>

    <div class="email-input">

      <label for="email">Votre e-mail :</label> <br/>
      <input type="email" id="email" v-model="form.email" required>
    </div>

    <div class="input-para">

      <span> <input type="checkbox" id="radio" v-model="form.checked"></span>
      <p> J'accepte de recevoir des e-mails mensuels. Vous pouvez
        vous désinscrire à tout moment.

      </p>
    </div>

  </form>

   <ButtonCard  class="btnComponent">
    S'inscrire
  </ButtonCard>

</MainContainer>
    </div>

</template>


<style scoped>


.btnComponent {
  background-color:#70af31;
  border: none;
  width: 320px;
  padding: 10px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
  font-size:20px;
  margin-top: 50px;
  margin-left: 10px;
}


.btnComponent:hover {
  background-color:  #1f5378;
}


.form-content {
  background-color: #fff;
  border: 1px solid #E2EBF0;
  box-shadow: 0 4px 6px rgba(7, 3, 3, 0.1);
  max-width: 500px;
  padding-bottom:10px;
  margin: 30px;
  position: relative;
  border-radius:6px;
}


.input-para p {
  margin-left: 30px;
}


.input-para span input {
  position: relative;
  top: 24px;
  margin-left: 6px;
}


.form-content form  {
  margin-top:20px;
}


.text-input input, .email-input input {
  width:315px;
  height: 45px;
  border: 1px solid #ccc;
  margin: 15px;
  border-radius: 1px;
  border-radius:7px;
}

.form-content form label {
  margin: 14px;
}

@media (min-width: 1024px)  {
  .text-input input,
  .email-input input {
   width: 400px;
  }

  form {
    margin: 30px;
    padding: 10px;
  }

  .btnComponent {
    width: 340px;
    margin-left: 60px;
    padding: 10px;
    position: relative;
    bottom: 60px;
  }

  .form-content  {
    position: relative;
    top: 10px;
    right: 80px;
    height: 400px;
  }
}
</style>
