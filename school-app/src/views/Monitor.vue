<template>
  <div class="monitor">
    <s-header :name="'监控'" :noback="true"></s-header>
    <nav-bar />
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader"
import navBar from '@/components/NavBar'

export default {
  name: "monitor",
  components: {
    sHeader,
    navBar
  }
};
</script>
