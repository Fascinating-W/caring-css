<template>
  <div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">背景图像位置</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded p">bg-center</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">背景图像重复</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded p">bg-no-repeat</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">背景图像大小</span>
      </div>
      <div class="flex-wrap m justify-between">
        <div class="bg-cyan-light rounded p">bg-auto</div>
        <div class="bg-cyan-light rounded p">bg-cover</div>
        <div class="bg-cyan-light rounded p">bg-contain</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>