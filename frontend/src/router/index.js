import {createRouter, createWebHistory} from "vue-router";
import Welcome from "@/components/Blogs/Welcome.vue";
import Blogs from "@/components/Blogs/Blogs.vue";
import PostBlog from "@/components/Blogs/PostBlog.vue";

const routes = [
    {
        path: '/',
        name: 'blog.welcome',
        component: Welcome
    },
    {
        path: '/blogs',
        name: 'blog.post',
        component: Blogs,
    },
    {
        path: '/post_blogs',
        name: 'blog.new_post',
        component: PostBlog,
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})
