<template>
  <v-container>
    <v-card width="auto">
      <!-- <v-toolbar flat color="primary" dark>
          <v-toolbar-text>User Profile</v-toolbar-text>
        </v-toolbar> -->
      <v-tabs vertical>
        <v-tab @click="childTabChoice(1)">
          <v-icon left> mdi-account </v-icon>
          トレーナー
        </v-tab>
        <v-tab @click="childTabChoice(2)">
          <v-icon left> mdi-account </v-icon>
          ユーザー
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              トレーナ登録
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="名前"
                    hint="フルネーム"
                    :value="parentTrainer.name"
                    @input="childTrainer.name = $event"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="ふりがな"
                    hint="ひらがな入力"
                    :value="parentTrainer.kana"
                    @input="childTrainer.kana = $event"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password"
                    type="password"
                    :value="parentTrainer.password"
                    @input="childTrainer.password = $event"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'アスレティックトレーナー',
                      '柔道整復師',
                      '理学療法士',
                      'ピラティス',
                      '管理栄養士',
                    ]"
                    label="職種"
                    :value="parentTrainer.occupation"
                    @input="childTrainer.occupation = $event"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              利用者登録
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="名前"
                    :value="parentUser.name"
                    @input="childUser.name = $event"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="ふりがな"
                    hint="ひらがな入力"
                    :value="parentUser.kana"
                    @input="childUser.kana = $event"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password"
                    type="password"
                    :value="parentUser.password"
                    @input="childUser.password = $event"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      childTrainer: {
        name: "",
        kana: "",
        password: "",
        occupation: "",
      },
      childUser: {
        name: "",
        kana: "",
        password: "",
      },
    };
  },
  methods: {
    childTabChoice(e) {
      this.$emit("childTabchoice", e);
      // console.log("choice");
    },
  },
  props: {
    parentTrainer: Object,
    parentUser: Object,
  },
  watch: {
    childTrainer: {
      handler() {
        this.$emit("setChildTrainer", this.childTrainer);
      },
      deep: true,
    },
    childUser: {
      handler() {
        this.$emit("setChildUser", this.childUser);
      },
      deep: true,
    },
  },
};

// 親子間のデータバインドは子コンポーネントのcomputedを使用する方法と
// v-onイベントを使用する方法があるこの場合はcomputedを使用している
// 両方$emitを使用するが、オブジェクトをバインドする方法が見つからず、オリジナルでwatchを使用している。
</script>

<style></style>
