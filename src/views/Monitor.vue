<template>
  <div class="home">
    <Header />
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <b-container fluid class="bv-example-row">
      <b-row align-h="center">
        <b-col style="padding:1em">
          <MonitorCards />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import MonitorCards from '@/components/MonitorCards.vue'

export default {
  name: 'home',
  components: {
    Header,
    MonitorCards
  }
}
</script>
