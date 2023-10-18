<template>
  <div>
    <div class="shadow rounded bg-white m p">
      <!-- <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">水平间距space-x-{size}</span>
      </div>
      <div class="m bg-yellow-light rounded p flex space-x-15">
        <div class="bg-yellow rounded p w-20">1</div>
        <div class="bg-yellow rounded p w-20">2</div>
        <div class="bg-yellow rounded p w-20">3</div>
        <div class="bg-yellow rounded p w-20">4</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">垂直间距space-y-{size}</span>
      </div>
      <div class="m bg-yellow-light rounded p space-y-15">
        <div class="bg-yellow rounded p w-20">1</div>
        <div class="bg-yellow rounded p w-20">2</div>
        <div class="bg-yellow rounded p w-20">3</div>
        <div class="bg-yellow rounded p w-20">4</div>
      </div> -->
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">居中对齐</span>
      </div>
      <div class="m bg-yellow-light rounded p">
        <div class="bg-yellow rounded p w-160 m-auto">m-auto</div>
      </div>

      <!-- <div class="m bg-yellow-light rounded p">
        <div class="bg-yellow rounded -my-15">111</div>
      </div> -->
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">右对齐</span>
      </div>
      <div class="m bg-yellow-light rounded p">
        <div class="bg-yellow rounded p w-100 m-right">m-right</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">默认内边距p</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded p">
        <div class="bg-yellow rounded p">默认内边距p:15px</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">指定内边距 p-{x}</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded p-25">
        <div class="bg-yellow rounded p">指定边距p-25</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">指定单侧边距 p{t|r|b|l}-{x}</span>
      </div>
      <div class="m bg-yellow-light rounded p flex">
        <div class="bg-yellow rounded p-5 pr-25">pr-25</div>
        <div class="bg-yellow rounded p-5 pl-25 ml">pr-25</div>
        <div class="bg-yellow rounded p-5 pt-25 ml">pt-25</div>
        <div class="bg-yellow rounded p-5 pm-25 ml">pm-25</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">水平边距 px-{x}</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded px-25">
        <div class="bg-yellow rounded p">水平方向25px边距</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">垂直边距 py-{x}</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded py-25">
        <div class="bg-yellow rounded p">垂直方向25px边距</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">默认外边距p</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded overflow-hidden">
        <div class="bg-yellow rounded p m">默认外边距m:15px</div>
        <div class="bg-yellow rounded p m">默认外边距m:15px</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">指定外边距 m-{x}</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded overflow-hidden">
        <div class="bg-yellow rounded p m-25">指定外边距m-25</div>
        <div class="bg-yellow rounded p m-25">指定外边距m-25</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">指定单侧外边距 m{t|r|b|l}-{x}</span>
      </div>
      <div class="m bg-yellow-light rounded p flex">
        <div class="bg-yellow rounded p-5 mr-25">mr-25</div>
        <div class="bg-yellow rounded p-5">base</div>
        <div class="bg-yellow rounded p-5 ml-25">ml-25</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">水平外边距 mx-{x}</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded">
        <div class="bg-yellow rounded p mx-25">水平方向25px外边距</div>
      </div>
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-yellow"></span>
        <span class="ml-5 text-yellow">垂直外边距 my-{x}</span>
      </div>
      <div class="m justify-evenly bg-yellow-light rounded overflow-hidden">
        <div class="bg-yellow rounded p my-25">垂直方向25px外边距</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
