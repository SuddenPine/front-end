<template>
  <div class="home">
    <Header />
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <HomeCards />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import HomeCards from '@/components/HomeCards.vue'

export default {
  name: 'home',
  components: {
    Header,
    HomeCards
  }
}
</script>
