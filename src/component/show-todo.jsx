import { useContext, useState } from "react"
import { UserContext } from "../App"
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai'
export const ShowTodo = () => {
    const [data, setData] = useContext(UserContext)
    // const [isChecked, setIsChecked] = useContext(UserContext)

    const deleteItem = (id) => {
        const deleteData = data.filter((item) => {
            return item.id !== id
        })
        setData(deleteData)
    }

    const checkbox = (id) => {
        const updateChecked = data.map((item) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete
            }
            return item

        }
        )
        setData(updateChecked)
        // console.log(data);
    }
    const editItem = (id) => {
        const onClickEdit = data.map((item) => {
            if (item.id === id) {
                item.isEdit = !item.isEdit
                // item.title = input
            }
            return item
        })
        setData(onClickEdit)
        // console.log(data);
    }
    
    const [input, setInput] = useState("")
    const handleChange = (event) => {
        setInput(event.target.value)


    }
    const handleKeyDown = (event, id)=>{
        if (event.key === 'Enter') {
            const onClickEdit = data.map((item) => {
                if (item.id === id) {
                    item.isEdit = false
                    item.title = input
                   
                }
                return item
            })
            setData(onClickEdit)
            console.log(data);
          }
    }

    return (
        <>
            {data.map((item) => {
                return (
                    <div
                        onDoubleClick={() => editItem(item.id)}
                        className={item.isComplete ? 'item-show complete' : 'item-show'}
                        key={item.id}
                        // onBlur={saveChange}
                    >
                        {item.isEdit ?
                            <input type='text'
                                className="input-edit"
                                // value={item.title}
                                placeholder={item.title}
                                onKeyDown={(event)=> handleKeyDown(event, item.id)}
                                onChange={(event) => handleChange(event, item.id)}

                            /> :
                            <p>{item.title}</p>}
                        <div className="checkbox">
                            <AiOutlineCheckCircle onClick={() => checkbox(item.id)} />
                            <AiOutlineDelete onClick={() => deleteItem(item.id)} />
                        </div>
                    </div>
                )
            })}

        </>
    )

}