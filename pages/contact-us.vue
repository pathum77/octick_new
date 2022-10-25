<template>
	<div class="contact-us">
		<Loader v-if="loading" />
		<div class="contact-us-container container-xl">
			<div class="row">
				<div class="col-lg-6">
					<div class="left">
						<h1 class="heading-main">Contact Us</h1><br><br>
						<div class="content-wrapper">
							<div class="icon-box">
								<img src="../assets/icons/location.png" alt="">
							</div>
							<div class="content">
								<h4>ADDRESS:</h4>
								<p>198 West 21th Street, Suite 721 New York NY 10016</p>
							</div>
						</div>
						<div class="content-wrapper">
							<div class="icon-box">
								<img src="../assets/icons/phone.png" alt="">
							</div>
							<div class="content">
								<h4>PHONE:</h4>
								<p>771234567</p>
							</div>
						</div>
						<div class="content-wrapper">
							<div class="icon-box">
								<img src="../assets/icons/mail.png" alt="">
							</div>
							<div class="content">
								<h4>EMAIL:</h4>
								<p>octick@gmail.com</p>
							</div>
						</div>
						<div class="content-wrapper">
							<div class="icon-box">
								<img src="../assets/icons/web.png" alt="">
							</div>
							<div class="content">
								<h4>WEBSITE:</h4>
								<p>octick.com</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="right">
						<input v-model="firstName" class="form-control" type="text" name="" id=""
							placeholder="First Name">
						<input v-model="lastName" class="form-control" type="text" name="" id=""
							placeholder="Last Name">
						<input v-model="email" class="form-control" type="email" name="" id="" placeholder="E-Mail">
						<input v-model="mobile" class="form-control" type="text" name="" id=""
							placeholder="Mobile Phone">
						<textarea v-model="message" class="form-control" name="" id="" cols="30" rows="3"
							placeholder="Message"></textarea>
						<div class="btn-form-submit">
							<button @click="submit()">SUBMIT</button>
						</div>
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
			email: '',
			mobile: '',
			message: '',
			loading: false,
		}
	},

	methods: {
		async submit() {
			if (this.firstName != '' && this.lastName != '' && this.email != '' && this.mobile != '' && this.message != '') {
				try {
					this.loading = true;
					const api = 'http://localhost:4000/contact-us';
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
								text: 'Your message has been submitted. We will contact you as soon as possible.',
							})
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Oops...!',
								text: 'Something went wrong. Check Your Network and try again.',
							})
						}
					});
				}
				catch (e) {
					this.loading = false;
					Swal.fire({
						icon: 'error',
						title: 'Oops...!',
						text: 'Something went wrong. Please contact us directly.',
					})
				}
			} else {
				Swal.fire({
								icon: 'warning',
								title: 'Oops...!',
								text: 'All required input field must be filled.',
							})
			}
			this.firstName = '';
			this.lastName = '';
			this.email = '';
			this.mobile = '';
			this.message = '';
		}
	}

}
</script>

<style scoped>
.icon-box img {
	width: 25px;
	height: 25px;
}

.col-lg-6 {
	padding: 0;
}

p {
	font-weight: 500;
}

input,
textarea {
	margin-bottom: 20px;
}

.contact-us {
	min-height: 100vh;
	padding: 50px;
	background-image: url('../assets/banners/banner_op.png');
	background-size: cover;
	background-repeat: no-repeat;
}

.contact-us-container {
	max-width: 800px;
}

.heading-main {
	font-size: 40px;
	text-align: left;
}

.content-wrapper {
	display: flex;
}

.icon-box {
	width: 30px;
	height: 30px;
	margin-right: 10px;
}

.right {
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	background-color: rgb(255, 255, 255);
}

@media only screen and (max-width: 1200px) {

	.contact-us {
		padding: 30px;
	}

}

@media only screen and (max-width: 767px) {

	h4 {
		font-size: 20px;
	}

	.heading-main {
		font-size: 30px;
		text-align: center;
	}

	.contact-us {
		padding: 20px 10px;
	}

}
</style>