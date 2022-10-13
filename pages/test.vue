<template>
    <div class="test">
        <!-- <div class="slider">
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
        </div> -->
        <div style="width: 100%; height: 100px;">
            <TechImgsSlider/>
        </div>
        
    </div>
</template>

<script>
import WorkImgsSlider from '~/components/WorkImgsSlider.vue';
import TechImgsSlider from '~/components/TechImgsSlider.vue';
export default {
    components: { WorkImgsSlider, TechImgsSlider }
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