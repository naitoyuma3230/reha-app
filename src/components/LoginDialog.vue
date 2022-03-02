<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-spacer></v-spacer>
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> ログイン </v-btn>
      </template>
      <v-card>
        <v-tabs class="bg-primary" v-model="tab">
          <v-tab @click="activeTab = 1">新規登録</v-tab>
          <v-tab @click="activeTab = 2">ログイン</v-tab>
        </v-tabs>

          <SigninTab
            v-show="activeTab === 1"
            :parentTrainer="parentTrainer"
            @setChildTrainer="setChildTrainer"
            :parentUser="parentUser"
            @setChildUser="setChildUser"
            @childTabchoice="childTabchoice"
          ></SigninTab>
          <LoginTab v-show="activeTab === 2"></LoginTab>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false"> キャンセル </v-btn>
          <v-btn
            v-show="activeTab === 2"
            color="primary"
            @click="dialog = false"
          >
            ログイン
          </v-btn>
          <v-btn
            v-show="activeTab === 1"
            color="primary"
            @click="
              postNewTrainerOrUser($event);
              closeDialog($event);
            "
          >
            新規登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import LoginTab from "./LoginTab";
import SigninTab from "./SigninTab";

export default {
  data() {
    return {
      tab:null,
      dialog: false,
      activeTab: 1,
      childTab: 0,
      parentTrainer: {
        name: "",
        kana: "",
        password: "",
        occupation: "",
      },
      parentUser: {
        name: "",
        kana: "",
        password: "",
      },
    };
  },
  methods: {
    childTabchoice(e) {
      this.childTab = e;
    },
    closeDialog() {
      this.dialog = false;
    },
    postNewTrainerOrUser() {
      switch (this.childTab) {
        case 1:
          this.$store.dispatch("postTrainerAction", this.parentTrainer);
          break;
        case 2:
          this.$store.dispatch("postUserAction", this.parentUser);
          break;
        default:
          console.log("タグ選択時にエラー有り");
      }
      this.parentTrainer = {
        name: "",
        kana: "",
        password: "",
        occupation: "",
      };
      this.parentUser = {
        name: "",
        kana: "",
        password: "",
      };
    },
    setChildTrainer(e) {
      this.parentTrainer = e;
    },
    setChildUser(e) {
      this.parentUser = e;
    },
  },
  components: {
    LoginTab,
    SigninTab,
  },
};
</script>
