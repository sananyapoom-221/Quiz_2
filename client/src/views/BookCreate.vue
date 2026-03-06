<template>

<div>

<h1>สร้าง Book</h1>

<form @submit.prevent="createBook">

<p>Title</p>
<input v-model="book.title" />

<p>Author</p>
<input v-model="book.author" />

<p>Price</p>
<input v-model="book.price" />

<br><br>

<button type="submit">
บันทึก
</button>

</form>

</div>

</template>

<script>

import axios from "axios"

export default{

data(){
return{
book:{
title:"",
author:"",
price:""
}
}
},

methods:{

createBook(){

axios.post("http://localhost:3000/books",this.book)
.then(()=>{
this.$router.push("/books")
})

}

}

}

</script>