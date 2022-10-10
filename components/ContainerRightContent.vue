<template>
    <div class="container-right-content">
        <div class="right">
            <slot name="img"></slot>
        </div>
        <div class="left">
            <span class="title">
                <slot name="title"></slot>
            </span>
            <p class="content">
                <slot name="content"></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container-right-content {
    margin-bottom: 30px;
    display: flex;
}

.title {
    font-size: 23px;
    font-weight: 500;
    background: linear-gradient(to right, red, red, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.left {
    padding: 30px 0 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:flex-end;
}

.content{
    text-align: right;
}

.right {
    min-width: 300px;
    height: 300px;
    display: flex;
    justify-content: left;
}

@media only screen and (max-width: 767px) {
    .container-right-content {
        padding: 0 20px 20px 20px;
        flex-direction: column;
        margin-bottom: 40px;
        border: 1px solid rgba(0, 0, 0, 0.192);
        border-radius: 10px;
    }

    .container-right-content :nth-child(1){
        order: 1;
    }

    .left :nth-child(2){
        order: 1;
    }

    .left {
        padding: 20px 0 20px 0;
        align-items: center;
    }

    .title {
        margin-bottom: 20px;
        font-size: 20px;
    }

    .content {
        text-align: center;
    }

    .right {
        min-width: 200px;
        height: 200px;
        justify-content: center;
    }
}

</style>