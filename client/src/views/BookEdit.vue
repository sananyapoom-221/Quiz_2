<template>

<div>

<h1>แก้ไข Book</h1>

<form @submit.prevent="updateBook">

<p>Title</p>
<input v-model="book.title" />

<p>Author</p>
<input v-model="book.author" />

<p>Price</p>
<input v-model="book.price" />

<br><br>

<button type="submit">
Update
</button>

</form>

</div>

</template>

<script>

import axios from "axios"

export default{

data(){
return{
book:{}
}
},

mounted(){

const id=this.$route.params.id

axios.get("http://localhost:3000/books/"+id)
.then(res=>{
this.book=res.data
})

},

methods:{

updateBook(){

const id=this.$route.params.id

axios.put("http://localhost:3000/books/"+id,this.book)
.then(()=>{
this.$router.push("/books")
})

}

}

}

</script>