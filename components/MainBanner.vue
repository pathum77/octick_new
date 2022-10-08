<template>
    <div class="main-banner">
        <div class="container-one">
            <div class="heading-main-wrapper">
                <h1 class="heading-main"><slot name="header-1"></slot></h1>
            </div>
            <div class="banner-container">
                <img src="../assets/banners/main_banner_2.png" alt="">
            </div>
            <div class="content-container">
                <span class="sub-hedding-1"><slot name="header-2"></slot></span>
                <p><slot name="content-2"></slot></p><br>
                <span class="sub-hedding-2"><slot name="header-3"></slot></span>
                <p><slot name="content-3"></slot></p><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>

    img{
        max-width: 100%;
        max-height: 100%;
    }

p {
    margin-top: 30px;
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
    max-width: 1000px;
    text-align: center;
}

.container-one {
    padding-top: 50px;
    position: relative;
}

.banner-container {
    width: 100%;
    position: relative;
}

.content-container {
    width: 100%;
    padding: 0 50px;
    position: relative;
    bottom: 80px;
}

.sub-hedding-1 {
    font-size: 25px;
    font-weight: 500;
    background: linear-gradient(to right, rgb(98, 0, 255), rgb(98, 0, 255), rgb(0, 140, 255), rgb(0, 140, 255));
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.sub-hedding-2 {
    font-size: 23px;
    font-weight: 500;
    background: linear-gradient(to right, blue, blue, red, red);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

@media only screen and (max-width: 1200px) {

    .content-container{
        padding: 0 30px;
        /* bottom: 150px; */
    }
}

@media only screen and (max-width: 991px) {
    
    .heading-main {
        font-size: 40px;
    }

    .sub-hedding-1 {
        font-size: 25px;
    }
}

@media only screen and (max-width: 767px) {

    .heading-main{
          font-size: 30px;
    }

    .content-container{
        padding: 0 10px;
        bottom: 30px;
    }

    .sub-hedding-1, .sub-hedding-2 {
        font-size: 20px;
    }
}

</style>