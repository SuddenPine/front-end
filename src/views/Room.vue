<template>
  <div class="modules">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>

      <h1 style="height:50px"></h1>
      <!-- <h1>{{ modules[0].alias }}</h1> -->
      <b-row>
        <b-col cols="3" v-for="room in roomlist" :key="room.alias">
          <router-link :to="`/rooms/${room.alias}/`">
            <b-card :img-src="room.img" img-alt="Image" img-top style="max-width: 20rem;">
              <template v-slot:header>
                <h4 class="mb-0">{{ room.title }}</h4>
              </template>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'

export default {
  name: 'roomlist',
  components: {
    Header
  },
  computed: {
    ...mapState({
      roomlist: state => state.roomlist
    })
  }
}
</script>

<style></style>
