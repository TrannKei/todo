import { useContext, useState } from "react"
import { UserContext } from "../App"



export const AddTodo = () => {
	const [data, setData] = useContext(UserContext);
    const [input, setInput] = useState()

    function handleChange(e){
        setInput(e.target.value)
       
    }

    const Handle = ()=> {
       const beforeData ={
        id:  Math.floor(Math.random() * 10000) + 1,
        title: input,
        isComplete: false,
        isEdit: false,
        readyToEdit: input
       }
       setData([...data, beforeData])
    // const fake = [...data]
       console.log(data);
       setInput('')
    }

	return (
    <>
        <input type="text" 
        value={input} 
        // placeholder={input}
        onChange={handleChange} />
        <button onClick={Handle}>ADD</button>
    </>
	)
}