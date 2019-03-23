<template>
  <div id="giangduong">
    <v-layout app row wrap>
      <v-flex xs12 sm6 md3 mt-3>
        <v-card>
          <v-toolbar  color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Giảng đường</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list class="list">
            <v-list-group
              v-for="gd in giangduongs"
              :key="gd.ten"
              :prepend-icon="gd.action"
              inset
              @click="goDetail(gd._id)"
            >
            
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title class="text-xs-center">{{ gd.ten }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list-group>
          </v-list>
        </v-card>
        <v-card class="mt-1 mb-1">
           <v-toolbar  color="#75b5d2" height="40px">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Tác vụ chính</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
            <div class="mt-2 text-xs-center">
          <v-btn>
            <v-icon>add</v-icon> Giảng Đường
          </v-btn>
          <v-btn>
            <v-icon>edit</v-icon>Giảng Đường
          </v-btn>
          <v-btn>
            <v-icon>delete</v-icon>Giảng Đường
          </v-btn>
        </div>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md9>
        <detailgiangduong :giangduong="giangduong || {}"> </detailgiangduong>       
        <listPhong/>
      </v-flex>
    
    </v-layout>
  </div>
</template>
<script src="./list-giang-duong.js"></script>

