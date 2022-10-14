<template>
    <div class="affiliates">
        <Loader v-if="loading" />
        <div class="affiliate-main container-xl">
            <div class="header">
                <div class="heading-main-wrapper">
                    <h1 class="heading-main">Simplified digital presence.</h1>
                </div>
                <div class="heading-main-wrapper">
                    <h1 class="heading-sub">with Octick</h1>
                </div>
                <div class="heading-main-wrapper">
                    <div class="heading-sub-2">
                        <p>Help position the organization you represent for better decision making through Surge’s
                            affiliate program.</p>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="content-wrapper">
                    <h4 class="title">Which clients should I refer?</h4>
                    <p class="content">Businesses that are committed to embrace technology, change and grow digitally.
                        We’ve worked over the years to develop a proprietary process that enables us to build a digital
                        strategy and roadmap to drive profitable growth. This service is industry and region agnostic
                        and is the kick-off point for our successful engagements. <br><br>
                        Client opportunities can range from crafting digital strategy, incubating a seed-stage idea and
                        building out a minimum viable product (MVP), or helping with resources for digital marketing
                        efforts.
                    </p>
                </div>
                <div class="content-wrapper">
                    <h4 class="title">Which clients should I refer?</h4>
                    <p class="content">Businesses that are committed to embrace technology, change and grow digitally.
                        We’ve worked over the years to develop a proprietary process that enables us to build a digital
                        strategy and roadmap to drive profitable growth. This service is industry and region agnostic
                        and is the kick-off point for our successful engagements. <br><br>
                        Client opportunities can range from crafting digital strategy, incubating a seed-stage idea and
                        building out a minimum viable product (MVP), or helping with resources for digital marketing
                        efforts.
                    </p>
                </div>
                <div class="content-wrapper">
                    <h4 class="title">Which clients should I refer?</h4>
                    <p class="content">Businesses that are committed to embrace technology, change and grow digitally.
                        We’ve worked over the years to develop a proprietary process that enables us to build a digital
                        strategy and roadmap to drive profitable growth. This service is industry and region agnostic
                        and is the kick-off point for our successful engagements. <br><br>
                        Client opportunities can range from crafting digital strategy, incubating a seed-stage idea and
                        building out a minimum viable product (MVP), or helping with resources for digital marketing
                        efforts.
                    </p>
                </div>
                <div class="content-wrapper">
                    <h4 class="title">Which clients should I refer?</h4>
                    <p class="content">Businesses that are committed to embrace technology, change and grow digitally.
                        We’ve worked over the years to develop a proprietary process that enables us to build a digital
                        strategy and roadmap to drive profitable growth. This service is industry and region agnostic
                        and is the kick-off point for our successful engagements. <br><br>
                        Client opportunities can range from crafting digital strategy, incubating a seed-stage idea and
                        building out a minimum viable product (MVP), or helping with resources for digital marketing
                        efforts.
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <input class="form-control" type="text" name="" id="" placeholder="First Name">
                    </div>
                    <div class="col-lg-6">
                        <input class="form-control" type="text" name="" id="" placeholder="Last Name">
                    </div>
                    <div class="col-lg-6">
                        <input class="form-control" type="text" name="" id="" placeholder="Email">
                    </div>
                    <div class="col-lg-6">
                        <input class="form-control" type="text" name="" id="" placeholder="Phone">
                    </div>
                    <div class="col-lg-12">
                        <textarea class="form-control" name="" id="" cols="30" rows="3"
                            placeholder="Message"></textarea>
                    </div>
                    <div class="submit-btn-wrapper">
                        <button @click="submit()">SUBMIT</button>
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
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            message: '',
            loading: false,
        }
    },

    methods: {
        async submit() {
            this.loading = true;
            try {
                const api = 'http://localhost:4000/affiliate';
                const testReq = await this.$axios.post(api, {
                    name: this.firstName + ' ' + this.lastName,
                    email: this.email,
                    mobile: this.mobile,
                    message: this.message,
                }).then((response) => {
                    this.loading = false;
                    if (response.data == '201') {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Your shedule has been submitted. We will contact you as soon as possible.',
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
                    text: 'Something went wrong. Check Your Network and try again.',
                })
            }
        }
    }

}
</script>

<style scoped>
.affiliate-main {
    max-width: 800px;
    margin-top: 50px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    max-width: 570px;
    min-height: 400px;
}

.heading-main {
    text-align: center;
    font-size: 45px;
    background: linear-gradient(to right, red, red, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.heading-sub {
    text-align: center;
    font-size: 45px;
}

.heading-sub-2 {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.705);
}

.title {
    margin-bottom: 20px;
}

.content {
    margin-bottom: 30px;
}

input,
textarea {
    margin-bottom: 20px;
}

.submit-btn-wrapper {
    margin: 20px auto 50px auto;
}

.submit-btn-wrapper button {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: red;
    transition: 0.3s;
}

@media only screen and (max-width: 1200px) {

    .affiliate-main {
        padding: 0 30px;
    }

}

@media only screen and (max-width: 767px) {

    .affiliate-main {
        padding: 0 10px;
    }

    .col-lg-6,
    .col-lg-12,
    .row {
        padding: 0;
        margin: 0;
    }

    .submit-btn-wrapper button,
    .submit-btn-wrapper {
        width: 100%;
    }

}
</style>