<template>
  <div id="saveGiangDuong">
    <v-container>
      <v-layout>
        <v-flex>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on }">
              <v-btn color="#29B6F6" class="mt-1" v-on="on">
                <v-icon>add</v-icon>ADD NEW GIANG DUONG
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="name" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-combobox v-model="floor" :items="items" label="Số tầng"></v-combobox>
                    </v-flex>
                    <v-flex xs12 sm6 md2 class="px-2 mt-2">
                      <!-- <input type="file"> -->
                      <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                      <input
                        type="file"
                        hidden
                        style="display:none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked"
                      >
                    </v-flex>
                    <v-flex xs12 sm6 md2>
                      <img :src="imageUrl" height="150">
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="./saveGiangDuong.js"></script>
