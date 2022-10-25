<template>
    <div class="solutions">
        <div class="container-1">
            <MainBanner>
                <template v-slot:header-1>Simplified Digital Marketing Process.</template>
                <template v-slot:header-2>Our Digital Marketing Value</template>
                <template v-slot:content-2>
                    As a digital solutions agency we specialize in solving all your digital complications. As every 
                    company has its own unique goals, we understand that the requirements needed to fulfill those 
                    goals can be varied. Therefore, we provide a professional pool of experts from which we can 
                    create the perfect digital team which can take you to those goals. Hiring Developers or 
                    Designers have never been easier.
                </template>
                <template v-slot:header-3>Our Features</template>
                <template v-slot:content-3>
                    <ul>
                        <li>we build our teams based on your requirements, whether that includes dedicated teams for specific tasks or sharing teams across projects.</li>
                        <li>We provide access to a pool of professionals in various sectors of the digital fields -  whether it be graphic designers to web developers to content creators.</li>
                        <li>Our workflows are designed based on your requirements and internal processes to make integrating teams a breeze.</li>
                        <li>global experience in carrying out projects across different industries provide you with a variety of crucial knowledge and skills.</li>
                        <li>We take accountability seriously and provide top-notch customer service. During scoping, our team guarantees delivery timelines and is happy to be held accountable to give you ease of mind.</li>
                        <li>Our flexibility and versatility provides the customer with a variety of options and methods to achieve their goals.</li>
                    </ul>
                </template>
            </MainBanner>
        </div>
        <div class="container-2">
            <div class="heading">
                <h3>Simplifed hiring</h3>
            </div>
            <ContainerLeftContent>
                <template v-slot:title>Planning</template>
                <template v-slot:content>
                    The initial stage. Here we focus on figuring out and fine tuning the requirements and 
                    technologies needed to start up your idea. Based on the requirements, we focus on setting up the 
                    proper team with the relevant skillsets needed for the project to be completed.
                </template>
                <template v-slot:img><img src="../assets/3d/test.png" alt=""></template>
            </ContainerLeftContent>
            <ContainerRightContent>
                <template v-slot:title>Analysis</template>
                <template v-slot:content>We base and design our workflows on your requirements and internal processes. 
                    Through this process we set clear goals and carry out team integration in order to get your project 
                    up and running. By getting precise information through careful analysis, we can then create a roadmap 
                    for project completion, including a thorough cost-analysis. <br><br> Once all the details and 
                    requirements are confirmed,  we can begin the process of hiring the necessary experts. As the 
                    teams are built based on your requirements, we can prioritize the primary and essential teams, 
                    and then towards the supportive teams which will contribute to seamlessly getting your project 
                    underway.
                </template>
                <template v-slot:img><img src="../assets/3d/test.png" alt=""></template>
            </ContainerRightContent>
            <ContainerLeftContent>
                <template v-slot:title>Team</template>
                <template v-slot:content>Once we are negotiated all the details we can process the hiring process for
                    your projects. The teams are built on your requirements, whether that includes <span
                        class="dedicated">dedicated teams</span> or <span class="sharing">sharing teams</span> across
                    projects. This means we can set goals and integrate team needed for your project at the pace you
                    want.</template>
                <template v-slot:img><img src="../assets/3d/test.png" alt=""></template>
            </ContainerLeftContent>
            <div class="row">
                <div class="col-lg">
                    <div class="left">
                        <span class="dedicated-title">Dedicated Teams</span><br>
                        <p>Setting up your dedicated team would allow for more control and fine detailing of the 
                            project. Dedicated teams will be solely working on your project for a minimum of 8 hours 
                            a day excluding the lunch hour. These teams/individuals will be providing  daily status 
                            updates every working day and will be able to have weekly meetings depending on your 
                            request. Having a dedicated team can easily ensure that your project is prioritized and 
                            delivered to perfection.
                        </p>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="right">
                        <span class="sharing-title">Sharing Teams</span><br>
                        <p>Shared teams allow for a more varied level of flexibility. This option is better when you 
                            as the client having multiple projects running which require the expertise of different 
                            teams and individuals. Setting up your Sharing team would be one or more individuals 
                            working on your Project or service for a minimum of 2 hours a day. This team/individual 
                            will be reporting there daily status report regarding your project every working day and 
                            will be able to have weekly/monthly meetings depending on your request.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-3">
            <div class="heading">
                <h3>Simplifed Pricing</h3>
            </div>
            <div class="row">
                <div class="col-lg col-md pricing-main">
                    <div class="price-container-left">
                        <div class="price-wrapper">
                            <span class="title-main">DEVELOPER</span>
                            <span class="content">Work with qualified junior talent, experienced senior talent, and technical experts.</span>
                            <span class="title-sub">Between</span>
                            <span class="price">$25-50/hour</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg col-md pricing-main">
                    <div class="price-container-right">
                        <div class="price-wrapper">
                            <span class="title-main">DEVELOPER</span>
                            <span class="content">Work with qualified junior talent, experienced senior talent, and technical experts.</span>
                            <span class="title-sub">Between</span>
                            <span class="price">$25-50/hour</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-4">
            <HowWeCanHelp/>
        </div>
    </div>
