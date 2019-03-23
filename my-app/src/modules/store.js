import Vue from 'vue'
import Vuex from 'vuex'
import GiangDuong from './giangduong/store/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:  {
        GiangDuong: GiangDuong
    }
})