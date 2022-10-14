<template>
  <div class="test">
    <input type="file" ref="file" @change="setUploadFile" name="" id="">
    <button @click="testBtn()">submit</button>
  </div>
</template>

<script>


export default {

  data() {
    return {
      cv: ''
    }
  },

  components: {},

  methods: {

    setUploadFile() {
      this.cv = this.$refs.file.files[0];
      console.log(this.cv)
    },

    async testBtn() {
      const formData = new FormData();
      formData.append("file", this.cv);
      
      const api = 'http://localhost:4000/test';
            const testReq = await this.$axios.post(api, formData)
            .then((response) => {
                console.log(response)
            });
    }
  }
}
</script>

<style scoped>
.test {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center;
}
</style>