<template>
  <div class="issues">
    <v-card>
      <v-card-title>
        Issues
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="currentIssues"
        :search="search"
        :show-group-by="true"
        :dense="true"
        loading="true"
        loading-text="Loading... Please wait"
      >
        <template v-slot:item.score="{ item }">
          <v-chip :color="getColor(item.score)" dark>{{ item.score }}</v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Issues as ModelIssues, Issue as ModelIssue } from "@/model/Issues.ts";
import VulcanSrv from "@/services/svulcan.ts";
import ConfigSrv from "@/shared/config.ts";

@Component({
  name: "Issues"
})
export default class Issues extends Vue {
  headers: any = [
    {
      text: "Summary",
      align: "start",
      sortable: true,
      value: "summary"
    },
    {
      text: "Target",
      sortable: true,
      value: "target"
    },
    {
      text: "Score",
      sortable: true,
      value: "score"
    }
  ];
  vulcanAPI?: VulcanSrv
  async mounted() {
    try {
      const config = await ConfigSrv.Config()
      console.log("config "+config)
      this.vulcanAPI  = new VulcanSrv(config.api_base_url);
      const ret = await this.vulcanAPI.issues([]);
      this.currentIssues = ret;
    } catch (e) {
      console.log(e);
    }
  }
  
  search: string = "";
  currentIssues: ModelIssue[] = [];
  getColor(score: number): string {
    if (score <= 0.0) {
      return "white";
    }

    if (score <= 3.9) {
      return "blue";
    }
    if (score <= 6.9) {
      return "yellow";
    }

    if (score <= 8.9) {
      return "red";
    }

    return "purple";
  }


}
</script>
