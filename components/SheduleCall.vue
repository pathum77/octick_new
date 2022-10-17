<template>
    <div class="schedule-call">
        <Loader v-if="loading"/>
        <div v-if="scheduleCallBoxIsVisible" class="schedule-call-main container-xxl">
            <div v-if="scheduleCallBoxIsVisible" class="schedule-call-box" ref="scheduleCalll">
                <button v-on:click="scheduleVisible(scheduleCallIsVisible);" class="btn-close"><img
                        src="../assets/icons/close.png" alt=""></button><br>
                <div class="left-right row">
                    <div class="left-box" :class="leftBoxSizeChange ? 'col-lg-4 col-md-4' : 'col-lg-6 col-md-6'" id="left-box">
                        <transition name="form-btn-trans">
                            <button @click="formBackBtn()" v-if="formIsVisible" class="btn-form-back"><img
                                    style="width: 30px;" src="../assets/icons/arrow-left-circle.svg" alt=""></button>
                        </transition>
                        <img class="img-logo" src="../assets/logo/Octic_Logo_Black_landscape.png" alt="">
                        <hr>
                        <h4 style="font-weight: bold; text-align: left; font-size: 20px;">OCTICK Discovery Call</h4><br>
                        <div style="display: flex; ">
                            <p>30 min</p>
                        </div>
                        <div style="display: flex; ">
                            <p>Web conferencing details provided upon confirmation.</p>
                        </div>
                        <div style="display: flex; ">
                            <p>{{leftDetailsBox}}</p>
                        </div>
                    </div>
                    <div class="horizontal-vertical"
                        style="width: 1px; height: 360px; padding: 0; background-color: grey;"></div>
                    <div v-if="rightBoxIsVisible" class="right-box col">
                        <h6 style="font-weight: bold; text-align: left;">Select a Date & Time</h6><br>
                        <!-- current month -->
                        <div v-if="currentMonthIsVisible" class="calender-box">
                            <div class="cal-top">
                                <span>{{currentMonth}} {{currentYear}}</span>
                                <div style="display: flex;">
                                    <button @click="currentMonthIsVisible = true; nextMonthIsVisible = false;"
                                        class="cal-top-month-btn"><img style="width: 10px;"
                                            src="../assets/icons/prev.png" alt=""></button>
                                    <button @click="nextMonthIsVisible = true; currentMonthIsVisible = false;"
                                        class="cal-top-month-btn"><img style="width: 10px;"
                                            src="../assets/icons/next_red.png" alt=""></button>
                                </div>
                            </div><br>
                            <div class="cal-weeks">
                                <p>MON</p>
                                <p>TUE</p>
                                <p>WED</p>
                                <p>THU</p>
                                <p>FRI</p>
                                <p>SAT</p>
                                <p>SUN</p>
                            </div>
                            <div class="cal-days">
                                <div v-for="(date, index) in dates" :key="index" class="cal-date-box">
                                    <button @click="dateSelected(index)"
                                        :class="workDay[index+1] ? 'btn-cal-date-box-workday' : 'btn-cal-date-box-holiday'"
                                        :id="currentMonthBtnSelectedBG[index] ? 'btn-cal-selected' : 'dsfs'">{{date}}</button>
                                </div>
                            </div>
                        </div>
                        <!-- next month -->
                        <div v-if="nextMonthIsVisible" class="calender-box">
                            <div class="cal-top">
                                <span>{{nextMonth}} {{nextYear}}</span>
                                <div style="display: flex;">
                                    <button @click="currentMonthIsVisible = true; nextMonthIsVisible = false;"
                                        class="cal-top-month-btn"><img style="width: 10px;"
                                            src="../assets/icons/prev_red.png" alt=""></button>
                                    <button @click="nextMonthIsVisible = true; currentMonthIsVisible = false;"
                                        class="cal-top-month-btn"><img style="width: 10px;"
                                            src="../assets/icons/next.png" alt=""></button>
                                </div>
                            </div><br>
                            <div class="cal-weeks">
                                <p>MON</p>
                                <p>TUE</p>
                                <p>WED</p>
                                <p>THU</p>
                                <p>FRI</p>
                                <p>SAT</p>
                                <p>SUN</p>
                            </div>
                            <div class="cal-days">
                                <div v-for="(nextMonthDate, index) in nextMonthDates" :key="index" class="cal-date-box">
                                    <button @click="dateSelected(index)"
                                        :class="nextMonthWorkDay[index+1] ? 'btn-cal-date-box-workday' : 'btn-cal-date-box-holiday'"
                                        :id="nextMonthBtnSelectedBG[index] ? 'btn-cal-selected' : 'dsfs'">{{nextMonthDate}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <transition name="form-trans">
                        <div v-if="formIsVisible" class="form-container col-lg col-md">
                            <form>
                                <h5>Enter Details</h5>
                                <label class="label-bold" for="">Name *</label>
                                <input v-model="formName" class="form-control" type="text" name="" id="" required><br>
                                <label class="label-bold" for="">Email *</label>
                                <input v-model="formEmail" class="form-control" type="email" name="" id="" required><br>
                                <label class="label-bold" for="">Which of these bests describes what you're hoping to
                                    achieve working with us. *</label><br>
                                <input v-model="formFact" class="" type="radio" name="fact" id=""
                                    value="To build software product">
                                <label class="label-regular" for="">&nbsp; I want to build my software
                                    product</label><br>
                                <input v-model="formFact" class="" type="radio" name="fact" id=""
                                    value="To increase engineering bandwidth" required>
                                <label class="label-regular" for="">&nbsp; I want to increase engineering
                                    bandwidth</label><br>
                                <input v-model="formFact" class="" type="radio" name="fact" id=""
                                    value="To take product to market">
                                <label class="label-regular" for="">&nbsp; I want to take my product to
                                    market</label><br>
                                <input v-model="formFact" class="" type="radio" name="fact" id=""
                                    value="To generate more leads/customers">
                                <label class="label-regular" for="">&nbsp; I need to generate more
                                    leads/customers</label>
                                <br><br>
                                <label class="label-bold" for="">Tell us a little bit about what you need *</label>
                                <textarea v-model="formDesc" class="form-control" name="" id=""
                                    required></textarea><br>
                                <label class="label-bold" for="">Company Website *</label>
                                <input v-model="formCompSite" class="form-control" type="text" name="" id=""
                                    required><br>
                                <label class="label-bold" for="">Contact Number *</label>
                                <!-- <vue-tel-input v-model="formContact" mode="international"></vue-tel-input> -->
                                <input v-model="formContact" class="form-control" type="number" name="" id=""><br>
                                <button type="button" @click="scheduleCallBtn()" class="btn-form-container">Schedule
                                    Event</button><br><br>
                            </form>
                        </div>
                    </transition>
                    <transition name="time-range-trans">
                        <div v-if="timeRangeIsVisible" class="time-box col-lg-3 col-md-3 col-sm-3" ref="tBox">
                            <p>{{selectedDate}}, {{selectedMonth}} {{selectedYear}}</p>
                            <div class="row">
                                <div class="time-range-box col-lg col-md col-sm">
                                    <button @click="timeSelectedConfirmation(timeIndex)"
                                        v-for="(time, timeIndex) in times" :key="timeIndex">{{time}}</button>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <!-- <loading v-model:active="isLoading" loader="dots"/> -->
            <div v-if="alertBoxIsVisible" class="alert-box">
                <button v-on:click="scheduleVisible(scheduleCallIsVisible);" class="btn-close"></button><br>
                <div class="alert-box-content">
                    <h4>{{alertBoxTitle}}</h4>
                    <p>{{alertBoxMessage}}</p>
                </div>
                <button v-on:click="scheduleVisible(scheduleCallIsVisible);" class="btn-alert-box-ok">OK</button>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2'
import Loader from './Loader.vue';

export default {
    data(){
        return {
            scheduleCallIsVisible: false,
            scheduleCallBoxIsVisible: true,
            alertBoxIsVisible: false,
            alertBoxTitle: '',
            alertBoxMessage: '',
            currentYear: '',
            currentMonth: '',
            currentDate: '',
            dates: [],
            month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            times: ['08:00', '08:30', '09:00', '09:30', '10:00','10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'],
            timeRangeIsVisible: false,
            leftBoxSizeChange: false,
            currentMonthFirstDay: '',
            currentMonthSelectedDate: '',
            leftDetailsBox: 'Let\'s figure out how you can leverage our multi-industry and cross-region expertise to accelerate your businesses.',
            formIsVisible: false,
            rightBoxIsVisible: true,
            isWorkDay: true,
            workDay:[],
            currentMonthIsVisible: true,
            nextMonthIsVisible: false,
            nextYear: '',
            nextMonth: '',
            nextMonthDates: [],
            nextMonthWorkDay: [],
            nextMonthFirstDay: '',
            nextMonthLastDate: '',
            nextMonthSelectedDate: '',
            selectedDate: '',
            selectedMonth: '',
            selectedYear: '',
            selectedTime: '',
            currentMonthBtnSelectedBG: [],
            nextMonthBtnSelectedBG: [],
            formName: '',
            formEmail: '',
            formFact: '',
            formDesc: '',
            formCompSite: '',
            formContact: '',
            loading: false,
            // isLoading: false,
        }
    },

    props: {
        scheduleVisible: Function,
    },

    methods: {
        dateSelected(index){
            if(this.currentMonthIsVisible == true){

                if(this.currentMonthFirstDay == 0){
                    this.currentMonthSelectedDate = this.dates[index];
                }else if(this.currentMonthFirstDay == 1){
                    this.currentMonthSelectedDate = this.dates[index] + 1;
                }else if(this.currentMonthFirstDay == 2){
                    this.currentMonthSelectedDate = this.dates[index] + 2;
                }else if(this.currentMonthFirstDay == 3){
                    this.currentMonthSelectedDate = this.dates[index] + 3;
                }else if(this.currentMonthFirstDay == 4){
                    this.currentMonthSelectedDate = this.dates[index] + 4;
                }else if(this.currentMonthFirstDay == 5){
                    this.currentMonthSelectedDate = this.dates[index] + 5;
                }else{
                    this.currentMonthSelectedDate = this.dates[index] + 6;
                }
                this.currentMonthSelectedDate = this.dates[index];

                this.selectedDate = this.currentMonthSelectedDate;
                this.selectedMonth = this.currentMonth;
                this.selectedYear = this.currentYear;

                for(let i = 0; i<this.dates.length; i++){
                this.currentMonthBtnSelectedBG[i] = false;
                }
                for(let i = 0; i<this.nextMonthDates.length; i++){
                this.nextMonthBtnSelectedBG[i] = false;
                }
                this.currentMonthBtnSelectedBG[index] = true;

            } else {
                if(this.nextMonthFirstDay == 0){
                    this.nextMonthSelectedDate = this.nextMonthDates[index];
                }else if(this.nextMonthFirstDay == 1){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 1;
                }else if(this.nextMonthFirstDay == 2){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 2;
                }else if(this.currentMonthFirstDay == 3){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 3;
                }else if(this.nextMonthFirstDay == 4){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 4;
                }else if(this.nextMonthFirstDay == 5){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 5;
                }else{
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 6;
                }
                this.nextMonthSelectedDate = this.nextMonthDates[index];

                this.selectedDate = this.nextMonthSelectedDate;
                this.selectedMonth = this.nextMonth;
                this.selectedYear = this.nextYear;

                for(let i = 0; i<this.nextMonthDates.length; i++){
                this.nextMonthBtnSelectedBG[i] = false;
                }
                for(let i = 0; i<this.dates.length; i++){
                this.currentMonthBtnSelectedBG[i] = false;
                }
                this.nextMonthBtnSelectedBG[index] = true;
            }
            
            this.timeRangeIsVisible = true;
            this.leftBoxSizeChange = true;

            if(screen.width<767){
                document.getElementById("left-box").style.display = "none";
            }
        },

        timeSelectedConfirmation(timeIndex){
            const pickedTime = this.times[timeIndex];
            const pickedTimetoInt = parseInt(pickedTime.substring(0,2));

            let timeDev = '';
            if(pickedTimetoInt >= 12){
                timeDev = 'PM';
            } else {
                timeDev = 'AM';
            }
            this.leftDetailsBox = 'on ' + this.selectedDate + ', ' + this.selectedMonth + ' ' + this.selectedYear + ' at ' + this.times[timeIndex] + ' ' + timeDev;
            // 'Time: ' + this.times[timeIndex] + ' ' + 'Date: ' + this.selectedDate + ', ' + this.selectedMonth + ' ' + this.selectedYear;
            this.formIsVisible = true;
            this.rightBoxIsVisible = false;
            this.timeRangeIsVisible = false;
            this.selectedTime = this.times[timeIndex];
        },

        formBackBtn(){
            this.formIsVisible = false;
            this.rightBoxIsVisible = true;
            // this.leftBoxSizeChange = false;
            this.timeRangeIsVisible = true;
            this.leftDetailsBox = 'Let\'s figure out how you can leverage our multi-industry and cross-region expertise to accelerate your businesses.';
        },

        async scheduleCallBtn(){

            if(this.formName !='' && this.formEmail !='' && this.formFact !='' && this.formDesc !='' && this.formCompSite !=''){
                this.loading = true;
                const api = 'http://localhost:4000/schedule-call';
                const testReq = await this.$axios.post(api, {
                    date: this.selectedYear + '-' + this.selectedMonth + '-' + this.selectedDate,
                    time: this.selectedTime,
                    name: this.formName,
                    email: this.formEmail,
                    subject: this.formFact,
                    companyWeb: this.formCompSite,
                    mobile: this.formContact,
                    message: this.formDesc,
                }).then((response) => {
                    this.scheduleVisible(this.scheduleCallIsVisible);
                    this.loading = false;
                    if(response.data == '201'){
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
            }
        }
    },

    mounted(){

// CURRENT MONTH START

//get current year
this.currentYear = new Date().getFullYear();

//get current month
this.currentMonth = this.month[new Date().getMonth()];

//get current date
this.currentDate = String(new Date().getDate()).padStart(2, '0');

// get first day current month
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
this.currentMonthFirstDay = firstDay;

//get last date current month
const lastDate = new Date(this.currentYear, new Date().getMonth() + 1, 0).getDate();

//set add dates for current month
switch(firstDay){
    case 1:
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
            this.workDay.push(true);
        }
        for(let i = 0; i<=this.dates.lenght;i++){
            this.btnSelectedBG[i] = false;
        }
        this.workDay[lastDate] = true;
        for(let i = 7; i<=lastDate; i+=7){
            this.workDay[i] = false;
        }
        for(let i = 1; i<=this.currentDate; i++){
            this.workDay[i] = false;
        }
        break;

    case 2:
        this.dates[0] = '';
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
        }
        for(let i = 1; i<=this.dates.length; i++){
            this.workDay[i] = true;
        }
        for(let i = 7; i<=this.dates.length; i+=7){
            this.workDay[i] = false
        }
        for(let i = 1; i<= parseInt(this.currentDate) + 1; i++){
            this.workDay[i] = false;
        }
        break;

    case 3:
        this.dates[0] = '';
        this.dates[1] = '';
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
        }
        for(let i = 1; i<=this.dates.length; i++){
            this.workDay[i] = true;
        }
        for(let i = 7; i<=this.dates.length; i+=7){
            this.workDay[i] = false
        }
        for(let i = 1; i<= parseInt(this.currentDate) + 2; i++){
            this.workDay[i] = false;
        }
        break;
    
    case 4:
        this.dates[0] = '';
        this.dates[1] = '';
        this.dates[2] = '';
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
        }
        for(let i = 1; i<=this.dates.length; i++){
            this.workDay[i] = true;
        }
        for(let i = 7; i<=this.dates.length; i+=7){
            this.workDay[i] = false
        }
        for(let i = 1; i<= parseInt(this.currentDate) + 3; i++){
            this.workDay[i] = false;
        }
        break;

        case 5:
        this.dates[0] = '';
        this.dates[1] = '';
        this.dates[2] = '';
        this.dates[3] = '';
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
        }
        for(let i = 1; i<=this.dates.length; i++){
            this.workDay[i] = true;
        }
        for(let i = 7; i<=this.dates.length; i+=7){
            this.workDay[i] = false
        }
        for(let i = 1; i<= parseInt(this.currentDate) + 4; i++){
            this.workDay[i] = false;
        }
        break;

        case 6:
        this.dates[0] = '';
        this.dates[1] = '';
        this.dates[2] = '';
        this.dates[3] = '';
        this.dates[4] = '';
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
        }
        for(let i = 1; i<=this.dates.length; i++){
            this.workDay[i] = true;
        }
        for(let i = 7; i<=this.dates.length; i+=7){
            this.workDay[i] = false
        }
        for(let i = 1; i<= parseInt(this.currentDate) + 5; i++){
            this.workDay[i] = false;
        }
        break;

        case 7:
        this.dates[0] = '';
        this.dates[1] = '';
        this.dates[2] = '';
        this.dates[3] = '';
        this.dates[4] = '';
        this.dates[5] = '';
        for(let i = 1; i<=lastDate; i++){
            this.dates.push(i);
        }
        for(let i = 1; i<=this.dates.length; i++){
            this.workDay[i] = true;
        }
        for(let i = 7; i<=this.dates.length; i+=7){
            this.workDay[i] = false
        }
        for(let i = 1; i<= parseInt(this.currentDate) + 6; i++){
            this.workDay[i] = false;
        }
        break;

        default:
            return;
}

