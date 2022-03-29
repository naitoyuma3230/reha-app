<template>
  <v-toolbar rounded elevation="1">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <v-text-field
        dense
        label="検索"
        class="mt-6"
        v-model="searchWord"
        @input="input"
      ></v-text-field>
    </v-toolbar-title>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
    };
  },
  methods: {
    input() {
      let pattern = this.searchWord;
      this.$emit("setSearchPattern", pattern);
    },
  },
};
</script>
