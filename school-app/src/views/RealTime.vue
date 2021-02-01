<template>
  <div class="realTime">
    <s-header :name="'实时'" :noback="true"></s-header>
    <nav-bar />
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader"
import navBar from '@/components/NavBar'

export default {
  name: "RealTime",
  components: {
    sHeader,
    navBar
  }
};
</script>
