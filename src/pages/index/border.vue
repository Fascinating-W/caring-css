<template>
  <div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">默认边框圆角rounded</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded p">rounded:4px</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">指定边框圆角 rounded-{x}</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-24 p">rounded-24</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">药丸边框</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded-full p">rounded-full</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">圆：rounded-full指定宽高</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded-full p w-30 h-30 flex-cc">1</div>
        <div class="bg-cyan-light rounded-full p w-30 h-30 flex-cc">2</div>
        <div class="bg-cyan-light rounded-full p w-30 h-30 flex-cc">3</div>
        <div class="bg-cyan-light rounded-full p w-30 h-30 flex-cc">4</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">全边框</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="rounded p border">border</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">单独的边</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="rounded p border-l">border-l</div>
        <div class="rounded p border-t">border-t</div>
        <div class="rounded p border-r">border-r</div>
        <div class="rounded p border-b">border-b</div>
        <div class="rounded p border-tb">border-tb</div>
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