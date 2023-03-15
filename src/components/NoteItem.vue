<template>
  <div class="note-wrapper">
    <div class="left">
      <img
        :src="coverImg"
        width="100px"
        height="130px"
        alt=""
      />
    </div>
    <div class="right">
      <div class="top-section">
        <div class="title">{{ title }}</div>
        <div class="addition-info">
          <span class="common-text">1084赞</span>
          <span class="common-text" :style="{ marginLeft: '8px' }"
            >133评论</span
          >
        </div>
      </div>
      <div class="bottom-section">
        <div class="user-info">
          <img :src="avatar" alt="头像" class="avatar" />
          <span class="username common-text">{{ username }}</span>
        </div>
        <div class="button-container">关注</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteItem",
  props:{
    coverImg:{
        type: String
    },
    title:{
        type: String
    },
    avatar:{
        type: String
    },
    username:{
        type: String
    }
  }
};
</script>

<style>
.note-wrapper {
  margin: 16px auto;
  width: 93.6%;
  height: 146px;
  display: flex;
  background: linear-gradient(90deg, #fff 1.45%, hsla(0, 0%, 100%, 0.8) 88.99%);
  border-radius: 8px;
}
.left {
  padding: 8px 0 8px 8px;
}
.right {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottom-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-container {
  width: 60px;
  height: 28px;
  border: 0.5px solid #ff2442;
  border-radius: 14px;
  color: #ff2442;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.common-text {
  font-family: PingFang SC;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #333;
}

.title {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #333;
}
.avatar {
  border-radius: 1000px;
  width: 24px;
  height: 24px;
  box-shadow: 0 0 1px hsla(0, 0%, 80%, 0.1);
  vertical-align: middle
}

.username {
  margin-left: 8px;
  /* word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden; */
}
</style>
