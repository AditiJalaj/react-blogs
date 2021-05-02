const BlogList = (props) => {
    const blog=props.blog
    const title=props.title
    // const handleDelete=props.handleDelete

    return (  
        <div className="blog-list">
        <h2>{title}</h2>
        {blog.map((b)=>(
            <div className="blog-preview" key={b.id}>
            <h2>{b.title} </h2>
            <p>written by {b.author}</p>

           {/* <button onClick={()=>handleDelete(b.id)}>Delete button</button>*/}

            </div>

        ))}
        </div>
    );
}
 
export default BlogList;