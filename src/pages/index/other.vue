<template>
  <div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-olive"></span>
        <span class="ml-5 text-olive">阴影</span>
      </div>
      <div class="m">
        <div class="bg-olive-light rounded p shadow">shadow</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-olive"></span>
        <span class="ml-5 text-olive">点击效果</span>
      </div>
      <div class="m">
        <div class="bg-olive-light rounded p hover" @click="handleClick">hover</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-olive"></span>
        <span class="ml-5 text-olive">光标效果</span>
      </div>
      <div class="m grid-2 gap-5">
        <div class="bg-olive-light rounded p cursor-pointer">cursor-pointer</div>
        <div class="bg-olive-light rounded p cursor-wait">cursor-wait</div>
        <div class="bg-olive-light rounded p cursor-move">cursor-move</div>
        <div class="bg-olive-light rounded p cursor-not-allowed">cursor-not-allowed</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-olive"></span>
        <span class="ml-5 text-olive">大小调整</span>
      </div>
      <div class="m grid-2 gap-5">
        <div class="bg-olive-light rounded p resize-none">resize-none</div>
        <div class="bg-olive-light rounded p resize-y">resize-y</div>
        <div class="bg-olive-light rounded p resize-xe">resize-x</div>
        <div class="bg-olive-light rounded p resize">resize</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-olive"></span>
        <span class="ml-5 text-olive">用户选择</span>
      </div>
      <div class="m grid-2 gap-5">
        <div class="bg-olive-light rounded p select-none">select-none</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>