
import detailgiangduong from "./giang-duong-detail.vue"
import listPhong from "../../phong/components/list-phong.vue"
export default {
  components:{
    detailgiangduong,
    listPhong
  },
  name:'list-giang-duong',
  filter: {},
  computed: {
    giangduongs(){
      return this.$store.state.GiangDuong.giangduongs
    }
  },
  watch: {
    
  },
  data () {
    return {
      selectedFile: null,
      giangduong: null
    }
  },
  methods: {
    goDetail(id){
      this.giangduong = this.giangduongs.filter(item => item._id == id)    
    }
  },
  created() {
    this.$store.dispatch('GiangDuong/getDsGiangDuong')
  },
}