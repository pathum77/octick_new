<template>
    <div class="container-main">
        <div class="container-seven">
            <div class="heading-sub-wrapper" style="margin: 0;">
                <h2 class="heading-sub">How can we help?</h2>
            </div>
            <div class="heading-main-wrapper">
                <h1 class="heading-main">Talk to our experts today.</h1>
            </div>
            <div class="img-container">
                <img src="../assets/icons/how-we-can-help.png" alt="">
            </div>
            <div class="btn-wrapper">
                <SheduleCallBtn />
                <EmailBtn />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}

.container-seven {
    margin-bottom: 50px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-seven .img-container {
    width: 200px;
    height: 200px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.container-seven .btn-wrapper {
    width: 300px;
    display: flex;
    justify-content: space-between;
}

.heading-sub-wrapper {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
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

@media only screen and (max-width: 991px) {
    .heading-main {
        font-size: 40px;
    }

    .heading-sub {
        font-size: 28px;
    }
}

@media only screen and (max-width: 767px) {
    .heading-main {
        font-size: 30px;
    }

    .heading-sub {
        font-size: 22px;
    }
}
</style>