<template>
    <div class="card">
        <div>
            <div class="title-main">
                <slot name="title-main"></slot>
            </div>
            <div class="title-sub">
                <slot name="title-sub"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
        <div>
            <div class="img">
                <slot name="img"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/* .colo-lg-6 , .col-md-6 , .card , .row{
    padding: 0;
    margin: 0;
} */

    .card{
        height: 100%;
        padding: 50px 30px;
        border: none;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.123);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title-main{
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 20px;
        background: linear-gradient(to right, red, red, blue, blue);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }

    .title-sub{
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 500;
    }

    .content{
        margin-bottom: 30px;
        font-size: 15px;
        font-weight: 500;
    }

    .img{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 991px) {

        .card{
            padding: 30px 20px;
        }
    }

    @media only screen and (max-width: 767px) {
        /* .card{
            padding: 30px 20px;
        } */
    }

</style>