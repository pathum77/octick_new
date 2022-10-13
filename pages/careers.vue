<template>
    <div class="careers">
        <div class="container-one">
            <div class="heading-main-wrapper">
                <h1 class="heading-main">Simplified digital presence.</h1>
            </div>
            <div class="banner-container"></div>
        </div>
        <div class="container-two">
            <h3 class="heading-sub">Working at OCTICK</h3>
            <div class="heading-main-wrapper">
                <h1 class="heading-main">Explore current opportunities.</h1>
            </div><br>
            <div class="careers-items-container">
                <div class="careers-items-wrapper container-xl">
                    <!-- UI/UX -->
                    <div class="careers-item">
                        <span class="title-1">UI/UX</span>
                        <span class="title-2">Software Engineering (Xamarin)</span>
                        <p>Full-time Permanent | Kandy, Sri Lanka</p>
                        <div v-if="uxUi" class="item-content">
                            <span class="title-3">About the role</span>
                            <p>We are looking for a Developer that is qualified in Xamarin Programming. <br><br>
                                Schedule: <br>
                            <ul>
                                <li>Day shift</li>
                                <li>Monday to Friday</li>
                            </ul>
                            Ability to commute/relocate:
                            <ul>
                                <li>Kandy : reliably commute or plan to relocate before starting work (preferred)</li>
                            </ul>
                            Experience:
                            <ul>
                                <li>Development 1 year (preferred)</li>
                            </ul>
                            Work remotely:
                            <ul>
                                <li>No</li>
                            </ul>
                            If you think you are a good fit, shoot us an email to info@technograpy.ca or call 077-123
                            0087
                            </p>
                        </div>
                        <div class="btn-wrapper">
                            <button @click="uxUi = !uxUi; uxUiForm = false;">See more</button>
                            <button @click="uxUiForm = !uxuiForm; uxUi = false;">Apply</button>
                        </div>
                        <div v-if="uxUiForm" class="form">
                            <label for="">Name</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Email</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Message</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Name</label><br>
                            <input class="" type="file" name="" id="">
                            <div class="form-btn-wrapper">
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <!-- Fullstack developer -->
                    <div class="careers-item">
                        <span class="title-1">FULLSTACK DEVELOPER</span>
                        <span class="title-2">Fullstack Software Developer</span>
                        <p>Full-time Permanent | Kandy, Sri Lanka</p>
                        <div v-if="fullstackDeveloper" class="item-content">
                            <span class="title-3">About the role</span>
                            <p>We are looking for a Full stack developer qualified and experienced in the following languages given below. <br><br>
                                <ul>
                                    <li>Java - Spring boot</li>
                                    <li>.NET</li>
                                    <li>Angular</li>
                                    <li>Vue JS</li>
                                    <li>Xamarin</li>
                                    <li>React</li>
                                </ul>
                                You don't need to know all of these languages to apply but, you need to have the confidence that you can improve yourself going forward. <br><br>
                                Schedule: <br>
                            <ul>
                                <li>Day shift</li>
                                <li>Monday to Friday</li>
                            </ul>
                                Ability to commute/relocate:
                            <ul>
                                <li>Kandy : reliably commute or plan to relocate before starting work (preferred)</li>
                            </ul>
                                
                            Experience:
                            <ul>
                                <li>Development 1 year (preferred)</li>
                            </ul>
                            Work remotely:
                            <ul>
                                <li>No</li>
                            </ul>
                            If you think you are a good fit, shoot us an email to info@technograpy.ca or call 077-123
                            0087
                            </p>
                        </div>
                        <div class="btn-wrapper">
                            <button @click="fullstackDeveloper = !fullstackDeveloper; fullstackDeveloperForm = false;">See more</button>
                            <button @click="fullstackDeveloperForm = !fullstackDeveloperForm; fullstackDeveloper = false;">Apply</button>
                        </div>
                        <div v-if="fullstackDeveloperForm" class="form">
                            <label for="">Name</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Email</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Message</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Name</label><br>
                            <input class="" type="file" name="" id="">
                            <div class="form-btn-wrapper">
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <!-- Social media designers -->
                    <div class="careers-item">
                        <span class="title-1">SOCIAL MEDIA DESIGNERS</span>
                        <span class="title-2">Social Media Designers</span>
                        <p>Kandy, Sri Lanka</p>
                        <div v-if="smDesigner" class="item-content">
                            <span class="title-3">About the role</span>
                            <p>We are a start-up software development firm / social media management company based in Kandy, Sri Lanka. We are handling work directly from Canada and Australia. This would be a great opportunity if you are fluent in English and are a bright and creative individual. <br><br>
                               If you are obsessed over good design and creativity, have an understanding of branding and social media marketing, you might be the one we are looking for. Experience in the space is a plus point although we do hire interns as well depending on your creativity.
                            </p>
                        </div>
                        <div class="btn-wrapper">
                            <button @click="smDesigner = !smDesigner; smDesignerForm = false">See more</button>
                            <button @click="smDesignerForm = !smDesignerForm; smDesigner = false;">Apply</button>
                        </div>
                        <div v-if="smDesignerForm" class="form">
                            <label for="">Name</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Email</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Message</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Name</label><br>
                            <input class="" type="file" name="" id="">
                            <div class="form-btn-wrapper">
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <!-- Social media manager -->
                    <div class="careers-item">
                        <span class="title-1">SOCIAL MEDIA MANAGER</span>
                        <span class="title-2">Social Media Manager</span>
                        <p>Kandy, Sri Lanka</p>
                        <div v-if="smManager" class="item-content">
                            <span class="title-3">About the role</span>
                            <p>This is a great opportunity if you are fluent in English and are a bright and creative individual. Having knowledge in software engineering or programming is a plus point. <br><br>
                                If you are obsessed over good design and creativity, have an understanding of branding and social media marketing, you might be the one we are looking for. We require at least one year experience for this position. Make sure you send us your portfolio / previous work as reference.
                            </p>
                        </div>
                        <div class="btn-wrapper">
                            <button @click="smManager = !smManager; smManagerForm = false;">See more</button>
                            <button @click="smManagerForm = !smManagerForm; smManager = false;">Apply</button>
                        </div>
                        <div v-if="smManagerForm" class="form">
                            <label for="">Name</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Email</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Message</label>
                            <input class="form-control" type="text" name="" id="">
                            <label for="">Name</label><br>
                            <input class="" type="file" name="" id="">
                            <div class="form-btn-wrapper">
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            uxUi: false,
            uxUiForm: false,
            fullstackDeveloper: false,
            fullstackDeveloperForm: false,
            smDesigner: false,
            smDesignerForm: false,
            smManager: false,
            smManagerForm: false,
        }
    }
}

</script>

<style scoped>
input {
    margin-bottom: 30px;
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

.careers-items-container {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
}

.careers-item {
    margin-bottom: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.title-1 {
    font-size: 20px;
    background: linear-gradient(to right, red, red, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.title-2 {
    font-size: 30px;
    background: linear-gradient(to right, purple, purple, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.title-3 {
    font-size: 18px;
    color: red;
}

.btn-wrapper button {
    width: 130px;
    height: 37px;
    font-weight: 500;
    background-color: transparent;
    border-radius: 5px;
}

.form {
    margin-top: 50px;
    width: 100%;
}

.form-btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.form-btn-wrapper button {
    margin-bottom: 50px;
    padding: 5px 20px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    border: solid 2px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(90deg, #fc0000, #0cfa03, #6200ff, #cd05ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px white inset;
    transition: .2s;
}

.form-btn-wrapper button:hover{
        box-shadow: none;
        color: white;
    }

@media only screen and (max-width: 1200px) {}

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