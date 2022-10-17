<template>
    <div class="schedule-call">
        <nuxt-link to="/contact-us"><button>Email Us</button></nuxt-link>
    </div>
</template>

<script>

import Swal from 'sweetalert2'
import { mapMutations } from 'vuex'

export default {

    // methods: {
    //     async emailBtn() {
    //         // Swal.fire({
    //         //     icon: 'success',
    //         //     title: 'Oops...',
    //         //     text: 'Something went wrong!',
    //         // })

    //         // this.$store.commit('increment');
    //         // console.log(this.$store.state.themeState)

    //         const api = 'http://localhost:4000/test';
    //         const testReq = await this.$axios.post(api, {
    //             name: 'pathum',
    //         }).then((response) => {
    //             console.log(response)
    //         });
    //     }
    // }

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