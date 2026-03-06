<template>
  <div>
    <h2>Get all books</h2>

    <h4>จำนวนหนังสือ {{ books.length }}</h4>

    <p>
      <button v-on:click="navigateTo('/book/create')">เพิ่มหนังสือ</button>
    </p>

    <div v-for="book in books" v-bind:key="book.id">

      <p>id: {{ book.id }}</p>
      <p>title: {{ book.title }}</p>
      <p>author: {{ book.author }}</p>
      <p>category: {{ book.category }}</p>
      <p>status: {{ book.status }}</p>

      <p>
        <button v-on:click="navigateTo('/book/' + book.id)">ดูข้อมูล</button>
        <button v-on:click="navigateTo('/book/edit/' + book.id)">แก้ไข</button>
        <button v-on:click="deleteBook(book)">ลบ</button>
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

    this.refreshData()

  },

  methods: {

    navigateTo (route) {

      this.$router.push(route)

    },

    async deleteBook (book) {

      let result = confirm("Want to delete?")

      if (result) {

        try {

          await BooksService.delete(book)

          this.refreshData()

        } catch (err) {

          console.log(err)

        }

      }

    },

    async refreshData () {

      this.books = (await BooksService.index()).data

    }

  }

}
</script>

<style scoped>
</style>