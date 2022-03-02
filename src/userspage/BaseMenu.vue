<template>
  <v-card-actions>
    <v-btn
      rounded
      color="primary"
      dark
      px-0
      v-for="(item, i) in baseMenu"
      :key="i"
      >{{ item }}</v-btn
    >
    <v-btn class="mx-2" fab outlined small color="primary">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
</v-card-actions>
</template>

<script>
export default {
  props:{
    baseMenu:Array
  }
}
</script>

<style>

</style>