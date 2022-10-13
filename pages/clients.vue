<template>
    <div class="clientts">
        <div class="container-one">
            <div class="heading-main-wrapper">
                <h1 class="heading-main">Simplified digital presence.</h1>
            </div>
            <div class="banner-container"></div>
        </div>
        <div class="portfolio container-xxl">
            <div class="body">
                <div class="heading-main-wrapper">
                    <br><h1 class="heading-main">Our Works</h1><br>
            </div>
                <div class="items-wrapper row gy-5">
                    <div class="col-lg-6 col-md-6">
                        <div class="item">
                            <div class="img">
                                <img src="../assets/images/clients/zavvers.png" alt="">
                            </div>
                            <h2>ZAVVERS Cleaning</h2>
                            <h6>WEB DEVELOPMENT</h6>
                            <NuxtLink to="/projects/zavvers-web-app">READ MORE</NuxtLink>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="item">
                            <div class="img">
                                <img src="../assets/images/clients/ramada_mobile.png" alt="">
                            </div>
                            <h2>RAMADA Hotel</h2>
                            <h6>MOBILE DEVELOPMENT</h6>
                            <NuxtLink to="/projects/ramada-mob-app">READ MORE</NuxtLink>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="item">
                            <div class="img">
                                <img src="../assets/images/clients/cake.png" alt="">
                            </div>
                            <h2>CAKE</h2>
                            <h6>WEB DEVELOPMENT</h6>
                            <NuxtLink to="/projects/cake-web-app">READ MORE</NuxtLink>
                        </div>
                    </div>
                </div>
                <br><br>
            </div>
        </div>
    </div>
</template>

<script>
import MainBanner from '~/components/MainBanner.vue';


export default {
    data() {
        return {
            aLink: "",
        };
    },
    methods: {
        readMoreClick() {
            this.aLink = "/portfolio-item";
        }
    },
    components: { MainBanner }
}

</script>

<style scoped>

.container-one {
    padding-top: 50px;
}

.heading-main {
    text-align: center;
    font-size: 55px;
    background: linear-gradient(to right, red, red, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.heading-sub {
    text-align: center;
    font-weight: 500;
}

.banner-container {
    width: 100%;
    height: 50vw;
    position: relative;
    background-image: url('../assets/banners/main_banner.png');
    background-repeat: no-repeat;
    background-size: contain;
}

.container-xxl {
    padding: 0;
}

/* .portfolio {
    background-color: rgba(128, 128, 128, 0.185);
} */

.body {
    max-width: 850px;
    margin: 0px auto;
}

.body h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #365D87;
}

.item {
    margin-bottom: 50px;
}

.item .img {
    max-width: 100%;
    height: 300px;
    overflow: hidden;
}

.item img {
    max-width: 100%;
}

.item a {
    text-decoration: none;
    padding: 5px 20px;
    border: none;
    color: white;
    background-color: #365D87;
}


@media only screen and (max-width: 991px) {

    .heading-main {
        font-size: 40px;
    }

    .heading-sub {
        font-size: 28px;
    }

    .body {
        margin: 30px 0;
        padding: 30px;
    }
}

@media only screen and (max-width: 767px) {

    .heading-main {
        font-size: 30px;
    }

    .heading-sub {
        font-size: 22px;
    }

    .body {
        margin: 10px 0;
        padding: 10px;
    }

}
</style>