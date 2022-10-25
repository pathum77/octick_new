<template>
  <div class="test">
    <h1 :class="$store.state.themeState == 'true' ? 'dark' : 'light'">This Is Nothing</h1>
  </div>
</template>

<script>


export default {
  
  data() {
    return {
      checkValue: null,
    }
  },

  mounted() {
    this.$store.commit('setThemeState');
  },

  methods: {
    setTheme(){
      
    }
  }
}
</script>

<style scoped>

  .light{
    color: black;
    background-color: white;
    transition: .5s;
  }

  .dark{
    color: rgb(255, 255, 255);
    background-color: black;
    transition: .5s;
  }

</style>