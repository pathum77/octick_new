<template>
    <div class="home-main">
        <div class="home">
            <div class="container-one">
                <div class="heading-main-wrapper">
                    <h1 class="heading-main">Simplified digital presence.</h1>
                </div>
                <div class="banner-container">
                    <div class="tech">
                        <TechImgsSlider/>
                    </div>
                </div>
            </div>
            <div class="container-two">
                <div class="heading-sub-wrapper">
                    <h2 class="heading-sub">We provide everything from expert advice to dedicated staffing, taking your
                        business from idea to implementation.</h2>
                </div>
                <h4>All while automating and growing your buisness at the pace you want.</h4><br>
                <div class="card-wrapper">
                    <div class="card">
                        <div>
                            <p class="title">Product Engineering</p>
                            <p class="title-sub">Develop your SaaS product with us , or hire your 1st developer.</p>
                            <p class="content-small">We provide flexible teams, advice, and support to take you from
                                launching your SaaS project from start to finish. Grow from 1 to 100 at your own pace
                            </p>
                        </div>
                        <div>
                            <div class="img-container">
                                <img src="../assets/3d/test.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="plus-container">
                        <img src="../assets/icons/plus.png" alt="">
                    </div>
                    <div class="card">
                        <p class="title">Digital Marketing</p>
                        <p class="title-sub">Go to Market with our Digital team, or hire your 1st dedicated Designer.
                        </p>
                        <p class="content-small">We provides consulting and qualified marketing professionals who have
                            managed ad spends with solid performance benchmarks. Get together and plan your digital
                            marketing journey today.</p>
                        <div class="img-container">
                            <img src="../assets/3d/test.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-three">
                <h1 class="heading-main">Build a Team <br> or <br> Be a part of ours.</h1><br>
                <div class="heading-sub-wrapper">
                    <h2 class="heading-sub">Our innovative concepts with and digital draws the eye and deliver higher
                        rates of change.</h2>
                </div>
                <div class="img-container">
                    <img src="../assets/images/home/build_a_team.png" alt="">
                </div>
                <div class="mobile-img-container">
                    <img src="../assets/images/home/build_a_team_mobile.png" alt="">
                </div>
            </div>
            <div class="container-four">
                <div style="width: 100%; position:absolute; top: 30px">
                    <h1 class="heading-main">What makes it work</h1>
                </div>
                <div
                    style="width: 100%; height: 400px; position: absolute; display: flex; justify-content: center; top: 100px;">
                    <div class="img-container">
                        <img src="../assets/images/home/human_body.png" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg col-md left">
                        <div class="content-wrapper">
                            <div class="content">
                                <p class="title">Development</p>
                                <p class="fw-bold">We will create a fully tailored approach and unleash your company s
                                    true potential with applications pledge to give our consumers the best experiance
                                    and help you achieve optimum profitability on your IT expenses.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg col-md right">
                        <div class="content-wrapper">
                            <div class="content">
                                <p class="title">Digital Marketing</p>
                                <p class="fw-bold">Maintain an online presence and reputation, creating a quality
                                    digital marketing strategies are more advanced and versatilethan in the past, which
                                    requires the initiation and maintenance of professional expertise.That s exatly what
                                    we got.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-five">
                <div class="heading-sub-wrapper">
                    <h2 class="heading-sub">Don t take our word for it</h2>
                </div>
                <div>
                    <div class="heading-sub-wrapper">
                        <p class="content">We work with the best in the business marketers, developers, and strategists
                            helping achieve client goals.</p>
                    </div>
                    <div class="img-wrapper">
                        <WorkImgsSlider/>
                    </div>
                </div>
            </div>
            <div class="container-six">
                <div class="extra-services-bg">
                    <img src="../assets/images/home/extra_services_bg.png" alt="">
                </div>
                <p class="title-main">Extra services we provide.</p>
                <div class="row">
                    <div class="col-lg">
                        <div class="card-wrapper">
                            <div class="img-container">
                                <img src="" alt="">
                            </div>
                            <p class="container-six-title">SEO Content Writing</p>
                            <p class="container-six-content">We work with your company to implement a comprehensive SEO
                                strategy, driving your website with targeted traffic. The first two pages of Google
                                search results will help your business get measurable results which will drive your
                                company forward.</p>
                        </div>
                    </div>
                    <div class="col-lg">
                        <div class="card-wrapper">
                            <div class="img-container">
                                <img src="../assets/icons/cyber_security.png" alt="">
                            </div>
                            <p class="container-six-title">Cyber Security</p>
                            <p class="container-six-content">Having that extra step in the right direction in the
                                technogogy industry would help you much in the digital space. Our experts are always
                                available to give your buisness the best practice of protecting systems, networks, and
                                programs from digital attacks.</p>
                        </div>
                    </div>
                    <div class="col-lg">
                        <div class="card-wrapper">
                            <div class="img-container">
                                <img src="../assets/icons/customer_service.png" alt="">
                            </div>
                            <p class="container-six-title">Customer Service</p>
                            <p class="container-six-content">Customer Service Representative would handle complaints,
                                provide appropriate solutions for customers, and follow up to resolve any issues and
                                enhance customers experience of the business.Hire as you get bigger</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-seven">
                <HowWeCanHelp />
            </div>
        </div>
    </div>
