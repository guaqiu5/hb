<template>
  <div class="wrapper" ref="xhb">
    <div class="header"><img src="../assets/head.webp" :width="375" /></div>
    <div>
      <vue-typed-js
        :strings="hello1"
        @onComplete="hello2Show = true"
        :showCursor="false"
      >
        <h1 class="typing red"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="hello2Show"
        :strings="hello2"
        @onComplete="hello3Show = true"
        :showCursor="false"
      >
        <h1 class="typing black"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="hello3Show"
        :strings="hello3"
        @onComplete="hello4Show = true"
        :showCursor="false"
      >
        <h1 class="typing black"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="hello4Show"
        :strings="hello4"
        @onComplete="funShow = true"
        :showCursor="false"
      >
        <h1 class="typing red"></h1>
      </vue-typed-js>
      <div v-if="funShow" class="dummy1"></div>
      <vue-typed-js
        v-if="funShow"
        :strings="fun"
        @onComplete="intShow = true"
        :showCursor="false"
      >
        <h1 class="typing black"></h1>
      </vue-typed-js>
    </div>
    <div v-if="funShow" class="dummy2"></div>
    <div v-if="intShow">
      <div class="int">
        <img src="../assets/inte.png" width="375" />
      </div>
      <vue-typed-js
        v-if="funShow"
        :strings="fun1"
        @onComplete="fun2show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="fun2show"
        :strings="fun2"
        @onComplete="fun3show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="fun3show"
        :strings="fun3"
        @onComplete="fun4show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="fun4show"
        :strings="fun4"
        @onComplete="fun5show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="fun5show"
        :strings="fun5"
        @onComplete="fun6show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="fun6show"
        :strings="fun6"
        @onComplete="fun7show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="fun7show"
        :strings="fun7"
        @onComplete="intComp"
        :showCursor="false"
      >
        <h1 class="typing black border m-20"></h1>
      </vue-typed-js>
      <NoteItem
        v-if="note1"
        :coverImg="corver1"
        title="关于一些8s抢到票的小心得"
        username="街头女战士"
        :avatar="a1"
      />
      <NoteItem
        v-if="note1"
        :coverImg="corver2"
        title="张万森家门口开满了炮仗花🌸"
        username="大杯奶茶"
        :avatar="a2"
      />
    </div>

    <div>
      <div class="int" v-if="tcshow">
        <img src="../assets/tongcheng.png" :width="375" />
      </div>
      <vue-typed-js
        v-if="tcshow"
        :strings="tc1"
        @onComplete="tc2show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="tc2show"
        :strings="tc2"
        @onComplete="tc3show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="tc3show"
        :strings="tc3"
        @onComplete="tc4show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="tc4show"
        :strings="tc4"
        @onComplete="tc5show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="tc5show"
        :strings="tc5"
        @onComplete="tc6show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="tc6show"
        :strings="tc6"
        @onComplete="tcComp"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <NoteItem
        v-if="note2"
        :coverImg="tccorver1"
        title="来自厦门地铁的浪漫🌹"
        username="KouKei"
        :avatar="tca1"
      />
      <NoteItem
        v-if="note2"
        :coverImg="tccorver2"
        title="在厦门！！！舍不得分享的一家店！！！😭😭😭"
        username="布丁今天去了哪"
        :avatar="tca2"
      />
      <NoteItem
        v-if="note2"
        :coverImg="tccorver3"
        title="厦门万象城fresh展也太惊艳了吧"
        username="暄妍"
        :avatar="tca3"
      />
    </div>
    <div class="dummy1" v-if="note2"></div>
    <div class="food">
      <div class="int" v-if="foodshow">
        <img src="../assets/food.png" :width="375" />
      </div>
      <vue-typed-js
        v-if="foodshow"
        :strings="food1"
        @onComplete="food2show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="food2show"
        :strings="food2"
        @onComplete="food3show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="food3show"
        :strings="food3"
        @onComplete="food4show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="food4show"
        :strings="food4"
        @onComplete="food5show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="food5show"
        :strings="food5"
        @onComplete="food6show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="food6show"
        :strings="food6"
        @onComplete="food7show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="food7show"
        :strings="food7"
        @onComplete="foodComp"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <NoteItem
        v-if="note3"
        :coverImg="foodcorver1"
        title="厦门探店｜拥有六层楼的21gram coffee新店"
        username="巴昌"
        :avatar="fooda1"
      />
      <NoteItem
        v-if="note3"
        :coverImg="foodcover2"
        title="厦门超有意思的一家小店，集美学村必打卡！"
        username="蛋仔仔仔🐣"
        :avatar="fooda2"
      />
    </div>
    <div class="help">
      <div class="int" v-if="heshow">
        <img src="../assets/help.png" :width="375" />
      </div>
      <vue-typed-js
        v-if="heshow"
        :strings="he1"
        @onComplete="he2show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="he2show"
        :strings="he2"
        @onComplete="he3show = true"
        :showCursor="false"
      >
        <h1 class="typing red border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="he3show"
        :strings="he3"
        @onComplete="he4show = true"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <vue-typed-js
        v-if="he4show"
        :strings="he4"
        @onComplete="heComp"
        :showCursor="false"
      >
        <h1 class="typing black border m-5"></h1>
      </vue-typed-js>
      <NoteItem
        v-if="note4"
        :coverImg="hecorver1"
        title="求助，厦门不能错过的美食是？"
        username="Crystal好好运营"
        :avatar="hea1"
      />
      <NoteItem
        v-if="note4"
        :coverImg="hecorver2"
        title="求助厦门姐妹，这份三日游攻略会踩雷吗！"
        username="是噗噗呀"
        :avatar="hea2"
      />
    </div>
    <div class="int" v-if="endshow">
      <img src="../assets/end.webp" :width="375" />
    </div>
  </div>
