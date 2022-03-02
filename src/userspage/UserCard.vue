<template>
  <v-card class="mx-auto" max-width="500" outlined>
      <v-spacer></v-spacer>
      <v-menu
        bottom
        right
      >
      <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        color="secondary"
        v-bind="attrs"
        v-on="on"
      >
      <v-icon dark>
        mdi-dots-vertical
      </v-icon>
    </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-btn color="error">ユーザー削除</v-btn>      
      </v-list-item>
    </v-list>
    </v-menu>
        <v-card-text class="d-flex justify-space-between">
      <div class="d-flex flex-column">
        <p class="text-subtitle mb-0">ID: {{ id }}</p>
        <p class="text-h5 my-1">{{ name }}</p>
        <p>{{ kana }}</p>
      </div>
      <div class="d-flex flex-column tect-center">
        <v-avatar color="indigo" size="80">
          <v-icon dark size="70"> mdi-account-circle </v-icon>
        </v-avatar>
        <v-btn text class="text-decoration-underline">基本情報</v-btn>
      </div>
    </v-card-text>
    <v-card-text> {{ goal }}  </v-card-text>
      <v-tabs  show-arrows>
        <v-tab @click="chartTab = 1">メニュー</v-tab>
        <v-tab @click="chartTab = 2">身体能力</v-tab>
        <v-tab @click="chartTab = 3">スケジュール</v-tab>
      </v-tabs>
        <BaseMenu v-show="chartTab == 1" :baseMenu="baseMenu"></BaseMenu>
        <AbilityChart :ability="ability" v-show="chartTab == 2 && ability"></AbilityChart>
        <UserCalendar v-show="chartTab == 3"></UserCalendar>
  </v-card>
</template>

<script>
import AbilityChart from "./AbilityChart";
import UserCalendar from "./UserCalendar";
import BaseMenu from "./BaseMenu"
export default {
  name: "usercard",
  data(){
    return{
      tab:null,
      chartTab:1
    }
  },
  props: {
    id: Number,
    name: String,
    kana: String,
    goal: String,
    baseMenu: Array,
    comment: String,
    ability: Object,
  },
  components: {
    AbilityChart,
    UserCalendar,
    BaseMenu
},
};
</script>
