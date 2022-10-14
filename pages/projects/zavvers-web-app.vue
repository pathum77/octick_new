<template>
    <div class="portfolio-item-view container-xxl">
        <div class="top">
            <div class="top-wrapper row">
                <div class="title-devider-box col-lg-4">
                    <div class="title">
                        <h6>WEB DEVELOPMENT WORK</h6>
                        <span>ZAVVERS</span>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="col-lg-6">
                    <p>
                        The Barometer aims to deepen the understanding of reconciliation and social cohesion to inform
                        the
                        public discourse and help decision-makers to work towards its realization. At LAYOUTindex, we
                        provide a custom-built web application with a data analytics tool to show statistics taken from
                        the
                        NGO visually shown on the website.
                    </p>
                </div>
                <div class="top-wrapper-btn-box col-lg-2">
                    <a href="https://www.zavvers.com.au" target="_blank">VIEW SITE</a> 
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="pc-view-box">
                <!-- <div class="frame">
                    <div class="screen">
                        <img src="../assets/portfolio/tst/thebarometer-lk-en-2022-04-22-12-51-57.png" alt="">
                    </div>
                </div> -->
                <img style="width: 100%; pointer-events: none;" src="../../assets/images/clients/laptop.png" alt="">
                <div class="screen">
                    <img src="../../assets/images/clients/zavvers.png" alt="">
                </div>
            </div>
            <div class="share">
                <!-- <p>SHARE</p>
                <div class="social">
                    <div><img src="../../assets/icons/facebook_col.png" alt=""></div>
                    <div><img src="../../assets/icons/twitter_col.png" alt=""></div>
                    <div><img src="../../assets/icons/google+_col.png" alt=""></div>
                </div> -->
            </div>
            <div class="row">
                <div class="tab-view-box col-lg col-md">
                    <div class="frame">
                        <div class="screen">
                            <img src="../../assets/images/clients/zavvers.png" alt="">
                        </div>
                    </div>
                    <div class="home-btn"></div>
                </div>
                <div class="mobile-view-box col-lg col-md">
                    <div class="frame">
                        <div class="screen">
                            <img src="../../assets/images/clients/zavvers_mobile.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style scoped>
.container-xxl {
    padding: 0;
}

.row {
    margin: 0;
}

.top {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0 30px 0;
}

.top-wrapper {
    padding: 20px;
}

.title-devider-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title-devider-box .title span{
    font-size: 40px;
    font-weight: 500;
    background: linear-gradient(to right, red, red, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.line {
    height: 100%;
    width: 1px;
    background: linear-gradient(to right, red, red, blue, blue);
}

.top-wrapper-btn-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.top-wrapper-btn-box a {
    padding: 5px 20px;
    border: none;
    text-decoration: none;
    background: linear-gradient(to right, purple,purple, blue, blue);
    /* background-color: red; */
    color: white;
    font-size: 18px;
}

.bottom {
    padding: 50px;
    background-color: rgba(128, 128, 128, 0.123);
}

.screen img {
    max-width: 100%;
}

.pc-view-box {
    width: 800px;
    margin: 0 auto;
    position: relative;
}

.pc-view-box .frame {
    width: 80%;
    height: 80%;
    margin: auto;
    border: 4px solid grey;
    border-radius: 20px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pc-view-box .screen {
    width: 615px;
    height: 392px;
    margin: auto;
    background-color: black;
    position: absolute;
    top: 6.1%;
    left: 12%;
    overflow-y: auto;
}

.share {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.share p {
    font-weight: bold;
}

.social {
    display: flex;

}

.social div {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.social div img {
    max-width: 100%;
}

.mobile-view-box {
    height: 500px;
    margin-bottom: 30px;
}

.mobile-view-box .frame {
    width: 250px;
    height: 100%;
    background-color: black;
    border: 3px solid grey;
    border-radius: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mobile-view-box .screen {
    width: 95%;
    height: 97%;
    background-color: black;
    border-radius: 35px;
    overflow-y: auto;
}

.tab-view-box {
    height: 500px;
    margin-bottom: 30px;
}

.tab-view-box .frame {
    width: 330px;
    height: 100%;
    background-color: black;
    border: 3px solid grey;
    border-radius: 30px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tab-view-box .screen {
    width: 90%;
    height: 85%;
    background-color: black;
    overflow-y: auto;
}

.screen::-webkit-scrollbar {
    /* width: .5vw; */
    width: 0;
}

.screen::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 20px;
}

.screen::-webkit-scrollbar-thumb:hover {
    background-color: rgb(202, 0, 0);
}

.screen::-webkit-scrollbar-track {
    background-color: rgba(128, 128, 128, 0.329);
}

.tab-view-box .home-btn {
    width: 30px;
    height: 30px;
    border: 2px solid grey;
    border-radius: 50%;
    background-color: black;
    position: relative;
    left: 48%;
    bottom: 36px;
}

@media only screen and (max-width: 1200px) {
    .bottom {
        padding: 50px 30px;
    }
}

@media only screen and (max-width: 991px) {
    .navi {
        height: 75px;
    }

    .top {
        padding-top: 30px;
    }

    .title-devider-box {
        flex-direction: column;
        align-items: flex-start;
    }

    .line {
        height: 1px;
        width: 100%;
        margin: 10px 0;
    }

    .top-wrapper-btn-box {
        justify-content: left;
    }
}

@media only screen and (max-width: 767px) {

    .top-wrapper{
        padding: 0;
    }

    .col-lg-6 , .col-lg-4{
        padding: 10px;
    }

    .bottom {
        padding: 30px 10px;
    }
}

/*  */

@media only screen and (max-width: 880px) {

    .pc-view-box {
        width: 600px
    }

    .pc-view-box .screen {
        width: 462px;
        height: 294px;
        background-color: black;
    }
}

@media only screen and (max-width: 650px) {

    .pc-view-box {
        width: 330px
    }

    .pc-view-box .screen {
        width: 254px;
        height: 162px;
        background-color: black
    }
}
</style>