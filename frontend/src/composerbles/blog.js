import axios from "axios";
import {ref} from "vue"
import {useRouter} from "vue-router";


export default function useBlog() {
    const blogs = ref([])
    const router = useRouter()


const Storeblog = async (blogs) => {
        try {
            let res= await axios.blogs('http://127.0.0.1:8002/api/blogs', blogs)
            await router.push({name: 'blog.post'})
        }catch (err){
            console.log(err)
        }
}


}