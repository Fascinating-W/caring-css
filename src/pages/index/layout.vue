<template>
  <div class="">
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-purple"></span>
        <span class="ml-5 text-purple">Box sizing</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-purple-light rounded p">box-border</div>
        <div class="bg-purple-light rounded p">box-content</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-purple"></span>
        <span class="ml-5 text-purple">Display</span>
      </div>
      <div class="grid-2 m gap-15">
        <div class="bg-purple-light rounded p flex-cc">block</div>
        <div class="bg-purple-light rounded p flex-cc">inline-block</div>
        <div class="bg-purple-light rounded p flex-cc">inline</div>
        <div class="bg-purple-light rounded p flex-cc">inline-flex</div>
        <div class="bg-purple-light rounded p flex-cc">block</div>
        <div class="bg-purple-light rounded p flex-cc">grid</div>
        <div class="bg-purple-light rounded p flex-cc">none,hidden</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-purple"></span>
        <span class="ml-5 text-purple">浮动</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-purple-light rounded p">float-right</div>
        <div class="bg-purple-light rounded p">float-left</div>
        <div class="bg-purple-light rounded p">float-none</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-purple"></span>
        <span class="ml-5 text-purple">清除浮动</span>
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-purple-light rounded p">clear-both</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-purple"></span>
        <span class="ml-5 text-purple">溢出</span>
      </div>
      <div class="grid-2 m gap-15">
        <div class="bg-purple-light rounded p flex-cc">overflow-auto</div>
        <div class="bg-purple-light rounded p flex-cc">overflow-hidden</div>
        <div class="bg-purple-light rounded p flex-cc">overflow-visible</div>
        <div class="bg-purple-light rounded p flex-cc">overflow-scroll</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-purple"></span>
        <span class="ml-5 text-purple">定位</span>
      </div>
      <div class="grid-2 m gap-15">
        <div class="bg-purple-light rounded p flex-cc">relative</div>
        <div class="bg-purple-light rounded p flex-cc">absolute</div>
        <div class="bg-purple-light rounded p flex-cc">fixed</div>
        <div class="bg-purple-light rounded p flex-cc">sticky</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
