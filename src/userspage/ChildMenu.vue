<template>
	<v-list>
		<v-list-group
			v-for="child in childMenu.items"
			:key="child.subTitle"
			v-model="child.active"
			no-action
		>
			<template v-slot:activator>
				<v-list-item-content>
					<v-list-item-title v-text="child.subTitle"></v-list-item-title>
				</v-list-item-content>
			</template>

			<v-list-item v-for="grandChild in child.menu" :key="grandChild.event">
				<v-list-item-content>
					<v-list-item-title v-text="grandChild.event"></v-list-item-title>
					<v-list-item-subtitle
						v-text="grandChild.strength"
					></v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list-group>
	</v-list>
	<!-- <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4"> Trip name </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Enter a name for the trip </span>
                <span v-else key="1">
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p>Hello</p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels> -->
</template>

<script>
export default {
	props: {
		item: Object,
	},
	data() {
		return {
			childMenu: this.item,
		};
	},
	beforeMount() {
		this.childMenu = this.item;
	},
};
</script>

<style></style>