//CURRENT MONTH END
//NEXT MONTH START

//set next year, next month, next month last date, next month first date
if(this.currentMonth == this.month[11]) {
    this.nextYear = this.currentYear + 1;
    this.nextMonth = this.month[0];
    this.nextMonthLastDate = new Date(this.nextYear, 0 + 1, 0).getDate();
    this.nextMonthFirstDay = new Date(this.nextYear, 0, 1).getDay();
} else {
    this.nextYear = this.currentYear;
    this.nextMonth = this.month[new Date().getMonth() + 1];
    this.nextMonthLastDate = new Date(this.nextYear, new Date().getMonth() + 1 + 1, 0).getDate();
    this.nextMonthFirstDay = new Date(this.nextYear, new Date().getMonth() + 1, 1).getDay();
}

//set add dates for next month

switch(this.nextMonthFirstDay){
    case 1:
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
            this.nextMonthWorkDay[i] = false;
        }
        for(let i = 1; i<this.currentDate; i++){
            this.nextMonthWorkDay[i] = true;
        }

        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;

    case 2:
        this.nextMonthDates[0] = '';
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
        }
        this.nextMonthWorkDay[1] = false;
        for(let i = 2; i<parseInt(this.currentDate) + 1; i++){
            this.nextMonthWorkDay[i] = true;
        }
        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;

    case 3:
        this.nextMonthDates[0] = '';
        this.nextMonthDates[1] = '';
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
        }
        this.nextMonthWorkDay[1] = false;
        this.nextMonthWorkDay[2] = false;
        for(let i = 3; i<parseInt(this.currentDate) + 2; i++){
            this.nextMonthWorkDay[i] = true;
        }
        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;
    
    case 4:
        this.nextMonthDates[0] = '';
        this.nextMonthDates[1] = '';
        this.nextMonthDates[2] = '';
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
        }
        this.nextMonthWorkDay[1] = false;
        this.nextMonthWorkDay[2] = false;
        this.nextMonthWorkDay[3] = false;
        for(let i = 4; i<parseInt(this.currentDate) + 3; i++){
            this.nextMonthWorkDay[i] = true;
        }
        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;

        case 5:
        this.nextMonthDates[0] = '';
        this.nextMonthDates[1] = '';
        this.nextMonthDates[2] = '';
        this.nextMonthDates[3] = '';
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
        }
        this.nextMonthWorkDay[1] = false;
        this.nextMonthWorkDay[2] = false;
        this.nextMonthWorkDay[3] = false;
        this.nextMonthWorkDay[4] = false;
        for(let i = 5; i<parseInt(this.currentDate) + 4; i++){
            this.nextMonthWorkDay[i] = true;
        }
        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;

        case 6:
        this.nextMonthDates[0] = '';
        this.nextMonthDates[1] = '';
        this.nextMonthDates[2] = '';
        this.nextMonthDates[3] = '';
        this.nextMonthDates[4] = '';
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
        }
        this.nextMonthWorkDay[1] = false;
        this.nextMonthWorkDay[2] = false;
        this.nextMonthWorkDay[3] = false;
        this.nextMonthWorkDay[4] = false;
        this.nextMonthWorkDay[5] = false;
        for(let i = 6; i<parseInt(this.currentDate) + 5; i++){
            this.nextMonthWorkDay[i] = true;
        }
        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;

        case 7:
        this.nextMonthDates[0] = '';
        this.nextMonthDates[1] = '';
        this.nextMonthDates[2] = '';
        this.nextMonthDates[3] = '';
        this.nextMonthDates[4] = '';
        this.nextMonthDates[5] = '';
        for(let i = 1; i<=this.nextMonthLastDate; i++){
            this.nextMonthDates.push(i);
        }
        this.nextMonthWorkDay[1] = false;
        this.nextMonthWorkDay[2] = false;
        this.nextMonthWorkDay[3] = false;
        this.nextMonthWorkDay[4] = false;
        this.nextMonthWorkDay[5] = false;
        this.nextMonthWorkDay[6] = false;
        for(let i = 7; i<parseInt(this.currentDate) + 6; i++){
            this.nextMonthWorkDay[i] = true;
        }
        for(let i = 7; i<this.nextMonthDates.length; i+=7){
            this.nextMonthWorkDay[i] = false;
        }
        break;

        default:
            return;
}
}

}

