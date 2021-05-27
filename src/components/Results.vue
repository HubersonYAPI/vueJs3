<template>
  <p>Temps de jeux : {{ score }} ms </p>
  <p class="rank"> {{ rank }} </p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank:null
        }
    },
    mounted() {
        if(this.score < 250){
            this.rank = 'Excellent'
        }else if(this.score < 550){
            this.rank = 'Bon'
        }else{
            this.rank = 'Essayer de nouveau'
        }
    }

}

</script>

<style>

    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }

</style>