</template>

<script>
import MainBanner from '~/components/MainBanner.vue';
import ContainerLeftContent from '~/components/ContainerLeftContent.vue';
import ContainerRightContent from '~/components/ContainerRightContent.vue';
import HowWeCanHelp from '~/components/HowWeCanHelp.vue';
export default {
    components: { MainBanner, ContainerLeftContent, ContainerRightContent, HowWeCanHelp }
}
</script>

<style scoped>
.row {
    padding: 0;
    margin: 0;
}

.col-lg{
    padding: 0;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.heading h3 {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    background: linear-gradient(to right, rgb(98, 0, 255), rgb(98, 0, 255), rgb(0, 140, 255), rgb(0, 140, 255));
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.container-2 {
    padding: 0 50px;
}

.dedicated {
    background: linear-gradient(to right, rgb(180, 0, 0), rgb(180, 0, 0), red, red);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.sharing {
    background: linear-gradient(to right, purple, purple, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.left {
    margin-bottom: 40px;
    padding-right: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.right {
    margin-bottom: 40px;
    padding-left: 20px;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.dedicated-title {
    font-size: 20px;
    font-weight: 500;
    background: linear-gradient(to right, rgb(180, 0, 0), rgb(180, 0, 0), red, red);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.sharing-title {
    font-size: 20px;
    font-weight: 500;
    background: linear-gradient(to right, purple, purple, blue, blue);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.container-3{
    padding: 0 50px;
}

.pricing-main{
    margin: 20px 0;
}

.price-container-left{
    width: 100%;
    height: 100%;
    padding-right: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.price-container-right{
    width: 100%;
    height: 100%;
    padding-left: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.price-wrapper{
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.title-main{
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    background: linear-gradient(to right,blue, blue, red, red);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.content{
    margin-bottom: 40px;
    text-align: center;
}

.title-sub{
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.781);
}

.price{
    font-size: 60px;
    font-weight: 500;
    background: linear-gradient(to right,blue, blue, red, red);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

@media only screen and (max-width: 1200px) {
    .container-2 , .container-3 {
        padding: 0 30px;
    }
}

@media only screen and (max-width: 991px) {
    .heading h3 {
        font-size: 30px;
    }

    .price-container-left{
        padding-right: 10px;
    }

    .price-container-right{
        padding-left: 10px;
    }

    .price{
    font-size: 40px;
    }

    .price-wrapper{
        width: 100%;
        border-radius: 20px;
    }
}

@media only screen and (max-width: 767px) {
    .container-2 , .container-3 {
        padding: 0 10px;
    }

    .heading h3 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .price-container-left , .price-container-right{
        padding: 0;
    }

    .price{
    font-size: 35px;
    }

    .price-wrapper{
        width: 100%;
        padding: 40px 20px;
        background-color: rgba(0, 0, 0, 0.164);
        border-radius: 20px;
    }
}
</style>