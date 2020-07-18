<template>
  <!--<img alt="Vue logo" src="../assets/logo.png">-->
  <Findings />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Findings from "../components/Findings.vue";

@Component({
  name: "Home",
  components: {
    Findings
  }
})
export default class Home extends Vue {}
</script>
