<template>
	<v-card>
		<v-card-text>
			<v-btn
				class="ma-1"
				v-for="(item, i) in baseMenu"
				:key="i"
				rounded
				color="primary"
				dark
				:outlined="!btnState[i].active"
				@click="test($event), btnActive(i, $event)"
			>
				{{ item.mainTitle }}
			</v-btn>
			<v-btn class="m-1 justify-self-end" fab outlined small color="primary">
				<v-icon dark> mdi-plus </v-icon>
			</v-btn>
		</v-card-text>

		<div v-for="(childitem, i) in baseMenu" :key="childitem.maintitle">
			<v-scroll-x-transition apper hide-on-leave>
				<ChildMenu :item="childitem" v-show="btnState[i].active"></ChildMenu>
			</v-scroll-x-transition>
		</div>
	</v-card>
</template>

<script>
import ChildMenu from "./ChildMenu";
export default {
	props: {
		baseMenu: Array,
	},
	data() {
		return {
			btnState: [
				{ active: true },
				{ active: true },
				{ active: true },
				{ active: true },
			],
			baseItem: this.baseMenu,
		};
	},
	methods: {
		btnActive(i) {
			let activeChice = false;
			if (this.btnState[i].active) {
				activeChice = true;
			}
			for (let n = 0; n < this.btnState.length; n++) {
				this.btnState[n].active = false;
			}
			if (!activeChice) {
				this.btnState[i].active = true;
			}
		},
		test() {
			this.baseItem[0].msg =
				"dataの変更がpropsに反映されるそしてStoreまで変更される…";
			// storeの情報を親コンポーネントがgetterで取得し、各子コンポーネントに必要な情報を
			// propsで渡す形をとっているが、子コンポーネントにおいてpropsで取得した親のstore情報を
			// dataに渡し変更を加えた際、同時にprops、storeのデータも更新されてしまい単方向データフローの
			// 仕組みが崩れてしまった。Vueでは基本的に双方向に同期を図る仕組みとなっているため、誤った設計をするとエラー警告なしにこういう事がおきるのか…
			// Vuexのgetterやprops、dataのやり取りは基本的に参照渡し…？

			// またその際、DOMにv-bindした属性:outlinedの値が変更されるも、DOM更新が起きない。
			// 上記の誤ったstore更新ではデータの更新が行われない可能性がある。
			// その他DOM更新が行われない場合については公式リファレンスに記載あり
		},
	},
	beforeMount() {
		for (let i = 0; i < this.baseItem.length; i++) {
			if (i === 0) {
				this.$set(this.btnState[i], "active", true);
				// 新しい要素を配列かオブジェクトに設定する際は$setを使用しないとデータ更新時にVueインスタンスがUpdateされない
				// this.btnState[i].active = true;
			} else {
				this.$set(this.btnState[i], "active", false);
				// this.btnState[i].active = false;
			}
		}
	},
	components: {
		ChildMenu,
	},
};
</script>