</script>

<!-- <script>
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
// import { VueTelInput } from 'vue3-tel-input'
// import 'vue3-tel-input/dist/vue3-tel-input.css'

export default {
    data(){
        return {
            scheduleCallIsVisible: false,
            scheduleCallBoxIsVisible: true,
            alertBoxIsVisible: false,
            alertBoxTitle: '',
            alertBoxMessage: '',
            currentYear: '',
            currentMonth: '',
            currentDate: '',
            dates: [],
            month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            times: ['08:00', '08:30', '09:00', '09:30', '10:00','10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'],
            timeRangeIsVisible: false,
            leftBoxSizeChange: false,
            currentMonthFirstDay: '',
            currentMonthSelectedDate: '',
            leftDetailsBox: 'Let\'s figure out how you can leverage our multi-industry and cross-region expertise to accelerate your businesses.',
            formIsVisible: false,
            rightBoxIsVisible: true,
            isWorkDay: true,
            workDay:[],
            currentMonthIsVisible: true,
            nextMonthIsVisible: false,
            nextYear: '',
            nextMonth: '',
            nextMonthDates: [],
            nextMonthWorkDay: [],
            nextMonthFirstDay: '',
            nextMonthLastDate: '',
            nextMonthSelectedDate: '',
            selectedDate: '',
            selectedMonth: '',
            selectedYear: '',
            selectedTime: '',
            currentMonthBtnSelectedBG: [],
            nextMonthBtnSelectedBG: [],
            formName: '',
            formEmail: '',
            formFact: '',
            formDesc: '',
            formCompSite: '',
            formContact: '',
            // isLoading: false,
        }
    },

    loading: {
        color: 'red',
        height: '5px'
    },

    components: {
    Loader
},

    props: {
        scheduleVisible: Function,
    },

    methods: {
        dateSelected(index){
            if(this.currentMonthIsVisible == true){

                if(this.currentMonthFirstDay == 0){
                    this.currentMonthSelectedDate = this.dates[index];
                }else if(this.currentMonthFirstDay == 1){
                    this.currentMonthSelectedDate = this.dates[index] + 1;
                }else if(this.currentMonthFirstDay == 2){
                    this.currentMonthSelectedDate = this.dates[index] + 2;
                }else if(this.currentMonthFirstDay == 3){
                    this.currentMonthSelectedDate = this.dates[index] + 3;
                }else if(this.currentMonthFirstDay == 4){
                    this.currentMonthSelectedDate = this.dates[index] + 4;
                }else if(this.currentMonthFirstDay == 5){
                    this.currentMonthSelectedDate = this.dates[index] + 5;
                }else{
                    this.currentMonthSelectedDate = this.dates[index] + 6;
                }
                this.currentMonthSelectedDate = this.dates[index];

                this.selectedDate = this.currentMonthSelectedDate;
                this.selectedMonth = this.currentMonth;
                this.selectedYear = this.currentYear;

                for(let i = 0; i<this.dates.length; i++){
                this.currentMonthBtnSelectedBG[i] = false;
                }
                for(let i = 0; i<this.nextMonthDates.length; i++){
                this.nextMonthBtnSelectedBG[i] = false;
                }
                this.currentMonthBtnSelectedBG[index] = true;

            } else {
                if(this.nextMonthFirstDay == 0){
                    this.nextMonthSelectedDate = this.nextMonthDates[index];
                }else if(this.nextMonthFirstDay == 1){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 1;
                }else if(this.nextMonthFirstDay == 2){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 2;
                }else if(this.currentMonthFirstDay == 3){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 3;
                }else if(this.nextMonthFirstDay == 4){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 4;
                }else if(this.nextMonthFirstDay == 5){
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 5;
                }else{
                    this.nextMonthSelectedDate = this.nextMonthDates[index] + 6;
                }
                this.nextMonthSelectedDate = this.nextMonthDates[index];

                this.selectedDate = this.nextMonthSelectedDate;
                this.selectedMonth = this.nextMonth;
                this.selectedYear = this.nextYear;

                for(let i = 0; i<this.nextMonthDates.length; i++){
                this.nextMonthBtnSelectedBG[i] = false;
                }
                for(let i = 0; i<this.dates.length; i++){
                this.currentMonthBtnSelectedBG[i] = false;
                }
                this.nextMonthBtnSelectedBG[index] = true;
            }
            
            this.timeRangeIsVisible = true;
            this.leftBoxSizeChange = true;
        },

        timeSelectedConfirmation(timeIndex){
            const pickedTime = this.times[timeIndex];
            const pickedTimetoInt = parseInt(pickedTime.substring(0,2));

            let timeDev = '';
            if(pickedTimetoInt >= 12){
                timeDev = 'PM';
            } else {
                timeDev = 'AM';
            }
            this.leftDetailsBox = 'on ' + this.selectedDate + ', ' + this.selectedMonth + ' ' + this.selectedYear + ' at ' + this.times[timeIndex] + ' ' + timeDev;
            // 'Time: ' + this.times[timeIndex] + ' ' + 'Date: ' + this.selectedDate + ', ' + this.selectedMonth + ' ' + this.selectedYear;
            this.formIsVisible = true;
            this.rightBoxIsVisible = false;
            this.timeRangeIsVisible = false;
            this.selectedTime = this.times[timeIndex];
        },

        formBackBtn(){
            this.formIsVisible = false;
            this.rightBoxIsVisible = true;
            // this.leftBoxSizeChange = false;
            this.timeRangeIsVisible = true;
            this.leftDetailsBox = 'Let\'s figure out how you can leverage our multi-industry and cross-region expertise to accelerate your businesses.';
        },

        async scheduleCallBtn(){

            if(this.formName !='' && this.formEmail !='' && this.formFact !='' && this.formDesc !='' && this.formCompSite !=''){
                
            }
        }
    },

    mounted(){

        // CURRENT MONTH START

        //get current year
        this.currentYear = new Date().getFullYear();

        //get current month
        this.currentMonth = this.month[new Date().getMonth()];

        //get current date
        this.currentDate = String(new Date().getDate()).padStart(2, '0');

        // get first day current month
        const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
        this.currentMonthFirstDay = firstDay;

        //get last date current month
        const lastDate = new Date(this.currentYear, new Date().getMonth() + 1, 0).getDate();

        //set add dates for current month
        switch(firstDay){
            case 1:
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                    this.workDay.push(true);
                }
                for(let i = 0; i<=this.dates.lenght;i++){
                    this.btnSelectedBG[i] = false;
                }
                this.workDay[lastDate] = true;
                for(let i = 7; i<=lastDate; i+=7){
                    this.workDay[i] = false;
                }
                for(let i = 1; i<=this.currentDate; i++){
                    this.workDay[i] = false;
                }
                break;

            case 2:
                this.dates[0] = '';
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                }
                for(let i = 1; i<=this.dates.length; i++){
                    this.workDay[i] = true;
                }
                for(let i = 7; i<=this.dates.length; i+=7){
                    this.workDay[i] = false
                }
                for(let i = 1; i<= parseInt(this.currentDate) + 1; i++){
                    this.workDay[i] = false;
                }
                break;

            case 3:
                this.dates[0] = '';
                this.dates[1] = '';
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                }
                for(let i = 1; i<=this.dates.length; i++){
                    this.workDay[i] = true;
                }
                for(let i = 7; i<=this.dates.length; i+=7){
                    this.workDay[i] = false
                }
                for(let i = 1; i<= parseInt(this.currentDate) + 2; i++){
                    this.workDay[i] = false;
                }
                break;
            
            case 4:
                this.dates[0] = '';
                this.dates[1] = '';
                this.dates[2] = '';
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                }
                for(let i = 1; i<=this.dates.length; i++){
                    this.workDay[i] = true;
                }
                for(let i = 7; i<=this.dates.length; i+=7){
                    this.workDay[i] = false
                }
                for(let i = 1; i<= parseInt(this.currentDate) + 3; i++){
                    this.workDay[i] = false;
                }
                break;

                case 5:
                this.dates[0] = '';
                this.dates[1] = '';
                this.dates[2] = '';
                this.dates[3] = '';
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                }
                for(let i = 1; i<=this.dates.length; i++){
                    this.workDay[i] = true;
                }
                for(let i = 7; i<=this.dates.length; i+=7){
                    this.workDay[i] = false
                }
                for(let i = 1; i<= parseInt(this.currentDate) + 4; i++){
                    this.workDay[i] = false;
                }
                break;

                case 6:
                this.dates[0] = '';
                this.dates[1] = '';
                this.dates[2] = '';
                this.dates[3] = '';
                this.dates[4] = '';
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                }
                for(let i = 1; i<=this.dates.length; i++){
                    this.workDay[i] = true;
                }
                for(let i = 7; i<=this.dates.length; i+=7){
                    this.workDay[i] = false
                }
                for(let i = 1; i<= parseInt(this.currentDate) + 5; i++){
                    this.workDay[i] = false;
                }
                break;

                case 7:
                this.dates[0] = '';
                this.dates[1] = '';
                this.dates[2] = '';
                this.dates[3] = '';
                this.dates[4] = '';
                this.dates[5] = '';
                for(let i = 1; i<=lastDate; i++){
                    this.dates.push(i);
                }
                for(let i = 1; i<=this.dates.length; i++){
                    this.workDay[i] = true;
                }
                for(let i = 7; i<=this.dates.length; i+=7){
                    this.workDay[i] = false
                }
                for(let i = 1; i<= parseInt(this.currentDate) + 6; i++){
                    this.workDay[i] = false;
                }
                break;

                default:
                    return;
        }

        //CURRENT MONTH END
        //NEXT MONTH START
        
        //set next year, next month, next month last date, next month first date
        if(this.currentMonth == this.month[11]) {
            this.nextYear = this.currentYear + 1;
            this.nextMonth = this.month[0];
            this.nextMonthLastDate = new Date(this.nextYear, 0 + 1, 0).getDate();
            this.nextMonthFirstDay = new Date(this.nextYear, 0, 1).getDay();
        } else {
            this.nextYear = this.currentYear;
            this.nextMonth = this.month[new Date().getMonth() + 1];
            this.nextMonthLastDate = new Date(this.nextYear, new Date().getMonth() + 1 + 1, 0).getDate();
            this.nextMonthFirstDay = new Date(this.nextYear, new Date().getMonth() + 1, 1).getDay();
        }
        
        //set add dates for next month

        switch(this.nextMonthFirstDay){
            case 1:
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                    this.nextMonthWorkDay[i] = false;
                }
                for(let i = 1; i<this.currentDate; i++){
                    this.nextMonthWorkDay[i] = true;
                }

                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;

            case 2:
                this.nextMonthDates[0] = '';
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                }
                this.nextMonthWorkDay[1] = false;
                for(let i = 2; i<parseInt(this.currentDate) + 1; i++){
                    this.nextMonthWorkDay[i] = true;
                }
                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;

            case 3:
                this.nextMonthDates[0] = '';
                this.nextMonthDates[1] = '';
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                }
                this.nextMonthWorkDay[1] = false;
                this.nextMonthWorkDay[2] = false;
                for(let i = 3; i<parseInt(this.currentDate) + 2; i++){
                    this.nextMonthWorkDay[i] = true;
                }
                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;
            
            case 4:
                this.nextMonthDates[0] = '';
                this.nextMonthDates[1] = '';
                this.nextMonthDates[2] = '';
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                }
                this.nextMonthWorkDay[1] = false;
                this.nextMonthWorkDay[2] = false;
                this.nextMonthWorkDay[3] = false;
                for(let i = 4; i<parseInt(this.currentDate) + 3; i++){
                    this.nextMonthWorkDay[i] = true;
                }
                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;

                case 5:
                this.nextMonthDates[0] = '';
                this.nextMonthDates[1] = '';
                this.nextMonthDates[2] = '';
                this.nextMonthDates[3] = '';
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                }
                this.nextMonthWorkDay[1] = false;
                this.nextMonthWorkDay[2] = false;
                this.nextMonthWorkDay[3] = false;
                this.nextMonthWorkDay[4] = false;
                for(let i = 5; i<parseInt(this.currentDate) + 4; i++){
                    this.nextMonthWorkDay[i] = true;
                }
                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;

                case 6:
                this.nextMonthDates[0] = '';
                this.nextMonthDates[1] = '';
                this.nextMonthDates[2] = '';
                this.nextMonthDates[3] = '';
                this.nextMonthDates[4] = '';
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                }
                this.nextMonthWorkDay[1] = false;
                this.nextMonthWorkDay[2] = false;
                this.nextMonthWorkDay[3] = false;
                this.nextMonthWorkDay[4] = false;
                this.nextMonthWorkDay[5] = false;
                for(let i = 6; i<parseInt(this.currentDate) + 5; i++){
                    this.nextMonthWorkDay[i] = true;
                }
                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;

                case 7:
                this.nextMonthDates[0] = '';
                this.nextMonthDates[1] = '';
                this.nextMonthDates[2] = '';
                this.nextMonthDates[3] = '';
                this.nextMonthDates[4] = '';
                this.nextMonthDates[5] = '';
                for(let i = 1; i<=this.nextMonthLastDate; i++){
                    this.nextMonthDates.push(i);
                }
                this.nextMonthWorkDay[1] = false;
                this.nextMonthWorkDay[2] = false;
                this.nextMonthWorkDay[3] = false;
                this.nextMonthWorkDay[4] = false;
                this.nextMonthWorkDay[5] = false;
                this.nextMonthWorkDay[6] = false;
                for(let i = 7; i<parseInt(this.currentDate) + 6; i++){
                    this.nextMonthWorkDay[i] = true;
                }
                for(let i = 7; i<this.nextMonthDates.length; i+=7){
                    this.nextMonthWorkDay[i] = false;
                }
                break;

                default:
                    return;
        }
    }
}

