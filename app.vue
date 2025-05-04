<template>
  <div class="app-layout">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<style>
@import "/node_modules/@provetcloud/tokens/lib/tokens.custom-properties.css";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-layout {
  background-color: var(--n-color-accent);
  height: 100vh;
}
</style>
