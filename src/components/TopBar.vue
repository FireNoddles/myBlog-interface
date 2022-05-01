<template>
<el-row class = "container">
  <!-- <el-col :span="24">
    <div ></div>
  </el-col> -->
  
  <el-col :span="24" class="container-p">
    <el-dropdown class="avator">
      <span>
        <div ><el-avatar shape="square" :size="50" :src="avatorUrl"></el-avatar></div>
      </span>
      <el-dropdown-menu slot="dropdown" style="width:200px;">
          <el-card class="box-card">
  <el-row><el-image 
      style="width: 100px; height: 100px"
      :src="githuburl"
       @click="jumpToGithub"></el-image>
      </el-row>
      <el-row>
        <div style="margin-top: 10px;">@FireNoddles</div>
      </el-row>
</el-card>
      </el-dropdown-menu>
    </el-dropdown>
    
    <div class="button">
      
      <el-button type="text" class="button-text">HOME</el-button>
      <el-dropdown>
      <el-button type="text" class="button-text">
    类 别 
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<div class="search bar1">
        <form>
            <input type="text"  placeholder="搜索文章标题">
            <div>
              <el-button class="search-button" size="mini"  icon="el-icon-search"></el-button>
            </div>
        </form>
    </div>
    <div>
      <el-image 
      style="width: 300px; height: 200%; margin-top:80px"
      :src="logo"
      ></el-image>
    </div>

    </div>
    
  </el-col>
</el-row>
</template>


<script>
import avator from '../pic/avator.png'
import avator2 from '../pic/avator2.png'
import github from '../pic/github.png'
import logo from '../pic/logo.png'
  export default {
    data () {
      return {
        avatorUrl: avator,
        bigAvatorurl: avator2,
        githuburl:github,
        logo:logo,
        sizeList: ["large", "medium", "small"]
      }
    },
    methods:{
      jumpToGithub(){
        window.open("https://github.com/FireNoddles")
      }

      
    }
  }
</script>

<style scoped>

.container{
    height: 300px;
    width: 105%;
    background: url('../pic/banner.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    text-align: center;
    overflow: hidden;
    /* p居中 */
}
.container-p{
  
    /* position: fixed; */
    margin-top: 0px;
    height: 70px;
    font-size: 24px;
    border-radius: 0px;
    background-color: rgba(255,255,255,.2);
    backdrop-filter: blur(25px);
}

.avator{
  margin-top:10px;
  float:left;
  margin-left: 10px;

}
.bar1 input {
    float:right;
    border: 2px solid #090909;
    border-radius: 5px;
    margin-right: 100px;
    margin-top: -40px;
    background: #ffffff;
    color: #9E9C9C;
    width:250px;
    height:30px
}
.search-button{
    float:right;
    margin-right: 105px;
    margin-top: -36px;
}

.box-card {
    width: 180px;
    text-align: center;
    margin-left: 10px;
    border-radius: 0px;
    background-color: rgba(255,255,255,.2);
    backdrop-filter: blur(25px);
  }
.button{
  font-family: "Helvetica Neue";
  margin-top: 10px;
  margin-right: 0px;
  text-align: center;
  background-color: transparent;
}
.button-text{
  font-family: "Helvetica Neue";
  font-size: 20px;
  margin-right: 50px;
  color: rgb(50, 47, 47);
}
.button-text:hover {
    background: rgb(184, 180, 173);
}


</style>