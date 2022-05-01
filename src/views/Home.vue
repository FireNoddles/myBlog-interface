<template>
  <!-- <v-app app> -->
    <div>
    <TopBar></TopBar>

        <router-view></router-view>

  

    <Footer></Footer>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
export default {
  components: { TopBar, Footer, Nav }
}
</script>
