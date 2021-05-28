<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal" >
      <template v-slot:links>
        <a href="#">S'inscrire</a>
        <a href="#">Plus d'info</a>
      </template>
      <h1>Acheter à moindre coût</h1>
      <p>offrez-vous ce merveilleur article à moitié prix</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo" >
      <h1>S'abonner à la newsletter</h1>
      <p>Bénéficier des dernières mises à jour et de codes promos</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal" >Ouvrir le Model (alt)</button>
  <button @click="toggleModalTwo" >Ouvrir le Model</button>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: "tut1",
  components: {Modal},
  data(){
    return {
      title: "Mon Premier Projet Vue Js",
      showModal: false,
      showModalTwo: false
    }
  },

  methods:{
    toggleModal() {
      this.showModal = !this.showModal 
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo 
    }
  }
  
};
</script>

