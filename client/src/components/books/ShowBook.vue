<template>
<div>
  <h1>Show Book</h1>

  <p>id: {{ book.id }}</p>
  <p>title: {{ book.title }}</p>
  <p>content: {{ book.content }}</p>
  <p>category: {{ book.category }}</p>
  <p>status: {{ book.status }}</p>

  <p>
    <button @click="navigateTo('/book/edit/' + book.id)">แก้ไข</button>
    <button @click="navigateTo('/books')">กลับ</button>
  </p>

</div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {

data () {
  return {
    book: null
  }
},

async created () {
  let bookId = this.$route.params.bookId
  this.book = (await BooksService.show(bookId)).data
},

methods: {

navigateTo (route) {
  this.$router.push(route)
}

}

}
</script>