</script> -->

<style scoped>

    .schedule-call{
        position: relative;
        top: 0;
        z-index: 1000;
    }

    .schedule-call-main{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.521);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
    }

    .schedule-call-box{
        width: 700px;
        height: 450px;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
    }

    .btn-close{
        width: 20px;
        height: 20px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        float: right;
    }

    .btn-close img{
        max-width: 100%;
        max-height: 100%;
    }

    .left-box p{
        text-align: left; 
        font-size: 13px;
        font-weight: 100;
    }

    .btn-form-back{
        background-color: transparent;
        border: none;
        position: relative;
        top: -40px;
        left: -20px;
    }

    .img-logo{
        width: 150px;
        margin: 0 auto;
        transition: .3s;
    }

    .time-box p{
        font-size: 10px;
        position: relative;
    }

    .time-range-box{
        height: 350px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .time-range-box::-webkit-scrollbar {
        width: .5vw;
    }

    .time-range-box::-webkit-scrollbar-thumb{
        background-color: grey;
        border-radius: 20px;
    }

    .time-range-box::-webkit-scrollbar-thumb:hover{
        background-color: rgb(95, 95, 95);
    }

    .time-range-box::-webkit-scrollbar-track{
        background-color: transparent;
    }
    
    .time-box button{
        width: 130px;
        height: 40px;
        color: red;
        font-weight: bold;
        font-size: 15px;
        border: 1px solid red;
        background-color: transparent;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .time-box button:hover{
        border: 2px solid red;
    }

    .time-range-trans-enter-from{
        width: 0;
        overflow-x: hidden;
    }

    /* .time-range-trans-enter-to{
        width: 100%;
    } */

    .time-range-trans-enter-active{
        transition: all 500ms ease;
    }

    .form-container{
        text-align: left;
        overflow-y: auto;
        max-height: 360px;
    }

    .form-container::-webkit-scrollbar {
        width: .5vw;
    }

    .form-container::-webkit-scrollbar-thumb{
        background-color: grey;
        border-radius: 20px;
    }

    .form-container::-webkit-scrollbar-thumb:hover{
        background-color: rgb(95, 95, 95);
    }

    .form-container::-webkit-scrollbar-track{
        background-color: transparent;
    }

    .form-container h5{
        font-size: 16px;
        font-weight: bold;
    }

    .label-bold{
        font-weight: bold;
        font-size: 12px;
    }

    .label-regular{
        font-size: 12px;
        font-weight: 100;
    }


    .btn-form-container{
        padding: 10px;
        border: none;
        border-radius: 30px;
        color: white;
        font-weight: bold;
        font-size: 13px;
        background-color: red;
    }

    /* form transition */

    .form-trans-enter-from{
        opacity: 0;
    }

    .form-trans-enter-active{
        transition: all 500ms ease;
    }

    /* .form-trans-leave-to{
        opacity: 0;
    }

    .form-trans-leave-active{
        transition: all 500ms ease;
    } */


     /* form back btn transition */
    .form-btn-trans-enter-from{
        opacity: 0;
        left: -10px;
    }

    .form-btn-trans-enter-active{
        transition: all 500ms ease;
    }

    .form-btn-trans-leave-to{
        opacity: 0;
        left: -30px;
    }

    .form-btn-trans-leave-active{
        transition: all 500ms ease;
    }

     /* current month transition */
    /* .current-month-trans-enter-from{
        opacity: 0;
    }

    .current-month-trans-enter-active{
        transition: all 500ms ease;
    } */

    /* next month transition */
    /* .next-month-trans-enter-from{
        opacity: 0;
    }

    .next-month-trans-enter-active{
        transition: all 500ms ease;
    } */

    .alert-box{
        min-width: 700px;
        padding: 20px;
        border-radius: 20px;
        background-color: white;
    }

    .alert-box h4{
        font-weight: bold;
    }

        .alert-box p{
        font-weight: 100;
    }

    .alert-box-content{
        text-align: left;
    }

    .btn-alert-box-ok{
        float: right;
        padding: 7px 30px;
        border: none;
        color: white;
        background-color: skyblue;
    }

        .btn-alert-box-ok:hover{
        background-color: rgb(86, 207, 255);
    }

/*  */

    .cal-top{
        display: flex;
        justify-content: space-between;
    }

    .cal-top span, .time-box p{
        font-size: 14px;
        font-weight: 100;
    }

    .cal-top-month-btn{
        width: 25px;
        height: 25px;
        border: none;
        border-radius: 50%;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cal-weeks{
        display: flex;
        justify-content: center;
    }

    .cal-weeks p{
        width: 35px;
        font-weight: 100;
        font-size: 11px;
        text-align: center;
    }

    .cal-days{
        width: 245px;
        display: flex;
        margin: 0 auto;
        flex-flow: wrap;
    }

    .cal-date-box{
        width: 35px;
        height: 30px;
        margin-bottom: 5px;
    }

    .btn-cal-date-box-workday{
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        font-size: 13px;
        font-weight: bold;
        background-color: rgb(255, 240, 240);
        color: red;
    }

    .btn-cal-date-box-workday:hover{
        background-color: rgb(255, 200, 200);
        color: red;
    }

    #btn-cal-selected{
        background-color: red;
        color: white;
    }

    .btn-cal-date-box-holiday{
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        font-size: 13px;
        pointer-events: none;
        color: grey;
        background-color: transparent;
    }

    @media only screen and (max-width: 767px) {
        .schedule-call-box{
            height: 100%;
            max-width: 500px;
            overflow-y: auto;
        }

        .left-box{
            margin-bottom: 30px;
        }

        .img-logo{
            width: 100px;
        }

        .horizontal-vertical{
            display: none;
        }

        .time-range-box{
            height: 100%;
        }

        .time-range-box button{
            width: 100%;
        }

        .form-container{
            max-height: 100%;
        }
    }


</style>