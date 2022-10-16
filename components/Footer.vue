<template>
    <div class="footer">
        <div class="row">
            <div class="col-lg-4 col-md-8 items-wrapper">
                <img src="../assets/logo/Octic_Logo_Black_landscape.png" alt="" class="logo">
                <p>Simplified digital presence</p>
                <p>Grow your business at the place you want</p>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Product</h3>
                <a href="">Features</a>
                <a href="">API</a>
                <a href="">Solutuins</a>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Company</h3>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Support</h3>
                <a href="">Support Center</a>
                <a href="">System Status</a>
                <a href="">Languages</a>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Product</h3>
                <div class="product-items">
                    <a href=""><div class="social"><img src="../assets/icons/facebook.png" alt=""></div></a>
                    <a href=""><div class="social"><img src="../assets/icons/twitter.png" alt=""></div></a>
                    <a href=""><div class="social"><img src="../assets/icons/insta.png" alt=""></div></a>
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
</template>

<script>

export default {
    
}

</script>

<style scoped>

.row , .col-lg-6 , .col-lg-2 , .col-lg-4 , .col-md-4 , .col-md-8{
    padding: 0;
    margin: 0;
}

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

    .product-items{
        width: 100px;
        display: flex;
        justify-content: space-between;
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

    .social{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.13);
    }

    .social img{
        max-width: 60%;
        max-height:60%;
    }

    @media only screen and (max-width: 1200px) {
        .footer{
        padding: 10px 30px;
    }
    }

    @media only screen and (max-width: 767px) {

        .footer{
        padding: 10px;
    }

        .items-wrapper{
            align-items: center;
        }
    }

</style>
