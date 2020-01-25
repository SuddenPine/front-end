<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->

    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Cards />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  components: {
    Header,
    Cards
  }
}
</script>
