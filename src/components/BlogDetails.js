import { useParams } from "react-router";
import useFetch from "../custom-hooks/useFetch";

const BlogDetails = () => {
    const {id}= useParams()
    const {error,data:blog,isPending}=useFetch('http://localhost:8000/blogs/'+id)

    return (  
        <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div> Error - {error} </div>}
        {blog && <article>
            <h1>{blog.title}</h1>
            <h3>-Written by {blog.author}</h3>
            <div>{blog.body}</div>
            </article>}
        </div>
    );
}
 
export default BlogDetails;