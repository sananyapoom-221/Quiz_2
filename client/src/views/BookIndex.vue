<template>

<div>

<h1>Books</h1>

<router-link to="/books/create">
<button>สร้าง Book</button>
</router-link>

<table border="1">

<tr>
<th>Title</th>
<th>Author</th>
<th>Price</th>
<th>Action</th>
</tr>

<tr v-for="book in books" :key="book._id">
sd
<td>{{book.title}}</td>
<td>{{book.author}}</td>
<td>{{book.price}}</td>

<td>

<router-link :to="'/books/'+book._id">
<button>ดูข้อมูล Book</button>
</router-link>

<router-link :to="'/books/edit/'+book._id">
<button>แก้ไข Book</button>
</router-link>

<button @click="deleteBook(book._id)">
ลบข้อมูล Book
</button>

</td>

</tr>

</table>

</div>

</template>

<script>

import axios from "axios"

export default {

data(){
return{
books:[]
}
},

mounted(){

axios.get("http://localhost:3000/books")
.then(res=>{
this.books=res.data
})

},

methods:{

deleteBook(id){

if(confirm("ยืนยันการลบข้อมูล?")){

axios.delete("http://localhost:3000/books/"+id)
.then(()=>{
location.reload()
})

}

}

}

}

</script>