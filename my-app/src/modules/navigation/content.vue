<template>
  <div>
    <v-card>
      <v-layout app row wrap>
        <v-flex md8>
          <div class="pt-4">
            <ul v-for="link in links" :key="link.text" @click="$router.push({path: link.route})">
              <li class="abc">
                <v-icon style="font-size:90px;">{{link.icon}}</v-icon>
                <br>
                <span style=" font-size:20px;">{{link.text}}</span>
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex md4 class="pt-4 mb-2">
          <div class="content-right"></div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
       links: [
        { icon: "home", text: "Home", route: "/home" },
        { icon: "dashboard", text: "Giảng đường", route: "/giangduong" },
        { icon: "room", text: "Phòng học", route: "/phonghoc" },
        {
          icon: "library_books",
          text: "Thiết Bị",
          route: "/thietbi"
        },
        { icon: "volume_up", text: "Báo Hỏng", route: "/baohong" },
        { icon: "move_to_inbox", text: "Góp ý", route: "/nhanvien" },
        { icon: "person", text: "Nhân Viên", route: "/nhanvien" },
        { icon: "help", text: "Hỗ Trợ", route: "/hotro" }
      ]
    }
  },
};
</script>

<style>
#giangduong {
  background: #fff;
}
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