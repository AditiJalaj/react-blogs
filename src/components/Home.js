
import BlogList from './BlogList'
import useFetch from '../custom-hooks/useFetch'

const Home = (props) => {

// const [name,setName]=useState("Aduu")
//    const handleDelete=(id)=>{
//        const newBlog=blog.filter(b=> b.id!==id)
//        setBlog(newBlog)
//    }
 

const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
        {error && <div>ERROR-{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blog={blogs} title='All blogs!'/>}
        
        {/*<button onClick={()=>setName("Jen")}>change name</button>
        <p>{name}</p>
    <BlogList blog={blog.filter((b)=>b.author==="mario")} title='Mario blogs!'/>*/}

        </div>
     );
}
 
export default Home;