</template>

<script>
import SheduleCallBtn from '~/components/SheduleCallBtn.vue';
import EmailBtn from '../components/EmailBtn.vue';
import HowWeCanHelp from '~/components/HowWeCanHelp.vue';
import WorkImgsSlider from '~/components/WorkImgsSlider.vue';
import TechImgsSlider from '~/components/TechImgsSlider.vue';

export default {
    components: { SheduleCallBtn, EmailBtn, HowWeCanHelp, WorkImgsSlider, TechImgsSlider}
}
</script>

<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}

.row {
    padding: 0;
    margin: 0;
}

h4 {
    text-align: center;
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

.home {
    min-height: 100vh;
}

.container-one {
    padding-top: 50px;
}

.banner-container {
    width: 100%;
    height: 50vw;
    position: relative;
    background-image: url('../assets/banners/main_banner.png');
    background-repeat: no-repeat;
    background-size: contain;
}

.tech {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 40px;
}

.tech-img-container {
    width: 140px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-two {
    padding: 0 50px;
}

.heading-sub-wrapper {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
}

.card-wrapper {
    display: flex;
    justify-content: space-between;
}

.card-wrapper .card {
    width: 45%;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.068);
    border: none;
}

.title {
    font-size: 22px;
    font-weight: 500;
    background: linear-gradient(to right, blue, blue, rgb(0, 191, 255), rgb(0, 191, 255));
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.title-sub {
    font-size: 22px;
    font-weight: 500;
}

.card-wrapper .card .content-small {
    font-size: 13px;
    font-weight: 500;
}

.plus-container {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-two .img-container {
    width: 200px;
    height: 200px;
}

.container-three {
    padding: 100px 50px 30px 50px;
}

.container-three .img-container {
    width: 100%;
}

.container-three .mobile-img-container {
    width: 100%;
    display: none;
}

.container-four {
    position: relative;
}

.container-four .img-container {
    width: 400px;
    height: 400px;
}

.container-four .left {
    padding: 300px 0 30px 50px;
    background-color: rgba(0, 0, 0, 0.116);
}

.container-four .right {
    padding: 300px 50px 30px 0;
    text-align: right;
}

.content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.container-four .right .content-wrapper {
    align-items: flex-end;
}

.content {
    max-width: 300px;
}

.container-five {
    padding-top: 50px;
}

.container-five .content {
    max-width: 500px;
    text-align: center;
}

.container-five .img-wrapper {
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
    /* background-color: rgba(0, 0, 0, 0.123); */
}

.container-six {
    color: white;
    padding: 100px 50px;
    position: relative;
    /* background-color: red; */
}

.container-six .col-lg{
    margin-bottom: 50px;
}

.extra-services-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.extra-services-bg img {
    width: 100%;
    height: 100%;
}

.container-six .title-main {
    font-size: 30px;
    text-align: center;
    font-weight: 500;
    /* color: white; */
}

.container-six .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-six .img-container img{
    width: 100px;
    height: 100px;
}

.container-six-title {
    font-size: 20px;
    font-weight: 500;
}

.container-six-content {
    text-align: center;
}

.container-seven {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 1200px) {

    .banner-container {
        height: 60vw;
    }

    .tech {
        bottom: 100px;
    }

    .container-two {
        padding: 0 30px;
    }

    .container-three {
        padding: 80px 30px 20px 30px;
    }

    .container-four .img-container {
        width: 300px;
        height: 300px;
    }

    .container-six {
        padding: 100px 30px;
    }
}

@media only screen and (max-width: 991px) {
    .heading-main {
        font-size: 40px;
    }

    .heading-sub {
        font-size: 28px;
    }

    .tech {
        bottom: 70px;
    }

    .card-wrapper .card {
        width: 50%;
        padding: 20px 10px;
    }

    .container-four {
        display: none;
    }
}

@media only screen and (max-width: 767px) {

    .banner-container {
        height: 70vw;
    }

    .tech {
        bottom: 50px;
    }

    .container-two,
    .container-four {
        padding: 0 10px;
    }

    .container-three {
        padding: 50px 10px 20px 10px;
    }

    .heading-main {
        font-size: 30px;
    }

    .heading-sub {
        font-size: 22px;
    }

    h4 {
        font-size: 17px;
    }

    .card-wrapper {
        flex-direction: column;
    }

    .card-wrapper .card {
        width: 100%;
        padding: 20px 10px;
    }

    .plus-container {
        height: 50px;
        width: 100%;
    }

    .container-three .img-container {
        display: none;
    }

    .container-three .mobile-img-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-four {
        display: none;
    }

    .container-six {
        padding: 150px 10px;
    }
}
</style>