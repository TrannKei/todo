import logo from './logo.svg';
import './App.css';
import { AddTodo } from './component/add-todo';
import { createContext, useContext, useState } from 'react'
import { ShowTodo } from './component/show-todo';



export const UserContext = createContext({})
const App = () => {
	const [data, setData] = useState([])

	return (
		<UserContext.Provider value={[data, setData]}>
			<div className='container'>
				<div className='add-todo'>
					<AddTodo />
				</div>
				<div className='show-todo'>
					<ShowTodo />
				</div>
			</div>
		</ UserContext.Provider>
	)
}

export default App;

