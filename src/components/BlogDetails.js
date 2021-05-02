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


    //MAKE A PROPER WAY OF EDITING BLOG OPTION HERE
    // const handleEdit=()=>{
    //     fetch('http://localhost:8000/blogs/'+id,{
    //         method:'PUT'
    //     }).then(()=>{
           
    //     })
    // }

    return (  
        <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div> Error - {error} </div>}
        {blog && <article>
            <h1>{blog.title}</h1>
            <h3>-Written by {blog.author}</h3>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
            <br></br>
            {/* </article>button onClick={handleEdit}>Edit</button> */}
            </article>
            
        }
      
        </div>
    );
}
 
export default BlogDetails;