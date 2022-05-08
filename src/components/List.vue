<template>
<div>
<el-row>
  
  <el-col :span=24 v-for="(o, index) in this.card_data.list" :key="index" :offset="0" >
    <div class ="cardpos">
    <el-card :body-style="{ padding: '20px' }" shadow="hover" class ="card">
        <el-avatar class = "image" shape="square" :style="`background:${extractColorByName(o.name)}`"> {{o.id}} </el-avatar>
      <div>
        <router-link :to="{path:'/list/readArticle',query: {id: o.id}}" >
          <span class="text">{{o.name}}</span>
        
        <div class="bottom clearfix">
          <time class="time">{{ o.desc }}</time>
          
        </div>
        </router-link>
        <el-button type="primary" plain size="small" class="comment">评论:{{o.comment_count}}</el-button>
          <el-button type="primary" plain size="small" class="read">阅读:{{o.read_count}}</el-button>
      </div>
    </el-card>
    </div>
</el-col>
</el-row>

<el-row>
  <el-col :span=24><div class = "pagepos">
    <el-pagination
  background
  layout="prev, pager, next"
  :page-size="searchParas.page_size"
  :current-page="page_num"
  :hide-on-single-page="hide"
  :total="card_data.total"
  @current-change="pageChange"
  >
</el-pagination>
    </div></el-col>
</el-row>
</div>
</template>

<script>
import { GetArticleListApi} from '@/request/api.js'
export default {
  data () {
    return {
      page_num:1,
      hide:true,
      card_data :{
          total: 0,
          list: []
        },
      searchParas:{
        id:"",
        name:"",
        category_id:"",
        page_size:15,
        page_num:1
      },
    }
  },
  created() {
      this.getArticleList()
    }, 
  methods:{

    pageChange(val){
      this.searchParas.page_num = val
      console.log(val)
      this.getArticleList()
      
    },

    extractColorByName(name) {
	      var temp = [];
	      temp.push("#");
	      for (let index = 0; index < name.length; index++) {
	        temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16));
	      }
	      return temp.slice(0, 5).join('').slice(0, 4);
	    },
      getArticleList(){
        this.card_data.list=[]
        this.card_data.total = 0
        if (this.searchParas.id != ""){
          this.searchParas.id = parseInt(this.searchParas.id)
        }
        if (this.$route.query.cid != null){
          this.searchParas.category_id = parseInt(this.$route.query.cid)
        }
        
        if (this.searchParas.category_id != ""){
          this.searchParas.category_id = parseInt(this.searchParas.category_id)
        }
        this.searchParas.name = this.$route.query.name
        GetArticleListApi(this.searchParas).then(res=>{
          if (res.data.status === 0) {
            this.card_data.total = res.data.data.total
            for (const key in res.data.data.list){
              let data = res.data.data.list[key]
              this.card_data.list.push(data)
            }
            this.page_num = this.searchParas.page_num
          }else{
            alert(res.data.message)
          }
        })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .time {
    padding: 0px;
    margin-left: 100px;
    margin-top: -45px;
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .card {
    margin-top: 13px;
    width:1000px;
  }
  .cardpos{

    display: flex;    
    justify-content: center; 

  }

    .pagepos{
    margin-top: 30px;
    display: flex;    
    justify-content: center; 

  }

  .read {
    margin-top: -20px;
    float: right;
  }

  .comment {
    margin-top: -65px;
    float: right;
  }

  .image {
    margin-left: 13px;
    margin-top: 10px;
    display: block;
  }
  .text {
    text-decoration:none;
    padding: 0px;
    margin-left: 100px;
    margin-top: -45px;
    display: block;
    font-size:20px;
    color: black;
    
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .router-link-active {
  text-decoration: none;
  color: yellow;
}
a{
  text-decoration: none;
  color: white;
}
</style>
