<template>
    <div class="careers">
        <Loader v-if="loading" />
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
                        <div class="btn-wrapper">
                            <button v-if="uiUxSeeBtn"
                                @click="uxUi = !uxUi; uiUxSeeBtn = false; uxUiForm = false; uiUxApplyBtn = true;">See
                                more</button>
                            <button v-if="uiUxApplyBtn"
                                @click="uxUiForm = !uxUiForm; uiUxApplyBtn = false; uxUi = false; uiUxSeeBtn = true;">Apply</button>
                        </div>
                        <transition name="trans">
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
                                    <li>Kandy : reliably commute or plan to relocate before starting work (preferred)
                                    </li>
                                </ul>
                                Experience:
                                <ul>
                                    <li>Development 1 year (preferred)</li>
                                </ul>
                                Work remotely:
                                <ul>
                                    <li>No</li>
                                </ul>
                                If you think you are a good fit, shoot us an email to info@technograpy.ca or call
                                077-123
                                0087
                                </p>
                            </div>
                        </transition>
                        <transition name="trans">
                            <div v-if="uxUiForm" class="form" id="uiux-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FSoftwareEngineeringXamarin()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>

                    </div>
                    <!-- Fullstack developer -->
                    <div class="careers-item">
                        <span class="title-1">FULLSTACK DEVELOPER</span>
                        <span class="title-2">Fullstack Software Developer</span>
                        <p>Full-time Permanent | Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button v-if="fullstackDeveloperSeeBtn"
                                @click="fullstackDeveloper = !fullstackDeveloper; fullstackDeveloperForm = false; fullstackDeveloperSeeBtn = false; fullstackDeveloperApplyBtn = true;">See
                                more</button>
                            <button v-if="fullstackDeveloperApplyBtn"
                                @click="fullstackDeveloperForm = !fullstackDeveloperForm; fullstackDeveloper = false; fullstackDeveloperSeeBtn = true; fullstackDeveloperApplyBtn = false;">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="fullstackDeveloper" class="item-content">
                                <span class="title-3">About the role</span>
                                <p>We are looking for a Full stack developer qualified and experienced in the following
                                    languages given below. <br><br>
                                <ul>
                                    <li>Java - Spring boot</li>
                                    <li>.NET</li>
                                    <li>Angular</li>
                                    <li>Vue JS</li>
                                    <li>Xamarin</li>
                                    <li>React</li>
                                </ul>
                                You don't need to know all of these languages to apply but, you need to have the
                                confidence
                                that you can improve yourself going forward. <br><br>
                                Schedule: <br>
                                <ul>
                                    <li>Day shift</li>
                                    <li>Monday to Friday</li>
                                </ul>
                                Ability to commute/relocate:
                                <ul>
                                    <li>Kandy : reliably commute or plan to relocate before starting work (preferred)
                                    </li>
                                </ul>

                                Experience:
                                <ul>
                                    <li>Development 1 year (preferred)</li>
                                </ul>
                                Work remotely:
                                <ul>
                                    <li>No</li>
                                </ul>
                                If you think you are a good fit, shoot us an email to info@technograpy.ca or call
                                077-123
                                0087
                                </p>
                            </div>
                        </transition>
                        <transition name="trans">
                            <div v-if="fullstackDeveloperForm" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FFullstackDeveloper()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>

                    </div>
                    <!-- Social media designers -->
                    <div class="careers-item">
                        <span class="title-1">SOCIAL MEDIA DESIGNERS</span>
                        <span class="title-2">Social Media Designers</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button v-if="smDesignerSeeBtn"
                                @click="smDesigner = !smDesigner; smDesignerForm = false; smDesignerSeeBtn = false; smDesignerApplyBtn = true;">See
                                more</button>
                            <button v-if="smDesignerApplyBtn"
                                @click="smDesignerForm = !smDesignerForm; smDesigner = false; smDesignerSeeBtn = true; smDesignerApplyBtn = false;">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="smDesigner" class="item-content">
                                <span class="title-3">About the role</span>
                                <p>We are a start-up software development firm / social media management company based
                                    in
                                    Kandy, Sri Lanka. We are handling work directly from Canada and Australia. This
                                    would be
                                    a great opportunity if you are fluent in English and are a bright and creative
                                    individual. <br><br>
                                    If you are obsessed over good design and creativity, have an understanding of
                                    branding
                                    and social media marketing, you might be the one we are looking for. Experience in
                                    the
                                    space is a plus point although we do hire interns as well depending on your
                                    creativity.
                                </p>
                            </div>
                        </transition>
                        <transition name="trans">
                            <div v-if="smDesignerForm" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FSocialMediaDesigner()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>

                    </div>
                    <!-- Social media manager -->
                    <div class="careers-item">
                        <span class="title-1">SOCIAL MEDIA MANAGER</span>
                        <span class="title-2">Social Media Manager</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button v-if="smManagerSeeBtn"
                                @click="smManager = !smManager; smManagerForm = false; smManagerSeeBtn = false; smManagerApplyBtn = true;">See
                                more</button>
                            <button v-if="smManagerApplyBtn"
                                @click="smManagerForm = !smManagerForm; smManager = false; smManagerSeeBtn = true; smManagerApplyBtn = false;">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="smManager" class="item-content">
                                <span class="title-3">About the role</span>
                                <p>This is a great opportunity if you are fluent in English and are a bright and
                                    creative
                                    individual. Having knowledge in software engineering or programming is a plus point.
                                    <br><br>
                                    If you are obsessed over good design and creativity, have an understanding of
                                    branding
                                    and social media marketing, you might be the one we are looking for. We require at
                                    least
                                    one year experience for this position. Make sure you send us your portfolio /
                                    previous
                                    work as reference.
                                </p>
                            </div>
                        </transition>
                        <transition name="trans">
                            <div v-if="smManagerForm" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FSocialMediaManager()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>

                    </div>
                </div>
            </div>
            <hr><br>
            <h3 class="heading-sub">INTERNSHIPS</h3>
            <div class="internship" id="internship">

                <div class="container-xl">
                    <!-- Web developer-->
                    <div class="careers-item">
                        <span class="title-1">WEB DEVELOPER</span>
                        <span class="title-2">Web Developer</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button @click="webDeveloper = !webDeveloper">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="webDeveloper" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FInternWebDeveloper()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <!-- Software developer-->
                    <div class="careers-item">
                        <span class="title-1">SOFTWARE DEVELOPER</span>
                        <span class="title-2">Software Developer</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button @click="softwareDeveloper = !softwareDeveloper">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="softwareDeveloper" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <label for="">Upload Your CV:</label><br>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FInternSoftwareDeveloper()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <!-- UI/UX designer-->
                    <div class="careers-item">
                        <span class="title-1">UI/UX DESIGNER</span>
                        <span class="title-2">Ui/Ux Designer</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button @click="uiUxDesigner = !uiUxDesigner">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="uiUxDesigner" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <label for="">Upload Your CV:</label><br>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FInternUxUiDesigner()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <!-- graphic designer-->
                    <div class="careers-item">
                        <span class="title-1">GRAPHIC DESIGNER</span>
                        <span class="title-2">Graphic Designer</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button @click="graphicDesigner = !graphicDesigner">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="graphicDesigner" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <label for="">Upload Your CV:</label><br>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FInternGraphicDesigner()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <!-- call center-->
                    <div class="careers-item">
                        <span class="title-1">CALL CENTER</span>
                        <span class="title-2">Call Center Representative</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button @click="callcenter = !callcenter">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="callcenter" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <label for="">Upload Your CV:</label><br>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FInternCallCenter()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <!-- social media designer-->
                    <div class="careers-item">
                        <span class="title-1">SOCIAL MEDIA</span>
                        <span class="title-2">Social Media Designer</span>
                        <p>Kandy, Sri Lanka</p>
                        <div class="btn-wrapper">
                            <button @click="socialMediaDesigner = !socialMediaDesigner">Apply</button>
                        </div>
                        <transition name="trans">
                            <div v-if="socialMediaDesigner" class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input v-model="firstName" class="form-control" type="text" name="" id=""
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="lastName" class="form-control" type="text" name="" id=""
                                            placeholder="Last Name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="email" class="form-control" type="email" name="" id=""
                                            placeholder="E-Mail">
                                    </div>
                                    <div class="col-lg-6">
                                        <input v-model="mobile" class="form-control" type="number" name="" id=""
                                            placeholder="Mobile Number">
                                    </div>
                                </div>
                                <label for="">Upload Your CV:</label><br>
                                <input class="" type="file" ref="file" @change="setUploadFile" name="" id="">
                                <div class="form-btn-wrapper">
                                    <button @click="FInternSocialMediaDesigner()">SUBMIT</button>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2'

