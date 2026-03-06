import { createRouter, createWebHistory } from "vue-router";

import UserCreate from "../components/Users/CreateUser.vue";
import UserEdit from "../components/Users/EditUser.vue";
import UserShow from "../components/Users/ShowUser.vue";
import UserIndex from "../components/Users/Index.vue";
import Login from "../components/Login.vue";

import BlogIndex from "../components/Blogs/Index.vue";
import BlogCreate from "../components/Blogs/CreateBlog.vue";
import BlogEdit from "../components/Blogs/EditBlog.vue";
import BlogShow from "../components/Blogs/ShowBlog.vue";

import BooksIndex from "../components/books/Index.vue";
import CreateBook from "../components/books/CreateBook.vue";
import EditBook from "../components/books/EditBook.vue";
import ShowBook from "../components/books/ShowBook.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },

    { path: "/users", name: "users", component: UserIndex },
    { path: "/user/create", name: "users-create", component: UserCreate },
    { path: "/user/edit/:userId", name: "user-edit", component: UserEdit },
    { path: "/user/:userId", name: "user", component: UserShow },

    { path: "/login", name: "login", component: Login },

    { path: "/blogs", name: "blogs", component: BlogIndex },
    { path: "/blog/create", name: "blogs-create", component: BlogCreate },
    { path: "/blog/edit/:blogId", name: "blog-edit", component: BlogEdit },
    { path: "/blog/:blogId", name: "blog", component: BlogShow },

    // BOOK ROUTES
    { path: "/books", name: "books", component: BooksIndex },
    { path: "/book/create", name: "book-create", component: CreateBook },
    { path: "/book/:bookId", name: "book", component: ShowBook },
    { path: "/book/edit/:bookId", name: "book-edit", component: EditBook },
  ],
});

export default router;
