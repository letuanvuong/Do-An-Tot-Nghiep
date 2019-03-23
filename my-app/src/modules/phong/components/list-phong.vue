<template>
  <div id="phong">
    <v-layout class="mt-2 mx-2">
      <v-flex>
        <v-toolbar color="#75b5d2" height="40px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Danh mục phòng học</v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
            <v-btn small>
              <v-icon small>add</v-icon>
            </v-btn>
            <v-btn small>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn small>
              <v-icon>delete</v-icon>
            </v-btn>
          </div>
        </v-toolbar>
        <v-card-title>Tìm phòng
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          hide-actions
          :pagination.sync="pagination"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src = "./list-phong.js"/>