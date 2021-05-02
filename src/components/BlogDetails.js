import { useParams,useHistory } from "react-router";
import useFetch from "../custom-hooks/useFetch";

const BlogDetails = () => {
    const {id}= useParams()
    const history=useHistory()
    const {error,data:blog,isPending}=useFetch('http://localhost:8000/blogs/'+id)

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })

    }

    return (  
        <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div> Error - {error} </div>}
        {blog && <article>
            <h1>{blog.title}</h1>
            <h3>-Written by {blog.author}</h3>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
            </article>
            
        }
      
        </div>
    );
}
 
export default BlogDetails;