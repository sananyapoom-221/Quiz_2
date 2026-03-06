<template>
  <div class="container">

    <h1>Edit Book</h1>

    <form @submit.prevent="editBook">

      <div class="mb-3">
        <label>Title:</label>
        <input type="text" v-model="book.title">
      </div>

      <div class="mb-3">
        <label>Author:</label>
        <input type="text" v-model="book.author">
      </div>

      <div class="mb-3">
        <label>Category:</label>
        <input type="text" v-model="book.category">
      </div>

      <div class="mb-3">
        <label>Status:</label>
        <input type="text" v-model="book.status">
      </div>

      <p>
        <button type="submit">Update Book</button>
        <button type="button" @click="navigateTo('/books')">กลับ</button>
      </p>

    </form>

  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {

  data(){
    return{
      book:{
        title:'',
        author:'',
        category:'',
        status:''
      }
    }
  },

  methods:{

    async editBook(){

      try{

        await BooksService.put(this.book)

        this.$router.push({
          name:'books'
        })

      }catch(err){
        console.log(err)
      }

    },

    navigateTo(route){
      this.$router.push(route)
    }

  },

  async created(){

    try{

      let bookId = this.$route.params.bookId

      const response = await BooksService.show(bookId)

      this.book = response.data

    }catch(error){
      console.log(error)
    }

  }

}
</script>

<style scoped>

.container{
  padding:30px;
}

input{
  padding:6px;
  margin:5px;
}

button{
  margin-top:10px;
  padding:6px 12px;
}

</style>