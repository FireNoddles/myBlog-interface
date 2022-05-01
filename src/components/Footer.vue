<template>
<el-row>
  <el-col :span=24 class="pagepos">
    <div class="border">
      <div>
      <el-image
      style="width: 30px; height: 30px; margin-top:30px;margin-left: -90px;"
      :src="blogUrl"
      ></el-image><div class="text">FireNoddles Blog</div>
      </div>

</div>
  </el-col>
    
    
</el-row>

</template>
    

<script>
import blog from "../pic/foot-blog.png"
import cp from "../pic/copyright.png"
export default {
  data() {
    return {
      blogUrl:blog,
      cpyrUrl:cp,
      icp_record: ''
    }
  },
  mounted() {
    this.$root.$on('msg', (msg) => {
      this.icp_record = msg
    })
  }
}
</script>

<style>
    .pagepos{
    margin-top: 30px;
    display: flex;    
    justify-content: center; 

  }
  .text{
    margin-top:-30px;
    margin-left: 90px;
  }
  .border{
    text-align: center;
    width:100%;
    border-style: solid;
    border-width: 2px 0px 0px 0px;
    border-color: rgb(145, 145, 144);
  }
</style>