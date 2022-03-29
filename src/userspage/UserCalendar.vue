<template>
  <v-card-text>
    <v-row>
      <v-col>
        <v-sheet height="350">
          <v-calendar :now="today" :value="today" color="primary">
            <template v-slot:day="{ past, date }">
              <v-row class="fill-height">
                <template v-if="past && tracked[date]">
                  <v-sheet
                    v-for="(percent, i) in tracked[date]"
                    :key="i"
                    :title="category[i]"
                    :color="colors[i]"
                    :width="`${percent}%`"
                    height="20%"
                    rounded
                  ></v-sheet>
                </template>
              </v-row>
            </template>
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  data: () => ({
    today: "2019-01-10",
    tracked: {
      "2019-01-09": [80],
    },
    colors: ["#1867c0"],
    category: ["Development"],
  }),
};
</script>
