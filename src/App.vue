<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  <man-tab-bar></man-tab-bar>
  </div>
</template>

<script>
import manTabBar from "components/content/MainTabBar/manTabBar";

export default {
  name: 'App',
  components: {
    manTabBar
  }
}
</script>

<style>

@import "assets/css/base.css";
</style>
