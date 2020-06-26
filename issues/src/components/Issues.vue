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
      :show-group-by=true
      :dense = true
      loading=true 
      loading-text="Loading... Please wait">
      <template v-slot:item.score="{ item }">
      <v-chip :color="getColor(item.score)" dark>{{ item.score }}</v-chip>
    </template>
    </v-data-table>
    </v-card>
 </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {Issues as ModelIssues ,Issue as ModelIssue} from '@/model/Issues.ts'
import VulcanSrv from '@/services/svulcan.ts'

const svulcanSrv = new VulcanSrv();


@Component({
    name: 'Issues'
})
export default class Issues extends Vue {
    headers: any = [{
        text:'Summary',
        align:'start',
        sortable: true,
        value:'summary',
    },
    {
        text:'Target',
        sortable:true,
        value:'target'
    },
    {
        text:'Score',
        sortable:true,
        value:'score'
    }]
    
   
    
    search : string = ""
    currentIssues: ModelIssue[] = []
    getColor(score: number):string {
     if (score <= 0.0) {
		    return "white"
     }

	  if (score <= 3.9) {
		 return "blue"
    }
	if (score <= 6.9) {
		return "yellow"
  }

	if (score <= 8.9) {
		return "red"
  }
	
	return "purple"
	}
    // @Prop({required: true, default:[{summary:"a summary", target:"target2"}, {summary:"another summary", target:"target2"}] }) readonly currentIssues!: ModelIssues
    async mounted() {
        try {
         // TODO: pass tags
         const ret = await svulcanSrv.issues([]);
         this.currentIssues = ret;
        } catch(e) {
            console.log(e)
        }
    }
}
</script>