export default {
    data() {
        return {
            cv: '',
            loading: false,
            api: 'http://localhost:4000/careers',

            firstName: '',
            lastName: '',
            email: '',
            mobile: '',

            uxUi: false,
            uxUiForm: false,
            uiUxSeeBtn: true,
            uiUxApplyBtn: false,

            fullstackDeveloper: false,
            fullstackDeveloperForm: false,
            fullstackDeveloperSeeBtn: true,
            fullstackDeveloperApplyBtn: false,

            smDesigner: false,
            smDesignerForm: false,
            smDesignerSeeBtn: true,
            smDesignerApplyBtn: false,

            smManager: false,
            smManagerForm: false,
            smManagerSeeBtn: true,
            smManagerApplyBtn: false,

            webDeveloper: false,

            softwareDeveloper: false,

            uiUxDesigner: false,

            graphicDesigner: false,

            callcenter: false,

            socialMediaDesigner: false,
        }
    },

    methods: {

        setUploadFile() {
            this.cv = '';
            this.cv = this.$refs.file.files[0];
            console.log(this.cv)
        },

        async FSoftwareEngineeringXamarin() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'SOFTWARE ENGINEER (XAMARIN)');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FFullstackDeveloper() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'FULLSTACK DEVELOPER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FSocialMediaDesigner() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'SOCIAL MEDIA DESIGNER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FSocialMediaManager() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'SOCIAL MEDIA MANAGER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FInternWebDeveloper() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'INTERNSHIP - WEB DEVELOPER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FInternSoftwareDeveloper() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'INTERNSHIP - SOFTWARE DEVELOPER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FInternUxUiDesigner() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'INTERNSHIP - UI/UX DESIGNER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FInternGraphicDesigner() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'INTERNSHIP - GRAPHIC DESIGNER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FInternCallCenter() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'INTERNSHIP - CALL CENTER REPRESENTATIVE');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

        async FInternSocialMediaDesigner() {

            if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.cv != '') {
                this.loading = true;
                const formData = new FormData();
                formData.append("file", this.cv);
                formData.append("subject", 'INTERNSHIP - SOCIAL MEDIA DESIGNER');
                formData.append("name", this.firstName + ' ' + this.lastName);
                formData.append("email", this.email);
                formData.append("mobile", this.mobile);

                try {
                    const testReq = await this.$axios.post(this.api, formData)
                        .then((response) => {
                            this.loading = false;
                            if (response.data == '201') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'You have successfully submitted your CV.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...!',
                                    text: 'Something went wrong. Check Your Network and try again.',
                                })
                            }
                        });
                } catch (error) {
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...!',
                        text: 'Something went wrong. Please contact us directly..!',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...!',
                    text: 'All input field must be filled..!',
                })
            }
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.mobile = '';
            this.cv = '';
        },

    },
}

</script>

<style scoped>
.trans-enter-active,
.trans-leave-active {
    transition: all .2s;
}

.trans-enter,
.trans-leave-active {
    opacity: 0;
}

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

.careers-items-container,
.internship {
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

.item-content {
    margin-top: 20px;
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

.form-btn-wrapper button:hover {
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

    .title-1{
        font-size: 18px;
    }

    .title-2{
        font-size: 25px;
    }
}

@media only screen and (max-width: 767px) {

    .heading-main {
        font-size: 30px;
    }

    .heading-sub {
        font-size: 22px;
    }

    .title-1{
        font-size: 13px;
    }

    .title-2{
        font-size: 18px;
    }
}
</style>