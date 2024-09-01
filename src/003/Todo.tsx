import React, {useState} from 'react';
import './layout.css'; 
import * as Utils from './utils';
import Modal from './Modal';
import Items from './Items';

const Todo = () => {
	const [title, setTitle] = useState(Utils.title);
	const [addBtn, setAddBtn] = useState('+');
	const [isModalOpen, setModalOpen] = useState(false);
	const [todos, setTodos] = useState([]);

	const handlerAddBtn = () => { 
		setModalOpen(true);
	};
	
	const handlerCloseModal = () => { setModalOpen(false) };
	
	const handleAddTodo = (newTodo) => {
		setTodos ((prevTodos) =>{
			const updateTodos = [...prevTodos, newTodo];
			return updateTodos;
		}); 
	};

	const handleRemoveTodo = (index) => {
		setTodos(todos.filter((_,i) => i !== index));
	};

	return (
		<div className="container">
			<div className="title-area">
				<p className="title">{title}</p>
			</div>
      <div className="list-area">
				<dl>
					{todos.map((todo, index) => (
					  <React.Fragment key={index} >
						<Items
							type={todo.type}
							content={todo.content}
							onRemove={() => handleRemoveTodo(index)} />
						</React.Fragment>
					))}
				</dl>
			</div>
			<div className="btn-area">
				<button className="add" onClick={handlerAddBtn}>{addBtn}</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={handlerCloseModal} onSave={handleAddTodo} />
		</div>
	);
}

export default Todo;
