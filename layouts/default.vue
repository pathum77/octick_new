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
                        <NuxtLink to="/why-we-do-it">About Us</NuxtLink>
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

            <!-- <transition name="mobile-navi-trans"> -->
                <div v-if="mobileNaviIsVisible" class="mobile-navigation">
                    <transition name="mobile-navi-trans">
                        <div :ref="mobileNaviIsVisible" class="mobile-navigation-wrapper">
                            <div class="top">
                                <img :src="themeStatus ? require('../assets/logo/Octic_Logo_White_landscape.png') : require('../assets/logo/Octic_Logo_Black_landscape.png')"
                                    alt="">
                                <button @click="mobileNaviIsVisible = false;" class="btn-close"><img src="../assets/icons/close.png" alt=""></button>
                            </div>
                            <div class="bottom">
                                <NuxtLink to="/development">Development</NuxtLink>
                                <NuxtLink to="/digital-marketing">Digital Marketing</NuxtLink>
                                <NuxtLink to="/solutions">Solutions</NuxtLink>
                                <NuxtLink to="/clients">Clients</NuxtLink>
                                <NuxtLink to="/why-we-do-it">About Us</NuxtLink>
                                <SheduleCallBtn />
                            </div>
                        </div>
                    </transition>
                </div>
            <!-- </transition> -->
            
        </div>
        <nuxt />
        <div class="footer">
        <div class="row">
            <div class="col-lg-4 items-wrapper">
                <img src="../assets/logo/Octic_Logo_Black_landscape.png" alt="" class="logo">
                <p>Simplified digital presence</p>
                <p>Grow your business at the place you want</p>
            </div>
            <div class="col-lg-2 items-wrapper">
                <h3>Product</h3>
                <a href="">Features</a>
                <a href="">API</a>
                <a href="">Solutuins</a>
            </div>
            <div class="col-lg-2 items-wrapper">
                <h3>Company</h3>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
            </div>
            <div class="col-lg-2 items-wrapper">
                <h3>Support</h3>
                <a href="">Support Center</a>
                <a href="">System Status</a>
                <a href="">Languages</a>
            </div>
            <div class="col-lg-2 items-wrapper">
                <h3>Product</h3>
                <div>
                    <a href=""><img src="" alt=""></a>
                    <a href=""><img src="" alt=""></a>
                    <a href=""><img src="" alt=""></a>
                </div>
            </div>
        </div>
        <hr>
        <div class="copyright-wrapper">
            <a href="">&copy; 2022 OCTICK</a>
            <div>
                <a href="">Terms & Conditions</a>
                <p>&nbsp; | &nbsp;</p>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import SheduleCallBtn from '~/components/SheduleCallBtn.vue';


export default {

    transition: 'mobile-navi-trans',

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

.mobile-navi-trans-enter-active, .mobile-navi-trans-leave-active { transition: all 1s; }
  .mobile-navi-trans-enter, .mobile-navi-trans-leave-active { opacity: 0; }


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

.navi-links a.nuxt-link-exact-active {
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

.mobile-navigation .top button img{
    max-width: 100%;
    max-height: 100%;
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

/* FOOTER */

   .footer p{
        font-size: 13px;
    }

    .footer h3{
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .footer a{
        text-decoration: none;
        margin-bottom: 10px;
        font-size: 13px;
        color: black;
    }

    .footer{
        padding: 10px 50px;
    }

    .items-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }

    .logo{
        width: 200px;
        margin-bottom: 30px;
    }

    .copyright-wrapper{
        display: flex;
        justify-content: space-between;
    }

    .copyright-wrapper div{
        display: flex;
    }

    .items-wrapper div a{
        padding: 10px;
        background-color: grey;

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