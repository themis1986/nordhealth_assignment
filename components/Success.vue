<template>
  <ClientOnly>
    <provet-card class="card">
      <div class="icon-container">
        <provet-icon
          name="interface-checked-circle"
          size="xxl"
          color="var(--n-color-text-success)
"
        ></provet-icon>
        <p>Succesfully registered to our product!</p>
      </div>
      <provet-button
        slot="footer"
        type="button"
        expand
        variant="default"
        @click="navigateTo('/sign-up')"
        >Logout</provet-button
      >
    </provet-card>
  </ClientOnly>
</template>

<style scoped>
.icon-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
