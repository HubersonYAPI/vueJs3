<template>
    <h1>Jeux de Rapidité</h1>
    <button @click="start" :disabled="isPlaying"> Jouer </button>    
    <Block v-if="isPlaying" :delay="delay" @end ="endGamme"/>
    <!-- <p v-if="showResults">temps de jeux {{ score }} </p> -->
    <Results v-if="showResults" :score="score" />     
</template>

<script>
import Block from '@/components/Block.vue'
import Results from '@/components/Results.vue'


export default {
    name:"reaction",
    components : { Block, Results },

    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResults: false
        }
    },
    methods:{
        start() {
            this.delay = 2000 + Math.random() * 5000
            this.isPlaying = true
            this.showResults = false

        },
        endGamme(reactionTime){
            this.score = reactionTime
            this.isPlaying = false
            this.showResults = true
        }
    }

}
</script>

<style>

    button {
        background: #0faf87;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
        letter-spacing: 1px;
        cursor: pointer;
        margin: 10px;
    }

    button[disabled] {
        opacity: 0.2;
        cursor: not-allowed;
    }

</style>