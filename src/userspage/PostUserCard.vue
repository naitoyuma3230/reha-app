<template>
  <v-card class="mx-auto" max-width="500" outlined>
    <v-form>
      <v-card-title class="justify-center">新しいユーザーを作成</v-card-title>
      <v-card-text class="d-flex justify-space-between">
        <div class="d-flex flex-column">
          <p class="text-subtitle mb-0">ID: {{ getNewUsersId }}</p>
          <v-text-field
            :counter="10"
            label="名前"
            v-model="newUser.name"
          ></v-text-field>
          <v-text-field
            :counter="10"
            label="よみがな"
            v-model="newUser.kana"
            class="my-0"
          ></v-text-field>
        </div>
        <div class="d-flex flex-column text-center">
          <v-avatar color="indigo" size="80" class="mx-auto">
            <v-icon dark size="70"> mdi-account-circle </v-icon>
          </v-avatar>
        </div>
      </v-card-text>
      <v-card-text class="mt-0">
        <v-text-field
          :counter="30"
          label="目標"
          v-model="newUser.goal"
        ></v-text-field>
      </v-card-text>
    </v-form>
    <v-card-actions class="justify-space-between">
      <v-btn @click="cancel"> キャンセル </v-btn>
      <v-btn color="primary" @click="postUser($event), cancel($event)">
        追加する
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  nmae: "postusercard",
  data() {
    return {
      newUser: {
        name: "",
        kana: "",
        goal: "",
      },
    };
  },
  methods: {
    postUser() {
      this.$store.dispatch("postUserAction", this.newUser);
    },
    cancel() {
      this.$emit("cancel");
    },
  },
  computed: {
    getNewUsersId() {
      return this.$store.getters.getUsers.length + 1;
    },
  },
};
</script>
