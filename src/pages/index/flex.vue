<template>
  <view>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">垂直对齐</span>
      </div>
      <div class="bg-red-light rounded p m h-50 flex-center">
        <div class="bg-red rounded p-5">flex-center</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">垂直居中对齐</span>
      </div>
      <div class="bg-red-light rounded p m h-50 flex-cc">
        <div class="bg-red rounded p-5">flex-cc</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">flex</span>
      </div>
      <div class="bg-red-light rounded p m flex">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">justify-end</span>
      </div>
      <div class="bg-red-light rounded p m flex justify-end">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">justify-around</span>
      </div>
      <div class="bg-red-light rounded p m flex justify-around">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">justify-evenly</span>
      </div>
      <div class="bg-red-light rounded p m flex justify-evenly">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">justify-between</span>
      </div>
      <div class="bg-red-light rounded p m flex justify-between">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">items-start</span>
      </div>
      <div class="bg-red-light rounded p m flex items-start h-80">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">items-center</span>
      </div>
      <div class="bg-red-light rounded p m flex items-center h-80">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">items-end</span>
      </div>
      <div class="bg-red-light rounded p m flex items-end h-80">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">self-center</span>
      </div>
      <div class="bg-red-light rounded p m flex items-start h-80">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-90 h-40 flex-cc ml-5 self-center">self-center</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">3</div>
      </div>
    </div>
    <div class="shadow rounded bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-red"></span>
        <span class="ml-5 text-red">self-end</span>
      </div>
      <div class="bg-red-light rounded p m flex items-start h-80">
        <div class="bg-red rounded w-40 h-40 flex-cc">1</div>
        <div class="bg-red rounded w-40 h-40 flex-cc ml-5">2</div>
        <div class="bg-red rounded w-80 h-40 flex-cc ml-5 self-end">self-end</div>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>