</template>

<script>
import NoteItem from "../components/NoteItem.vue";
import corver1 from "../assets/note1cover.webp";
import a1 from "../assets/note1icon.jpg";
import a2 from "../assets/note2icon.jpg";
import corver2 from "../assets/note2cover.webp";

import tccorver1 from '../assets/tcnote1.webp'
import tca1 from '../assets/tcnote1icon.jpg'
import tccorver2 from '../assets/tcnote2.webp'
import tca2 from '../assets/tcnote2icon.jpg'
import tccorver3 from '../assets/tcnote3.webp'
import tca3 from '../assets/tcnote3icon.jpg'

import foodcorver1 from '../assets/foodnote1.webp'
import fooda1 from '../assets/foodnote1icon.jpg'
import foodcover2 from '../assets/foodnote2.webp'
import fooda2 from '../assets/foodnote2icon.jpg'

import hecorver1 from '../assets/henote1.webp'
import hea1 from '../assets/henote1icon.jpg'
import hecorver2 from '../assets/henote2.webp'
import hea2 from '../assets/henote2icon.jpg'

export default {
  components: {
    NoteItem,
  },
  data() {
    return {
      corver1,
      corver2,
      a1,
      a2,
      tccorver1,
      tca1,
      tccorver2,
      tca2,
      tccorver3,
      tca3,
      foodcorver1,
      fooda1,
      foodcover2,
      fooda2,
      hecorver1,
      hea1,
      hecorver2,
      hea2,
      
      hello1: ["早哦，薯薯"],
      hello2: ["厦门今天的温度为18摄氏度"],
      hello2Show: false,
      hello3: ["空气质量中优秀,湿度适中"],
      hello3Show: false,
      hello4: ["是个适合出门的好天气"],
      hello4Show: false,
      intShow: false,
      fun: [
        "关于小红书社区里昨天发生的趣事，已根据你的阅读喜好进行了整理推荐 你可以花十分钟的时间在路上查阅～",
      ],
      funShow: false,
      fun1: [" 薯薯，听我说"],
      fun2: ["张万森家门口开满了美丽的炮仗花"],
      fun2show: false,
      fun3: ["地址在厦门市思明区华新路33号"],
      fun3show: false,
      fun4: ["另外，陆虎巡演要来啦"],
      fun4show: false,
      fun5: ["如果你想在大麦网抢到演唱会或其他活动的票"],
      fun5show: false,
      fun6: ["一定要先填好信息,提前设置好关演人"],
      fun6show: false,
      fun7: ["到点准时猛戳右下角！祝你抢票成功"],
      fun7show: false,
      note1: false,
      note2: false,
      note3: false,
      note4: false,
      tcshow: false,
      tc1: ["咳咳～ 下面推荐三个好地方"],
      tc2: ["厦门的妇女节乘车仪式感十足"],
      tc2show: false,
      tc3: ["新华路上的麦浪书店藏书丰富,环境舒适"],
      tc3show: false,
      tc4: ["老板人超好"],
      tc4show: false,
      tc5: ["可以带走闲置的书籍哦！"],
      tc5show: false,
      tc6: ["万象城有惊喜,小朋友也惊叹不已,必打卡"],
      tc6show: false,
      foodshow: false,
      food1: ["薯薯听我说"],
      food2: ["又挖到两家宝藏店铺"],
      food2show: false,
      food3: ["21gramcoffee新店环境好,自习方便"],
      food3show: false,
      food4: ["另外一家集美区必大家"],
      food4show: false,
      food5: ["复古装修很有味道 提拉米苏口味丰富"],
      food5show: false,
      food6: ["但一整块有点腻 建议几个小姐妹一起尝"],
      food6show: false,
      food7: ["店名在最后一张图"],
      food7show: false,
      heshow: false,
      he1: ["最后,这两位姐妹向你求助！"],
      he2: ["第一篇:求推荐厦门好玩景点"],
      he2show: false,
      he3: ["第二篇: 必吃美食排行榜"],
      he3show: false,
      he4: ["推荐你心中的Top3,快来看看!"],
      he4show: false,
      endshow: false,
      rec: ["关于"],
      endInterval: undefined,
    };
  },
  methods: {
    complete1() {
      console.log("结束");
    },
    autoScroll() {
      // 获取文档高度
      setInterval(() => {});
    },
    intComp() {
      this.note1 = true;
      setTimeout(() => (this.tcshow = true), 1000);
    },
    tcComp() {
      this.note2 = true;
      setTimeout(() => (this.foodshow = true), 1000);
    },
    foodComp() {
      this.note3 = true;
      setTimeout(() => (this.heshow = true), 1000);
    },
    heComp() {
      this.note4 = true;
      setTimeout(() => {
        this.endshow = true;
      }, 1000);
      setTimeout(() => clearInterval(this.endInterval), 2500)
    },
  },
  mounted() {
    let offset = 0;
    this.endInterval = setInterval(() => {
      offset += 600;
      this.$refs.xhb.scrollTo(0, offset);
    }, 800);
  },
};
</script>

<style scoped>
@font-face {
  font-family: "fontZh";
  src: url("../assets/zh.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "fontEg";
  src: url("../assets/eg.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: black;
  color: white;
}
.header {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 579.77px;
}
.title {
  font-family: "fontZh";
  font-size: 20px;
  color: white;
}
.title1 {
  font-family: "fontEg";
  font-size: 20px;
  color: white;
}
.red {
  font-size: 17px;
  font-family: "fontZh";
  padding: 1px 4px 1px 4px;
  background: red;
  color: white;
  height: 25px;
}

.black {
  font-size: 17px;
  font-family: "fontZh";
  padding: 1px 4px 1px 4px;
  background: black;
  color: white;
  height: 25px;
}

.border {
  border: 1px solid white;
}

.dummy1 {
  height: 120px;
}
.dummy2 {
  height: 80px;
}

.m-5 {
  margin-left: 20px;
}

.m-20 {
  margin-left: 40px;
}
.int {
  width: 100%;
}
</style>
