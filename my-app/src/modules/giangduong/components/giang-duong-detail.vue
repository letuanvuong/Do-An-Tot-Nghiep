<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md8 class="mt-3 mx-2">
      <v-toolbar color="#75b5d2" height="40px">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>Thông tin giảng đường</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- <v-data-table :headers="headers" hide-actions :items="giangduong" class="elevation-1">
        <template v-slot:headerCell="props">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">{{ props.header.text }}</span>
            </template>
            <span>{{ props.header.text }}</span>
          </v-tooltip>
        </template>
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.ten }}</td>
          <td class="text-xs-center">{{ props.item.calories }}</td>
          <td class="text-xs-center">{{ props.item.soTang }}</td>
          <td class="text-xs-center">{{ props.item.carbs }}</td>
        </template>
      </v-data-table>-->

      <template v-if="Array.isArray(formData) && formData.length">
        <v-layout flat row wrap>
          <v-flex xs12 sm4 md3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Tên giảng đường</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData[0].ten}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 lg-3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Quản lý</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData[0].ten}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 lg-3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Số tầng</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData[0].soTang}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 lg-3>
            <v-card flat class="text-xs-center">
              <v-card-text>
                <p>Số phòng</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{formData[0].ten}}</span>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-flex>
    <template v-if="Array.isArray(formData) && formData.length">

      <v-flex class="mt-3 mr-2">
         <v-toolbar class="text-xs-center" color="#75b5d2" height="40px">

        <v-toolbar-title>Hình Ảnh</v-toolbar-title>
      </v-toolbar>
        <img
          width="260px;"
          height="150px;"
          :src="`//localhost:9002/api/v1/image/`+ formData[0].hinhAnhs"
          alt
        >
      </v-flex>
    </template>
  </v-layout>
</template>
<script src="./giang-duong-detail.js"></script>
