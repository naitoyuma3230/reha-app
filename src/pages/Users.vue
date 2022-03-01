<template>
  <v-container>
    <h1>ユーザーのリスト</h1>
    <v-row>
      <v-col>
        <v-btn class="mr-4" @click="setUsersAction()">Axios</v-btn>
        <v-btn color="primary">
          <router-link to="/userpost" tag="div"
            >ユーザー追加</router-link
          ></v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="6"
        sm="6"
        lg="4"
        v-for="user in getUsers"
        v-bind="user"
        v-bind:key="user.id"
      >
        <!-- v-bind:prop = "prop" -> v-bind="prop"(省略可能) -->
        <!-- v-bind="object" そのオブジェクトのプロパティをまとめてカスタムデータとしてバインド -->
        <!-- この場合 user.nmae user.id user.titleが各カスタム属性名で子コンポーネントに渡される -->
        <UserCard v-bind="user"> </UserCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UserCard from "../userspage/UserCard";
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },

  components: {
    UserCard,
  },
};
</script>
