<template>
  <!-- <view class="bg-f8 page">
    <view class="bg-red-light rounded-full p m shadow text-eee text-price align-top">AAAA</view>
    <view class="bg-white rounded p m text-ABC">aaaa</view>
    <view class="bg-white rounded p m text-Abc">aaaa</view>
    <view class="bg-white rounded p m">文本溢出隐藏文本溢出隐藏文本溢出隐藏文本溢出隐藏</view>
		<view class="bg-white rounded p m ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiusdfsdfmexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.</view>
    <view class="text-base text-purple">flex</view>
    <view class="bg-purple-light p space-y-20 ">
      <view class="w-40 h-40 bg-red"> 1 </view>
      <view class="w-40 h-40 bg-yellow"> 2 </view>
      <view class="w-40 h-40 bg-blue"> 3 </view>
      
    </view>

    <view class="bg-purple-light grid grid-cols-3 justify-items-center p mt">
      <view class="w-40 h-40 bg-red"> 1 </view>
      <view class="w-40 h-40 bg-yellow"> 2 </view>
      <view class="w-40 h-40 bg-blue"> 3 </view>
      <view class="w-40 h-40 bg-green"> 4 </view>
      <view class="w-40 h-40 bg-cyan"> 5 </view>
      <view class="w-40 h-40 bg-purple"> 6 </view>
    </view>

    <view class="bg-purple-light mt p grid grid-cols-3 gap-5">
      <view class="bg-red p-5"> 1 </view>
      <view class="bg-yellow p-5"> 2 </view>
      <view class="bg-blue p-5"> 3 </view>
      <view class="bg-green p-5"> 4 </view>
      <view class="bg-cyan p-5"> 5 </view>
      <view class="bg-purple p-5"> 6 </view>
    </view>

    <view
      class="grid grid-cols-3 bg-purple-light mt h-100 items-center"
    >
      <view class="w-1-4 bg-red h-30 self-start"> 1 </view>
      <view class="w-1-4 bg-yellow h-30"> 2 </view>
      <view class="w-1-4 bg-blue h-30"> 3 </view>
      <view class="w-1-4 bg-pink h-30"> 4</view>
    </view>

    <view class="flex-wrap bg-purple mt h-100 content-between">
      <view class="w-1-3 bg-red h-30"> 1 </view>
      <view class="w-1-3 bg-yellow h-30"> 2 </view>
      <view class="w-1-3 bg-blue h-30"> 3 </view>
      <view class="w-1-3 bg-pink h-30"> 4</view>
    </view>

    <view class="p bg-pink-light">
      <view class="grid grid-cols-3 gap-10">
        <view class="h-40 bg-pink col-span-full">1</view>
        <view class="h-40 bg-pink">2</view>
        <view class="h-40 bg-pink">3</view>
        <view class="h-40 bg-pink col-span-2">4</view>
        <view class="h-40 bg-pink">5</view>
        <view class="h-40 bg-pink">6</view>
        <view class="h-40 bg-pink">7</view>
        <view class="h-40 bg-pink">8</view>
        <view class="h-40 bg-pink">9</view>
      </view>
    </view>

    <view class="mt p bg-pink-light">
      <view class="grid grid-cols-6 gap-5">
        <view class="h-40 bg-pink">1</view>
        <view class="h-40 bg-pink">2</view>
        <view class="h-40 bg-pink">3</view>
        <view class="h-40 bg-pink">4</view>
        <view class="h-40 bg-pink">5</view>
        <view class="h-40 bg-pink">6</view>
        <view class="h-40 bg-pink">7</view>
        <view class="h-40 bg-pink">8</view>
        <view class="h-40 bg-pink">9</view>
        <view class="h-40 bg-pink">10</view>
        <view class="h-40 bg-pink">11</view>
        <view class="h-40 bg-pink">12</view>
      </view>
    </view>

    <view class="mt p bg-pink light">
      <view class="grid grid-cols-4 gap-5">
        <view class="h-40 bg-pink">1</view>
        <view class="h-40 bg-pink">2</view>
        <view class="h-40 bg-pink">3</view>
        <view class="h-40 bg-pink">4</view>
        <view class="h-40 bg-pink">5</view>
        <view class="h-40 bg-pink">6</view>
        <view class="h-40 bg-pink">7</view>
        <view class="h-40 bg-pink">8</view>
      </view>
    </view>
  </view> -->
  <view class="bg-f8 page">
    <div class="shadow rounded h-100 bg-white m p">
      <div class="test-18 font-bold flex-center">
        <span class="inline-block w-4 h-20 rounded bg-green"></span>
        <span class="ml-5">字体</span>
      </div>
      <div></div>


    </div>
    <div class="shadow rounded h-100 bg-white m p">
      <div class="w-50 h-50 rounded-full bg-yellow-light flex-cc">
        1
      </div>
    </div>
    <div class="shadow rounded h-100 bg-white m grid-3 gap-5">
      <div class="bg-red-light flex-cc">1</div>
      <div class="bg-red-light flex-cc">2</div>
      <div class="bg-red-light flex-cc">3</div>
      <div class="bg-red-light flex-cc">4</div>
      <div class="bg-red-light flex-cc">5</div>
      <div class="bg-red-light flex-cc">6</div>
      <div class="bg-red-light flex-cc">7</div>
      <div class="bg-red-light flex-cc">8</div>
      <div class="bg-red-light flex-cc">9</div>
    </div>
    <div class="shadow rounded h-100 bg-white m">
      
    </div>
    <div class="shadow rounded h-100 bg-white m"></div>
    <div class="shadow rounded h-100 bg-white m"></div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style></style>
