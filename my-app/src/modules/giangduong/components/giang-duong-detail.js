import _ from 'lodash'
export default {
  props: {
    giangduong: {}
  },
  components:{},
  filter:{},
  computed: {
    giangduongs(){
      return this.$store.state.GiangDuong.giangduongs
    }
  },
  watch: {
    giangduong () {
      this.formData = _.cloneDeep(this.giangduong)
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Tên giảng đường',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Người quản lý', align: 'center', value: 'calories' },
        { text: 'Số tầng', align: 'center', value: 'fat' },
        { text: 'Số phòng', align: 'center', value: 'fat' }
      ],
      formData: null
    }
  },
  methods: {
    
  },
  created() {
  },
  
}