<template>
  
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <Issues/>
  
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import Issues from '@/components/Issues.vue'

@Component({
    name: 'Home',
    components : {
      Issues
    }
})
export default class Home extends Vue {
}
</script>
