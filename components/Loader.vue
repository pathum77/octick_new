<template>
    <div class="loader-screen">
        <span class="loader"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader-screen {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.534);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
}

.loader, .loader:before, .loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: bblFadInOut 1s infinite ease-in-out;
}
.loader {
  color: red;
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

@keyframes bblFadInOut {
  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
  40% { box-shadow: 0 2.5em 0 0 }
}
</style>