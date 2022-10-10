<template>
    <div>
        <div class="navi">
            <div :class="themeStatus ? 'navigation-dark' : 'navigation'">
                <div class="navigation-wrapper">
                    <div class="logo">
                        <a href="/">
                            <img :src="themeStatus ? require('../assets/logo/Octic_Logo_White_landscape.png') : require('../assets/logo/Octic_Logo_Black_landscape.png')"
                                alt="">
                        </a>
                    </div>
                    <div :class="themeStatus ? 'navi-links-dark' : 'navi-links'">
                        <a href="/development">Development</a>
                        <a href="/digital-marketing">Digital Marketing</a>
                        <a href="/solutions">Solutions</a>
                        <a href="/clients">Clients</a>
                        <a href="/why-we-do-it">Why we do it</a>
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

            <div v-if="mobileNaviIsVisible" class="mobile-navigation">
                <transition name="mobile-navi-trans">
                    <div v-if="mobileNaviIsVisible" class="mobile-navigation-wrapper">
                        <div class="top">
                            <img :src="themeStatus ? require('../assets/logo/Octic_Logo_White_landscape.png') : require('../assets/logo/Octic_Logo_Black_landscape.png')"
                                alt="">
                            <button @click="mobileNaviIsVisible = false;" class="btn-close"></button>
                        </div>
                        <div class="bottom">
                            <a href="/development">Development</a>
                            <a href="/digital-marketing">Digital Marketing</a>
                            <a href="/solutions">Solutions</a>
                            <a href="/clients">Clients</a>
                            <a href="/why-we-do-it">Why we do it</a>
                            <SheduleCallBtn />
                        </div>
                    </div>
                </transition>
            </div>

        </div>
        <nuxt />
    </div>
</template>

<script>
import SheduleCallBtn from '~/components/SheduleCallBtn.vue';


export default {
    data() {
        return {
            themeStatus: null,
            mobileNaviIsVisible: false,
        }
    },

    components: {
        SheduleCallBtn
    },

}

</script>

<style scoped>
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
}

.navi-links {
    width: 70%;
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
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.514);
    position: fixed;
    z-index: 2000;
    display: none;
}

.mobile-navigation-wrapper {
    width: 500px;
    padding: 30px;
    background-color: white;
    position: relative;
}

.mobile-navigation .top {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}

.mobile-navigation .top img {
    width: 120px;
}

.mobile-navigation .top button {
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
}

.mobile-navigation .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mobile-navigation .bottom a {
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
}

.mobile-navi-trans-enter-from {
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
}

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
</style>