import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: [
        {
          id: 1,
          name: "内藤祐馬",
          kana: "ないとうゆうま",
          password: "",
          goal: "Storeのダミーデータ",
          comment: "Axiosでhttpリクエスト",
          menu: ["筋トレ", "持久力", "減量"],
        },
        {
          id: 2,
          name: "藤井聡太",
          kana: "ふじいそうた",
          password: "",
          goal: "将棋で戦い抜く体力が欲しい",
          menu: ["持久力", "筋力"],
          comment:
            "将棋が得意だが体力が少ないので、基礎トレーニングから行いたい",
        },
        {
          id: 3,
          name: "大谷翔平",
          kana: "おおたにしょうへい",
          password: "",
          goal: "球速を上げたい",
          menu: ["持久力"],
          comment: "",
        },
        {
          id: 4,
          name: "本田圭佑",
          kana: "ほんだけいすけ",
          password: "",
          goal: "年齢と共に走力の衰え",
          menu: ["瞬発力"],
          comment: "瞬発力向上のトレーニングを行いたい",
        },
      ],
      trainers: [
        {
          name: "内藤祐馬",
          kana: "ないとうゆうま",
          password: "12345",
          occupation: "アスレチックトレーナー",
        },
      ],
    };
  },
  // Dispatcher
  // 全てのアクションはただ一つに定義されたDispatcheを経由し
  // 登録されたstateの変更は監視・記録される
  // 呼び出し元のactionからpayload(オブジェクト)を受け取る
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    postUser(state, payload) {
      state.users.push(payload);
    },
    postTrainer(state, payload) {
      state.trainers.push(payload);
    },
  },
  actions: {
    setUsersAction(context) {
      axios.get("http://localhost:3000/users").then((response) => {
        const payload = response.data;
        context.commit("setUsers", payload);
      });
    },
    // postUserAction(context, payload) {
    //   context.commit("postUser", payload);
    // },
    postUserAction({ commit, getters }, payload) {
      payload.id = getters.getUsers.length + 1;
      commit("postUser", payload);
    },
    postTrainerAction({ commit }, payload) {
      commit("postTrainer", payload);
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
});
