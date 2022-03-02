<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="mr-4" @click="setUsersAction()">Axios</v-btn>
        <v-btn 
          color="primary"
          @click="userAdd = true"
        >
          ユーザー追加
          </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col        
        cols="12"
        xs="12"
        sm="6"
        v-show="userAdd"
        >
        <PostUserCard @cancel="userAdd = false"></PostUserCard>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        v-for="user in getUsers"
        :key="user.id"
      >
        <!-- v-bind:prop = "prop" を v-bind="prop"  に省略可) -->
        <!-- v-bind="object" で指定したオブジェクトのプロパティをまとめてカスタムデータとしてバインド -->
        <!-- この場合 user.nmae user.id user.titleが各カスタム属性名で子コンポーネントに渡される -->
        <UserCard v-bind="user"> </UserCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UserCard from "../userspage/UserCard";
import PostUserCard from "../userspage/PostUserCard.vue"

export default {
  data(){
    return{
      userAdd:false,
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },
  components: {
    UserCard,
    PostUserCard
  },
};
</script>
