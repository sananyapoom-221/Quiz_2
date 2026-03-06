<template>
  <div class="container">

    <h1>Create Book</h1>

    <form v-on:submit.prevent="createBook">

      <div class="mb-3">
        <label>Title:</label>
        <input 
          type="text" 
          v-model="book.title" 
          class="form-control"
          placeholder="Enter book title"
        >
      </div>

      <div class="mb-3">
        <label>Author:</label>
        <input 
          type="text" 
          v-model="book.author" 
          class="form-control"
          placeholder="Enter author name"
        >
      </div>

      <div class="mb-3">
        <label>Category:</label>
        <input 
          type="text" 
          v-model="book.category" 
          class="form-control"
        >
      </div>

      <div class="mb-3">
        <label>Status:</label>
        <input 
          type="text" 
          v-model="book.status" 
          class="form-control"
        >
      </div>

      <p>
        <button type="submit" class="btn btn-primary">
          Create Book
        </button>

        <button 
          type="button"
          class="btn btn-secondary"
          v-on:click="navigateTo('/books')"
        >
          Back
        </button>
      </p>

    </form>

  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {

  data () {
    return {
      book: {
        title: '',
        author: '',
        category: '',
        status: 'available'
      }
    }
  },

  methods: {

    async createBook () {

      try {

        await BooksService.post(this.book)

        this.$router.push({
          name: 'books'
        })

      } catch (err) {
        console.log(err)
      }

    },

    navigateTo (route) {
      this.$router.push(route)
    }

  }

}
</script>

<style scoped>

.container{
  padding:30px;
}

input{
  padding:8px;
  margin-top:5px;
  margin-bottom:10px;
  width:300px;
}

button{
  margin-right:10px;
  padding:8px 15px;
}

</style>