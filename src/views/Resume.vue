<template>
  <div class="resume">
    <div class="resume-container">
      <div class="mostly-customized-scrollbar">
        <div class="resume-body">
          <header>
            <div class="header-image-container">
              <div class="header-image-container-inner">
                <img src="../assets/logo.jpg" alt="logo" />
              </div>
            </div>
            <div class="base-information-container">
              <div class="section section-1">
                <span><font-awesome-icon icon="fa-solid fa-address-card" /> 姓名： {{resume.name}}</span>
                <span><font-awesome-icon icon="fa-solid fa-map-location-dot" /> 现居： {{resume.currentLocation}}</span>
                <span><font-awesome-icon icon="fa-solid fa-school" /> 毕业院校： {{resume.graduationSchool}}</span>
              </div>
              <div class="section section-2">
                <span><font-awesome-icon icon="fa-solid fa-phone" /> 电话： {{resume.phone}}</span>
                <span><font-awesome-icon icon="fa-solid fa-envelope" /> 邮箱： {{resume.email}}</span>
              </div>
            </div>
          </header>
          <div class="resume-information-container">
            <BaseResumeCard title="教育经历" title-icon="fa-solid fa-school">
              <div class="li education-info">
                <span>厦门理工学院</span>
                <span>软件工程</span>
                <span>本科</span>
                <span><i></i>21届</span>
              </div>
              <span class="li "><span class="heightlight">主修课程：</span>C语言程序设计、网页设计、数据结构与算法、计算机网络、面向对象程序设计、软件测试技术、数据库原理与应用、Web编程、大数据编程与应用、机器学习；</span>
              <span class="li "><span class="heightlight">荣誉奖项：</span>厦门理工学院2021届优秀毕业生、厦门理工学院卓越荣誉学士学位。</span>
            </BaseResumeCard>
            <BaseResumeCard title="项目经历" title-icon="fa-solid fa-diagram-project">
              <span class="li "><span class="heightlight">大一期间：</span>可联机五子棋游戏（C++）；</span>
              <span class="li "><span class="heightlight">大二期间：</span>基于知识图谱的医疗问答机器人（数据爬虫、医疗知识图谱搭建、基础的自然语言处理、前后端开发）、基于Vue和SpringBoot的博客系统；</span>
              <span class="li "><span class="heightlight">大三期间：</span>基于Vue和Flask的电影推荐系统（PC端）；</span>
              <span class="li "><span class="heightlight">大四期间：</span>基于知识图谱的医保基金欺诈检测系统（毕业设计）、基于Flutter和Flask的电影推荐系统（移动端）。</span>
            </BaseResumeCard>
            <BaseResumeCard title="技能证书" title-icon="fa-solid fa-screwdriver-wrench">
              <span class="li "><span class="heightlight">技能：</span>C/C++、Python、Java、Javascript、Flutter；</span>
              <span class="li "><span class="heightlight">证书：</span>英语四级（431分）、英语六级（468分）、国家信息安全水平证书（一级）。</span>
            </BaseResumeCard>
            <BaseResumeCard title="获奖经历" title-icon="fa-solid fa-medal">
              <span class="li "><span class="heightlight">个人奖项：</span></span>
              <span class="li ">2018年03月：第二届“强网杯”全国网络安全挑战赛线上赛优秀奖；</span>
              <span class="li ">2018年04月：蓝桥杯C/C++程序设计大赛B组三等奖；</span>
              <span class="li ">2018年11月：厦门理工学院“国科-i春秋”杯第二届网络空间安全大赛二等奖；</span>
              <span class="li ">2019年11月：全国大学生软件测试大赛福建赛区开发者测试赛一等奖；</span>
              <span class="li ">2019年11月：全国大学生软件测试大赛福建赛区移动应用测试赛一等奖；</span>
              <span class="li ">2019年12月：全国大学生软件测试大赛总决赛开发者测试全国二等奖；</span>
              <span class="li ">2019年12月：全国大学生软件测试大赛总决赛移动应用测试全国三等奖；</span>
              <span class="li ">2020年11月：全国大学生软件测试大赛福建赛区移动应用测试个人赛一等奖。</span>
              <span class="li "><span class="heightlight">集体奖项：</span></span>
              <span class="li ">2018年07月：第十一届全国大学生信息安全竞赛创新能力实践赛，全国三等奖；</span>
              <span class="li ">2018年09月：“网鼎杯”优秀奖；</span>
              <span class="li ">2018年12月：第四届“福建省高校网络空间安全大赛”优秀奖；</span>
              <span class="li ">2019年05月：第十届福建省大学生程序设计竞赛铜奖；</span>
              <span class="li ">2019年06月：第十二届全国大学生信息安全竞赛创新能力实践赛，赛区二等奖；</span>
              <span class="li ">2019年09月：福建省国家网络安全宣传周网络空间安全知识和安全技能竞赛一等奖。</span>
            </BaseResumeCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseResumeCard from "../components/BaseResumeCard";
  export default {
    name: "Resume",
    components: {BaseResumeCard},
    data() {
      return {
        resume: {
          name: '曾振华',
          currentLocation: '福建省龙岩市',
          graduationSchool: '厦门理工学院',
          phone: '15159069775',
          email: 'alien_worm@163.com'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
 .resume {
   position: relative;
   width: 100vw;
   min-height: 100vh;
   .resume-container {
     z-index: 1;
     position: absolute;
     left: 0;
     right: 0;
     min-height: 100vh;
     .mostly-customized-scrollbar {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       overflow-x: hidden;
       @include set_background_color("text_color_1");
       .resume-body {
         position: relative;
         margin: 0 auto;
         width: 794px;
         @include set_background_color("background_color");
         padding-bottom: 40px;
         header {
           position: relative;
           width: 100%;
           height: 160px;
           @include set_background_color("card_color");
           box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 20px;
           .header-image-container {
             position: relative;
             width: 120px;
             height: 120px;
             border-radius: 10px;
             @include set_box_shadow('inset');
             @include set_background_color('background_color');
             .header-image-container-inner {
               position: absolute;
               top: 10px;
               left: 10px;
               right: 10px;
               bottom: 10px;
               border-radius: 5px;
               @include set_background_color('card_color');
               @include set_box_shadow('');
               display: flex;
               align-items: center;
               justify-content: center;
               overflow: hidden;
               img {
                 width: 90%;
                 height: 90%;
                 object-fit: cover;
                 @include set_filter_shadow();
               }
             }
           }
           .base-information-container {
             position: relative;
             width: calc(100% - 140px);
             height: 120px;
             display: flex;
             align-items: center;
             justify-content: space-between;
             flex-direction: column;
             .section {
               position: relative;
               width: 100%;
               height: 50%;
               display: flex;
               align-items: center;
               justify-content: space-between;
               span {
                 font-size: 16px;
                 svg {
                   path {
                     @include set_fill_color('button_color_1');
                   }
                 }
               }
             }
             .section-2 {
               justify-content: unset;
               border-top: dashed 2px rgba(0, 0, 0, 0.2);
               span {
                 margin-right: 40px;
               }
             }
           }
         }
         .resume-information-container {
           position: relative;
           width: 100%;
           padding: 40px 20px 0 20px;
           .li {
             margin-bottom: 10px;
             &:nth-last-child(1) {
               margin-bottom: 0;
             }
           }
           .education-info {
             position: relative;
             line-height: 20px;
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: space-between;
             span {
               position: relative;
               width: calc(100% / 4);
               height: 100%;
               font-weight: bold;
               display: flex;
               align-items: center;
               justify-content: space-between;
             }
           }
           .base-resume-card {
             &:nth-last-child(1) {
               margin-bottom: 0;
             }
           }
         }
       }
     }
   }
 }

 .heightlight {
   @include set_text_color('button_color_1');
   font-weight: bold;
 }

  span {
    letter-spacing: 0.05rem;
  }

 @media only screen and (max-width: 794px) {
   .resume {
     .resume-container {
       .mostly-customized-scrollbar {
         .resume-body {
           width: 100%;
           margin: 0;
           padding-bottom: 20px;
           header {
             position: relative;
             width: 100%;
             height: 100px;
             @include set_background_color("card_color");
             box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
             display: flex;
             align-items: center;
             justify-content: space-between;
             padding: 10px;
             .header-image-container {
               position: relative;
               width: 80px;
               height: 80px;
               border-radius: 5px;
               @include set_box_shadow('inset');
               @include set_background_color('background_color');
               .header-image-container-inner {
                 position: absolute;
                 top: 5px;
                 left: 5px;
                 right: 5px;
                 bottom: 5px;
                 border-radius: 2.5px;
                 @include set_background_color('card_color');
                 @include set_box_shadow('');
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 overflow: hidden;
                 img {
                   width: 90%;
                   height: 90%;
                   object-fit: cover;
                   @include set_filter_shadow();
                 }
               }
             }
             .base-information-container {
               position: relative;
               width: calc(100% - 90px);
               height: 80px;
               display: flex;
               align-items: center;
               justify-content: space-between;
               flex-direction: column;
               .section {
                 position: relative;
                 width: 100%;
                 height: 50%;
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
                 span {
                   font-size: 12px;
                   word-break: keep-all;
                   svg {
                     path {
                       @include set_fill_color('button_color_1');
                     }
                   }
                 }
               }
               .section-2 {
                 border-top: dashed 2px rgba(0, 0, 0, 0.2);
                 span {
                   margin-right: unset;
                 }
               }
             }
           }
           .resume-information-container {
             position: relative;
             width: 100%;
             padding: 20px 10px 0 10px;
             .li {
               margin-bottom: 10px;
               font-size: 12px;
               &:nth-last-child(1) {
                 margin-bottom: 0;
               }
             }
             .education-info {
               position: relative;
               line-height: 20px;
               width: 100%;
               display: flex;
               align-items: center;
               justify-content: space-between;
               span {
                 position: relative;
                 width: calc(100% / 4);
                 height: 100%;
                 font-weight: bold;
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
                 font-size: 12px;
               }
             }
             .base-resume-card {
               &:nth-last-child(1) {
                 margin-bottom: 0;
               }
             }
           }
         }
       }
     }
   }
 }
</style>
