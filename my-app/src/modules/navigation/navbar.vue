<template>
  <div id="toolbar">
    <v-card>
      <div class="background align-center py-4">
        <h1 style="text-align:center;color:white">TRƯỜNG ĐẠI HỌC NHA TRANG</h1>
        <h3 style="text-align:center;color:white">Hệ Thống Quản Lý Trang Thiết Bị Giảng Đường</h3>
      </div>
      <v-bottom-nav
        :active.sync="bottomNav"
        :color="color"
        :value="true"
        absolute
        dark
        shift
        style="position:relative;"
        class="mt-3"
      >
        <v-btn dark>
          <span>Video</span>
          <v-icon>ondemand_video</v-icon>
        </v-btn>

        <v-btn dark>
          <span>Music</span>
          <v-icon>music_note</v-icon>
        </v-btn>

        <v-btn dark>
          <span>Book</span>
          <v-icon>book</v-icon>
        </v-btn>

        <v-btn dark>
          <span>Image</span>
          <v-icon>image</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 1,
    };
  },

  computed: {
    color() {
      let a = "";
      switch (this.bottomNav) {
        case 0:
          a = "light-blue";
          break;
        case 1:
          a = "grey lighten-1";
          break;
        case 2:
          a = "brown";
          break;
        case 3:
          a = "indigo";
          break;
      }
      return a;
    }
  }
};
</script>
<style>
.abc {
  width: 160px;
  height: 160px;
  padding: 10px;
  list-style: none;
  border: 2px solid #000;
  border-radius: 5%;
  text-align: center;
  color: red;
  float: left;
  margin-left: 15px;
  margin-bottom: 10px;
}
.abc:hover {
  color: #616161;
  border: 2px solid #616161;
  translate: all 3s;
}
.content-right {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://photo-2-baomoi.zadn.vn/w1000_r1/2018_10_21_329_28247368/3be01d4cb20d5b53021c.jpg");
}
</style>