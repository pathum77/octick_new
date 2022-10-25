<template>
    <div class="schedule-call">
        <nuxt-link to="/contact-us"><button>Email Us</button></nuxt-link>
        <!-- <button @click="emailBtn()">Test</button> -->
    </div>
</template>

<script>

import Swal from 'sweetalert2'
import { mapMutations } from 'vuex'

export default {

    data() {
        return {
            testData: '' //localStorage.getItem('storedData')
        }
    },

    methods: {

        async emailBtn() {
            // if (process.client) {
            //     localStorage.setItem('storedData', 'pathum')
            // }

            // console.log(localStorage.getItem('storedData'));

            // this.$store.commit('increment');
            // console.log(this.$store.state.themeState)
        }
    }

}
</script>

<style scoped>
button {
    padding: 5px 10px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border-radius: 20px;
    font-size: 17px;
    font-weight: bold;
    border: solid 2px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(90deg, #fc0000, #0cfa03, #6200ff, #cd05ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px rgb(216, 216, 216) inset;
    transition: .2s;
}

.dark button {
    padding: 5px 10px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border-radius: 20px;
    font-size: 17px;
    font-weight: bold;
    border: solid 2px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(90deg, #fc0000, #0cfa03, #6200ff, #cd05ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px rgb(0, 0, 0) inset;
    color: white;
    transition: .2s;
}

button:hover {
    box-shadow: none;
    color: white;
}

.dark button:hover {
    box-shadow: none;
    color: white;
}
</style>