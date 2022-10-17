<template>
    <div>
        <div class="navi">
            <div :class="themeStatus ? 'navigation-dark' : 'navigation'">
                <div class="navigation-wrapper">
                    <div class="logo">
                        <NuxtLink to="/">
                            <img :src="themeStatus ? require('../assets/logo/Octic_Logo_White_landscape.png') : require('../assets/logo/Octic_Logo_Black_landscape.png')"
                                alt="">
                        </NuxtLink>
                    </div>
                    <div :class="themeStatus ? 'navi-links-dark' : 'navi-links'">
                        <NuxtLink to="/development">Development</NuxtLink>
                        <NuxtLink to="/digital-marketing">Digital Marketing</NuxtLink>
                        <NuxtLink to="/solutions">Solutions</NuxtLink>
                        <NuxtLink to="/clients">Clients</NuxtLink>
                        <SheduleCallBtn />
                    </div>
                    <div class="burger-btn">
                        <button @click="mobileNaviIsVisible = true;">
                            <div class="burger"></div>
                            <div class="burger"></div>
                            <div class="burger"></div>
                        </button>
                    </div>
                </div>
            </div>

            <transition name="mobile-navi-trans">
                <div v-if="mobileNaviIsVisible" class="mobile-navigation-wrapper">
                    <div class="top">
                        <a href="/">
                            <img :src="themeStatus ? require('../assets/logo/Octic_Logo_White_landscape.png') : require('../assets/logo/Octic_Logo_Black_landscape.png')"
                            alt="">
                        </a>
                        <button @click="mobileNaviIsVisible = false;" class="btn-close"><img
                                src="../assets/icons/close.png" alt=""></button>
                    </div>
                    <div class="bottom">
                        <button @click="mobileNaviIsVisible = false;" class="btn-mobile-nav-link"><NuxtLink to="/development">Development</NuxtLink></button>
                        <button @click="mobileNaviIsVisible = false;" class="btn-mobile-nav-link"><NuxtLink to="/digital-marketing">Digital Marketing</NuxtLink></button>
                        <button @click="mobileNaviIsVisible = false;" class="btn-mobile-nav-link"><NuxtLink to="/solutions">Solutions</NuxtLink></button>
                        <button @click="mobileNaviIsVisible = false;" class="btn-mobile-nav-link"><NuxtLink to="/clients">Clients</NuxtLink></button>
                        <SheduleCallBtn />
                    </div>
                </div>
            </transition>

        </div>
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import SheduleCallBtn from '~/components/SheduleCallBtn.vue';


export default {

    data() {
        return {
            themeStatus: null,
            mobileNaviIsVisible: false,
            naviTrans: false,
        }
    },

    components: {
        SheduleCallBtn
    },

}

</script>

<style scoped>

.btn-mobile-nav-link{
    margin-bottom: 20px;
    border: none;
}

.mobile-navi-trans-enter-active,
.mobile-navi-trans-leave-active {
    transition: all .2s;
}

.mobile-navi-trans-enter,
.mobile-navi-trans-leave-active {
    opacity: 0;
}

.navi {
    height: 78px;
}

.navigation {
    width: 100%;
    padding: 10px 50px;
    position: fixed;
    background-color: white;
    transition: .5s;
    z-index: 1000;
}

.navigation-dark {
    width: 100%;
    padding: 10px 50px;
    position: fixed;
    background-color: black;
    transition: .5s;
}

.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo img {
    width: 200px;
    margin: auto 0;
}

.navi-links {
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navi-links-dark {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navi-links a {
    text-decoration: none;
    color: black;
    font-size: 17px;
    transition: .2s;
}

.navi-links-dark a {
    text-decoration: none;
    color: white;
    font-size: 17px;
    transition: .2s;
}

.navi-links a:hover {
    color: red;
}

.navi-links a.nuxt-link-exact-active , .mobile-navigation-wrapper .bottom a.nuxt-link-exact-active {
    color: red;
}

.burger-btn {
    display: none;
}

.burger-btn button {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.burger {
    width: 30px;
    height: 3px;
    margin: 3px 0;
    background-color: black;
}

.mobile-navigation {
    width: 500px;
    height: 100vh;
    background-color: rgb(238, 238, 238);
    position: fixed;
    right: 0;
    z-index: 2000;
    display: none;
}

.mobile-navigation-wrapper {
    width: 500px;
    height: 100vh;
    padding: 30px;
    background-color: rgb(238, 238, 238);
    position: fixed;
    right: 0px;
    z-index: 2000;
}

.mobile-navigation-wrapper .top {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}

.mobile-navigation-wrapper .top img {
    width: 120px;
}

.mobile-navigation-wrapper .top button {
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
}

.mobile-navigation-wrapper .top button img {
    max-width: 100%;
    max-height: 100%;
}

.mobile-navigation-wrapper .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mobile-navigation-wrapper .bottom a {
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
}

/* .mobile-navi-trans-enter-from {
    opacity: 0;
}

.mobile-navi-trans-enter-active {
    transition: all 1000ms ease;
}

.mobile-navi-trans-leave-to {
    opacity: 0;
}

.mobile-navi-trans-leave-active {
    transition: all 1000ms ease;
} */

@media only screen and (max-width: 1200px) {
    .navi {
        height: 66px;
    }

    .navigation {
        padding: 10px 30px;
    }

    .navi-links {
        display: none;
    }

    .burger-btn {
        display: block;
    }

    .mobile-navigation {
        display: flex;
        justify-content: right;
    }
}

@media only screen and (max-width: 991px) {
    .navi {
        height: 55px;
    }

    .logo img {
        width: 160px;
    }
}

@media only screen and (max-width: 767px) {
    .navigation {
        padding: 10px 10px;
    }

    .logo img {
        width: 120px;
    }
}

@media only screen and (max-width: 530px) {
    .mobile-navigation-wrapper {
        width: 100vw;
    }
}
</style>