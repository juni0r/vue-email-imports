<template>
  <div>
    <ClientOnly>
      <iframe src="/api/email" class="fullscreen" />
    </ClientOnly>
  </div>
</template>

<style>
.fullscreen {
  position: fixed;
  inset: 0px;
  width: 100vw;
  height: 100vh;
}
</style>
