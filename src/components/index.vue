<style>
  #gesture {
    height: 100vh;
    widows: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  p{
    font-size: 6em;
    text-align: center;
    color: #431;
  }
</style>
<template>
    <div id="app">
        <div id="gesture" v-on:click="changeImage()">
            <div id = "name">
              <p font-size=30em>{{ name }}</p>
            </div>
            <div id = "image">
              <img :src="imageUrl" width=500px>
            </div>
        </div>
    </div>
</template>
<script>
const gestureInfo = [
  {
    gestureName: 'カニ',
    gestureImage: 'img/00.png'
  },
  {
    gestureName: 'ネズミ',
    gestureImage: 'img/01.png'
  },
  {
    gestureName: 'ジェットコースター',
    gestureImage: 'img/02.png'
  },
  {
    gestureName: '恐竜',
    gestureImage: 'img/03.png'
  },
  {
    gestureName: '魔法使い',
    gestureImage: 'img/04.png'
  },
  {
    gestureName: '自由の女神',
    gestureImage: 'img/05.png'
  },
  {
    gestureName: '野球',
    gestureImage: 'img/06.png'
  },
  {
    gestureName: 'サンタクロース',
    gestureImage: 'img/07.png'
  },
  {
    gestureName: '釣り',
    gestureImage: 'img/08.png'
  },
  {
    gestureName: 'おにぎり',
    gestureImage: 'img/09.png'
  },
  {
    gestureName: '節分',
    gestureImage: 'img/10.png'
  },
  {
    gestureName: 'スキー',
    gestureImage: 'img/11.png'
  },
  {
    gestureName: 'サッカー',
    gestureImage: 'img/12.png'
  },
  {
    gestureName: 'ボクシング',
    gestureImage: 'img/13.png'
  },
  {
    gestureName: 'スイミング',
    gestureImage: 'img/14.png'
  },
  {
    gestureName: 'トランプ',
    gestureImage: 'img/15.png'
  }
]
export default {
  data () {
    let selectGestureInfo = gestureInfo[0]
    let name = selectGestureInfo['gestureName']
    let image = selectGestureInfo['gestureImage']
    function changeImage () {
      let random = Math.round(Math.random() * 15)
      selectGestureInfo = gestureInfo[random]
      name = selectGestureInfo['gestureName']
      image = selectGestureInfo['gestureImage']
      console.log(image)
      this.name = name
      this.imageUrl = require(`../assets/${image}`)
    }
    console.log(image)
    return {
      changeImage,
      name,
      imageUrl: require(`../assets/${image}`)
    }
  }
}
</script>
