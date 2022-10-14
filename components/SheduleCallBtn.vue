<template>
    <div class="schedule-call">
        <Loader v-if="loader" />
        <transition name="schedule">
            <SheduleCall :scheduleVisible="scheduleVisible" v-if="scheduleCallIsVisible" />
        </transition>
        <button @click="scheduleCall()">Schedule a Call</button>
    </div>
</template>

<script>
import SheduleCall from './SheduleCall.vue';
import Loader from './Loader.vue';

export default {

    transition: 'schedule',

    data() {
        return {
            scheduleCallIsVisible: false,
            loader: false,
        };
    },
    methods: {
        scheduleVisible(sheduleStatus) {
            this.scheduleCallIsVisible = sheduleStatus;
        },

        scheduleCall() {
            this.loader = true;
            setTimeout(() => {
                this.loader = false;
                this.scheduleCallIsVisible = true;
            }, "500")
        }
    },
    components: { SheduleCall, Loader }
}
</script>

<style scoped>

.schedule-enter-active, .schedule-leave-active { transition: opacity .2s; }
  .schedule-enter, .schedule-leave-active { opacity: 0; }

button {
    padding: 5px 10px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border-radius: 20px;
    font-size: 17px;
    font-weight: bold;
    border: solid 2px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(90deg, #fc0000, #0cfa03, #6200ff, #cd05ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px rgb(216, 216, 216) inset;
    transition: .2s;
}

.dark button {
    padding: 5px 10px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border-radius: 20px;
    font-size: 17px;
    font-weight: bold;
    border: solid 2px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(90deg, #fc0000, #0cfa03, #6200ff, #cd05ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px rgb(0, 0, 0) inset;
    color: white;
    transition: .2s;
}

button:hover {
    box-shadow: none;
    color: white;
}

.dark button:hover {
    box-shadow: none;
    color: white;
}
</style>