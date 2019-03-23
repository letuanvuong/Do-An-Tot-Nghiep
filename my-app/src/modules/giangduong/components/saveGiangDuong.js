// import Axios from 'axios'
export default {
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Giang Duong' : 'Edit Item'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  data: () => ({
    dialog: false,
    selectedFile: null,
    editedIndex: -1,
    name: '',
    floor: '',
    image: null,
    imageUrl:'',
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }),
  methods: {
    save() {
      let payload = {name: this.name, floor: this.floor, image: this.image}
      this.$store.dispatch('GiangDuong/addGiangDuong', payload)
      this.close()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.giangduongs)
        this.editedIndex = -1
      }, 300)
    },
    onPickFile(){
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.') <= 0){
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]

      
    }
  },
  created() {
    
  }

}