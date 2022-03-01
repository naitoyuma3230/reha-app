<template>
  <v-card class="mx-auto" max-width="366" outlined>
    <v-list-item>
      <v-list-item-content>
        <div class="text-overline">ID: {{ id }}</div>
        <v-list-item-title class="text-h5 mb-1">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>{{ kana }}</v-list-item-subtitle>
      </v-list-item-content>
      <div class="d-flex flex-column align-center mt-2">
        <v-avatar color="indigo" size="80">
          <v-icon dark size="70"> mdi-account-circle </v-icon>
        </v-avatar>
        <v-btn text class="text-decoration-underline">基本情報</v-btn>
      </div>
    </v-list-item>
    <v-card-text class="text-body-2 pb-0">メニュー</v-card-text>
    <v-card-actions>
      <v-btn
        rounded
        color="primary"
        dark
        px-0
        v-for="(item, i) in menu"
        :key="i"
        >{{ item }}</v-btn
      >
      <v-btn class="mx-2" fab outlined small color="primary">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn outlined>食事</v-btn>
      <v-btn outlined>
        <router-link to="/user/1" tag="div">身体能力</router-link></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "usercard",
  props: {
    id: Number,
    name: String,
    kana: String,
    goal: String,
    menu: Array,
    comment: String,
  },
};
</script>
