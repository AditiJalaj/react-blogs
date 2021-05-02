import { useState } from "react"
import {useHistory} from 'react-router-dom'

const Create = () => {


    const history=useHistory()

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')
    const [pending,setPending]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()

        //creating a new object to store all the properties of form
        const blog={title,body,author}
        console.log(blog)

        setPending(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('fetch added')
            setPending(false)
            history.push('/')
        })
    }

  

        return ( 
        <div className="create">
        <h2> ADD A NEW BLOG</h2>
        <form onSubmit={handleSubmit}>

        <label>Blog Title:</label>
        <input type="text" 
        required 
        value={title}
        onChange={(e)=>{
            setTitle(e.target.value)
        }}></input>

        <label>Blog body:</label>
        <textarea 
        required name="body" rows="5" cols="20"
        value={body}
        onChange={(e)=>{
            setBody(e.target.value)
        }}></textarea>

        

        <label>Blog Author:</label>
        <input type="text"
         required
         value ={author}
         onChange={(e)=>{
            setAuthor(e.target.value)
         }}></input>

        
        {pending ?(<button disabled>ADDING BLOG</button>) : (<button> Add Blog</button>)}
        </form>
        </div>
        
     );
}
 
export default Create;