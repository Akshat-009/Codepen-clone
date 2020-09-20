import {useState,useEffect} from 'react'

const PREFIX="codepen-clone-"
function useLocalStorage(key,initialvalue) {
    const prefixedkey=PREFIX+key
    const [value,setvalue]=useState(()=>{
        const jsonvalue=localStorage.getItem(prefixedkey)
        if (jsonvalue!=null)
        {
            return JSON.parse(jsonvalue)
        }
         if (typeof jsonvalue==="function")
         {
             return initialvalue()
         }
         else{
             return initialvalue
         }

    })
    useEffect(()=>{
      localStorage.setItem(prefixedkey,JSON.stringify(value))
    },[prefixedkey,value])
    return [value,setvalue]
}

export default useLocalStorage
