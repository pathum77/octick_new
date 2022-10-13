<template>
    <div>
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                <img src="../assets/images/home/tech_logos/pen.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/csharp.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/dotnet.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/react.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/xd.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/java.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/wix.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/ps.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/meta.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/google_ads.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/google_ana.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/js.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/pen.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/csharp.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/dotnet.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/react.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/xd.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/java.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/wix.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/ps.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/meta.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/google_ads.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/google_ana.png" height="50" width="125" alt="" />
                </div>
                <div class="slide">
                <img src="../assets/images/home/tech_logos/js.png" height="50" width="125" alt="" />
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
    transform: translateX(calc(-125px * 12));
  }
}

.slider {
  height: 50px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider::before,
.slider::after {
  content: "";
  height: 100px;
  position: absolute;
  width: 120px;
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
  animation: scroll 15s linear infinite;
  display: flex;
  width: calc(125px * 24);
}

.slider .slide {
  height: 50px;
  width: 125px;
}

</style>