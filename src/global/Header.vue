<template>
  <v-app-bar app>
    <!-- <div class="d-flex align-center"> -->
    <v-tabs>
      <v-tab><router-link to="/" tag="div">HOME</router-link></v-tab>
      <v-tab><router-link to="/users" tag="div">Users</router-link></v-tab>
      <v-tab><router-link to="/about" tag="div">ABOUT</router-link></v-tab>
    </v-tabs>
    <!-- </div> -->
    <LoginDaialog></LoginDaialog>
  </v-app-bar>
</template>
<script>
import LoginDaialog from "../components/LoginDialog";
export default {
  name: "Header",
  components: { LoginDaialog },
};
</script>
<style>

</style>
