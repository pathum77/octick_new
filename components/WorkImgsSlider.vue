<template>
    <div>
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                <img src="../assets/images/home/worked/zavvers.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/oacray.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/technography.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/ramada.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/travel_ministry.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/zavvers.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/oacray.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/technography.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/ramada.png" height="100" width="250" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/worked/travel_ministry.png" height="100" width="250" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 5));
  }
}

.slider {
  /* background: white; */
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider::before,
.slider::after {
  /* background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%); */
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 10s linear infinite;
  display: flex;
  width: calc(250px * 10);
}

.slider .slide {
  height: 100px;
  width: 250px;
}

</style>