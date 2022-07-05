import { useContext } from "react"
import { UserContext } from "../App"

export const ShowTodo = () => {
    const [data, setData] = useContext(UserContext)
    const [isChecked, setIsChecked] = useContext(UserContext)

    const deleteItem = (id) => {
        const deleteData = data.filter((item) => {
            return item.id !== id
        })
        setData(deleteData)
    }

    const checkbox = (id) => {
        const updateChecked = isChecked.map((item) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete
                return item
            }

        }
        )
        setData(updateChecked)
        console.log(data);
    }

    return (
        <>
            {data.map((item) => {
                return (
                    <div className="item-show" key={item.id}>
                        <p>{item.title}</p>
                        <div className="checkbox">
                            <p onClick={() => checkbox(item.id)}>v</p>

                            <p onClick={() => deleteItem(item.id)}>X</p>
                        </div>
                    </div>
                )
            })}

        </>
    )

}