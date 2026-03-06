<template>

<div>

<h1>รายละเอียด Book</h1>

<p>Title : {{book.title}}</p>
<p>Author : {{book.author}}</p>
<p>Price : {{book.price}}</p>

<router-link to="/books">
<button>กลับ</button>
</router-link>

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

}

}

</script>