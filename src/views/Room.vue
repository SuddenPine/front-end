<template>
  <div>
    <Header />
    <b-container class="bv-example-row">
      <h1 style="height:50px"></h1>
      <b-row>
        <b-col
          cols="4"
          md="4"
          sm="auto"
          v-for="room in roomlist"
          :key="room.alias"
          style="padding:1em"
        >
          <!-- <router-link :to="`/rooms/${room.alias}/`"> -->
          <b-card :img-src="room.img" img-alt="Image" img-top>
            <template v-slot:header>
              <h4 class="mb-0">{{ room.title }}</h4>
            </template>
            <b-list-group flush>
              <b-list-group-item>
                <b-card-title>Lighting</b-card-title>
                <b-card-sub-title class="mb-2">{{ room.lighting }}</b-card-sub-title>
                <b-button-group class="mx-1">
                  <b-button variant="info">&lsaquo;</b-button>
                  <b-button variant="info">&rsaquo;</b-button>
                </b-button-group>
              </b-list-group-item>
              <b-list-group-item>
                <b-card-title>Heating</b-card-title>
                <b-card-sub-title class="mb-2">{{ room.heating }}°C</b-card-sub-title>
                <b-button-group class="mx-1">
                  <b-button>&lsaquo;</b-button>
                  <b-button>&rsaquo;</b-button>
                </b-button-group>
              </b-list-group-item>
            </b-list-group>
          </b-card>

          <!-- </router-link> -->
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
