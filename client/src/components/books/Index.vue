<template>
  <div>
    <h2>Get all books</h2>

    <p>
      <button @click="navigateTo('/book/create')">สร้าง Book</button>
    </p>

    <div v-for="book in books" :key="book.id">
      <p>id: {{ book.id }}</p>
      <p>title: {{ book.title }}</p>
      <p>content: {{ book.content }}</p>
      <p>category: {{ book.category }}</p>
      <p>status: {{ book.status }}</p>

      <p>
        <button @click="navigateTo('/book/' + book.id)">ดู</button>
        <button @click="navigateTo('/book/edit/' + book.id)">แก้ไข</button>
        <button @click="deleteBook(book)">ลบ</button>
      </p>

      <hr>
    </div>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
  data () {
    return {
      books: []
    }
  },

  async created () {
    this.books = (await BooksService.index()).data
  },

  methods: {

    navigateTo (route) {
      this.$router.push(route)
    },

    async deleteBook (book) {
      let result = confirm("Want to delete?")
      if (result) {
        await BooksService.delete(book)
        this.refreshData()
      }
    },

    async refreshData () {
      this.books = (await BooksService.index()).data
    }

  }
}
</script>