import {useState,useEffect } from 'react';

const useFetch=(url)=>{

    const [data,setData]=useState([])
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{

        
        const abortCont=new AbortController()

        setTimeout(()=>{
            ////to associate abortCOntroller with fetch
         fetch(url,{signal:abortCont.signal})
         .then(res=>{
             if(!res.ok)
             {
                 throw Error('could not fetch data for that resource')
             }
             return res.json()
         })
         .then((data)=>{
             console.log(data)
             setData(data)
             setIsPending(false)
             setError(null)
         })
         //below if to log errors-eg Connection error
         //here we are updating the state
         .catch((err)=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted')
            }
            else{
                setError(err.message)
                setIsPending(false)
            }
         })
        },1000)
        return ()=>{
            //abort whichevr fetch it's associated to 
            abortCont.abort() 
        }
    },[url])

    //returning an object of these properties
    return {data,isPending,error}
 
}

export default useFetch