<!--
 * @Author: Wanko
 * @Date: 2022-07-11 15:33:45
 * @LastEditors: Wanko
 * @LastEditTime: 2022-12-01 19:25:52
 * @Description: 
-->
<template>
  <div class="">
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
        <span class="ml-5 text-cyan"
          >指定某一个角圆角 rounded-{tl|tr}-{size}</span
        >
      </div>
      <div class="flex-wrap m justify-evenly">
        <div class="bg-cyan-light rounded-tl-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-tr-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-bl-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-br-12 p">rounded-12</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">指定某一个边rounded-{t|r|b|l}-{size}</span>
      </div>
      <div class="grid-2 gap-4">
        <div class="bg-cyan-light rounded-t-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-r-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-b-12 p">rounded-12</div>
        <div class="bg-cyan-light rounded-l-12 p">rounded-12</div>
      </div>

      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">指定某一个边半圆-{t|r|b|l}-full</span>
      </div>
      <div class="grid-2 gap-4">
        <div class="bg-cyan-light rounded-t-full p">rounded-t-full</div>
        <div class="bg-cyan-light rounded-r-full p">rounded-r-full</div>
        <div class="bg-cyan-light rounded-b-full p">rounded-b-full</div>
        <div class="bg-cyan-light rounded-l-full p">rounded-l-full</div>
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
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-cyan"></span>
        <span class="ml-5 text-cyan">分割线</span>
      </div>
      <div class="grid-4 divide-x">
        <div class="w-20">1</div>
        <div class="w-20">2</div>
        <div class="w-20">3</div>
        <div class="w-20">4</div>
      </div>
    </div>
    <div class="h-50"></div>
    <div class="fixed bottom-0 left-0 right-0 h-50 bg-white border-t">
      button
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
