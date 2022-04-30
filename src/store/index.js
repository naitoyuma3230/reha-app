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
					baseMenu: [
						{
							mainTitle: "デモボタン",
							items: [
								{
									subTitle: "デモ目的",
									menu: [
										{
											event: "デモトレーニング",
											target: ["大胸筋"],
											strength: "80kg",
										},
										{
											event: "デモ",
											target: ["広背筋"],
											strength: "12回",
										},
									],
								},
								{
									subTitle: "デモメニュー目的",
									menu: [
										{
											event: "デモトレ",
											target: ["腹筋"],
											strength: "20回",
										},
										{
											event: "デモ",
											target: ["腹筋"],
											strength: "60秒",
										},
									],
								},
								{
									subTitle: "デモの目標",
									menu: [
										{
											event: "デモスクワット",
											target: ["大殿筋", "大腿四頭筋"],
											strength: "120kg",
										},
									],
								},
							],
						},
						{
							mainTitle: "テスト",
							items: [
								{
									subTitle: "テスト目標",
									menu: [
										{
											event: "テストベンチ",
											target: ["大胸筋"],
											strength: "80kg",
										},
										{
											event: "テストバーベル",
											target: ["三角筋"],
											strength: "40kg",
										},
										{
											event: "テスト懸垂",
											target: ["広背筋"],
											strength: "12回",
										},
									],
								},
								{
									subTitle: "テスト",
									menu: [
										{
											event: "テストデモ",
											target: ["腹筋"],
											strength: "20回",
										},
										{
											event: "プランク",
											target: ["腹筋"],
											strength: "60秒",
										},
									],
								},
								{
									subTitle: "下半身",
									menu: [
										{
											event: "スクワット",
											target: ["大殿筋", "大腿四頭筋"],
											strength: "120kg",
										},
									],
								},
							],
						},
						{
							mainTitle: "筋力向上",
							items: [
								{
									subTitle: "上半身",
									menu: [
										{
											event: "ベンチプレス",
											target: ["大胸筋"],
											strength: "80kg",
										},
										{
											event: "バーベルアップ",
											target: ["三角筋"],
											strength: "40kg",
										},
										{
											event: "懸垂",
											target: ["広背筋"],
											strength: "12回",
										},
									],
								},
								{
									subTitle: "体幹",
									menu: [
										{
											event: "シットアップ",
											target: ["腹筋"],
											strength: "20回",
										},
										{
											event: "プランク",
											target: ["腹筋"],
											strength: "60秒",
										},
									],
								},
								{
									subTitle: "下半身",
									menu: [
										{
											event: "スクワット",
											target: ["大殿筋", "大腿四頭筋"],
											strength: "120kg",
										},
									],
								},
							],
						},
						{
							mainTitle: "バスケ競技",
							items: [
								{
									subTitle: "瞬発力・跳躍力",
									menu: [
										{
											event: "ステップジャンプ",
											target: ["大胸筋"],
											strength: "20cm台片足で前左右方向へ各10回×3セット",
										},
										{
											event: "ボードタッチ",
											target: ["三角筋"],
											strength: "連続10回×3セット",
										},
										{
											event: "ドリブルラン",
											target: ["広背筋"],
											strength: "クロス、バック、レッグスルー5往復",
										},
									],
								},
								{
									subTitle: "ドリブルメニュー",
									menu: [
										{
											event: "ドリブルラン",
											target: ["広背筋"],
											strength: "クロス、バック、レッグスルー5往復",
										},
										{
											event: "ボールタッチ",
											target: ["腹筋"],
											strength:
												"ダブルドリブル、チェンジ、同時-交互各2分×3セット",
										},
									],
								},
							],
						},
					],
					ability: {
						data1: 20,
						data2: 30,
						data3: 60,
						data4: 18,
						data5: 15,
					},
					schedule: {
						day: [],
						dayMenu: [],
						trainer: "",
					},
				},
				{
					id: 2,
					name: "藤井聡太",
					kana: "ふじいそうた",
					password: "",
					goal: "将棋で戦い抜く体力が欲しい",
					comment:
						"将棋が得意だが体力が少ないので、基礎トレーニングから行いたい",
					baseMenu: [
						{
							mainTitle: "体力",
							items: [
								{
									subTitle: "全身運動",
									menu: [
										{
											event: "ストレッチ",
											target: ["腹筋"],
											strength: "下肢全体を10分",
										},
										{
											event: "ウォーキング",
											target: ["腹筋"],
											strength: "準備運動で10分",
										},
										{
											event: "ランニング",
											target: ["腹筋"],
											strength: "20分で3km目標",
										},
									],
								},
							],
						},
					],
					ability: {
						data1: 10,
						data2: 30,
						data3: 5,
						data4: 10,
						data5: 10,
					},
				},
				{
					id: 3,
					name: "大谷翔平",
					kana: "おおたにしょうへい",
					password: "",
					goal: "球速を上げたい",
					comment: "",
					baseMenu: [
						{
							mainTitle: "筋力向上",
							items: [
								{
									subTitle: "上半身",
									menu: [
										{
											event: "ベンチプレス",
											target: ["大胸筋"],
											strength: "80kg-10回、70kg-10回",
										},
										{
											event: "バーベルアップ",
											target: ["三角筋"],
											strength: "40kg",
										},
										{
											event: "懸垂",
											target: ["広背筋"],
											strength: "12回",
										},
									],
								},
								{
									subTitle: "体幹",
									menu: [
										{
											event: "シットアップ",
											target: ["腹筋"],
											strength: "20回",
										},
										{
											event: "プランク",
											target: ["腹筋"],
											strength: "60秒",
										},
									],
								},
								{
									subTitle: "下半身",
									menu: [
										{
											event: "スクワット",
											target: ["大殿筋", "大腿四頭筋"],
											strength: "120kg",
										},
									],
								},
							],
						},
					],
					ability: {
						data1: 80,
						data2: 90,
						data3: 80,
						data4: 90,
						data5: 100,
					},
				},
				{
					id: 4,
					name: "本田圭佑",
					kana: "ほんだけいすけ",
					password: "",
					goal: "年齢と共に走力の衰え",
					baseMenu: [
						{
							mainTitle: "走力",
							items: [
								{
									subTitle: "瞬発力",
									menu: [
										{
											event: "ジャンプスクワット",
											target: ["大胸筋"],
											strength: "10回×5セット",
										},
										{
											event: "プランクスクワット",
											target: ["三角筋"],
											strength: "10回×5セット",
										},
										{
											event: "20mダッシュ",
											target: ["広背筋"],
											strength: "ダッシュ20m-インターバル20m×20回",
										},
									],
								},
								{
									subTitle: "持久力",
									menu: [
										{
											event: "インタ－バル走",
											target: ["持久力"],
											strength: "30秒ダッシュ-80秒インターバル-10セット",
										},
										{
											event: "水泳",
											target: ["持久力"],
											strength: "300m×3セット",
										},
									],
								},
							],
						},
					],
					comment: "瞬発力向上のトレーニングを行いたい",
					ability: {
						data1: 60,
						data2: 70,
						data3: 70,
						data4: 80,
						data5: 80,
					},
				},
				{
					id: 5,
					name: "斎藤佑樹",
					kana: "さいとうゆうき",
					password: "",
					goal: "引退後の健康維持",
					baseMenu: [
						{
							mainTitle: "肩のケア",
							items: [
								{
									subTitle: "ストレッチ",
									menu: [
										{
											event: "肩関節、水平伸展",
											target: ["大胸筋"],
											strength: "ターゲット：大胸筋・小胸筋",
										},
										{
											event: "肩関節外旋",
											target: ["三角筋"],
											strength: "ターゲット：小円筋",
										},
										{
											event: "肩関節外転",
											target: ["広背筋"],
											strength: "ターゲット：広背筋",
										},
									],
								},
								{
									subTitle: "インナー調整",
									menu: [
										{
											event: "肩関節外旋",
											target: ["大胸筋"],
											strength: "ターゲット棘下筋・小円筋 ペットボトル負荷",
										},
										{
											event: "肩関節チューブ外転",
											target: ["三角筋"],
											strength: "ターゲット：棘上筋・三角筋 ごく低負荷で",
										},
										{
											event: "肩関節水平外転",
											target: ["広背筋"],
											strength: "ターゲット：菱形筋・僧帽筋中部 ごく低負荷で",
										},
									],
								},
							],
						},
					],
					comment: "辛いことはしたくない",
					ability: {
						data1: 60,
						data2: 70,
						data3: 70,
						data4: 80,
						data5: 80,
					},
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
		deleteUserByIdAction({ commit, getters }, payload) {
			let deletedUsers = getters.getUsers.filter((user) => {
				return user.id !== payload.id;
			});
			commit("setUsers", deletedUsers);
		},
	},
	getters: {
		getUsers(state) {
			return state.users;
		},
		getUserById(state, payload) {
			return state.users.filter((user) => {
				return user.id === payload;
			});
		},
	},
});
