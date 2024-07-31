import {useState} from "react";
const ToDo=()=>{

    const[addValue,setAddValue]=useState("")
    const [data,setData]=useState([])

 const handleChage=()=>{
    if(!addValue){
        alert("enter any list")
    }
    else{
    setData([...data,addValue])
     setAddValue("")
    }
 }

 const handleDelete=(index)=>{
    // console.log(alert(index))

    const remove=data.filter((value,indexItem)=> indexItem!==index)

    setData(remove)



 }


    return(
        <div className="input">
            <input type="text" onChange={(e)=>setAddValue(e.target.value)} value={addValue} />
            <button onClick={()=>handleChage()}>Add</button>

            <div>
                {
                    data.map((value,index)=>{
                        return(
                            <div className="flex">

                              <p key={index}>{value}</p> 
                              <button className="remove" onClick={()=>handleDelete(index)}>Remove</button>

                            </div>
                          

    
                        )
                    })
                }
            </div>
        </div>
            
        )
}

export default ToDo;