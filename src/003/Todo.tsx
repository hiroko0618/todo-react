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
		setTodos([...todos, newTodo]); 
	};

	const handleRemoveTodo = (index) => {
		setTodos(todos.filter((_,i) => i !== index));
	};

	return (
		<div class="container">
			<div class="title-area">
				<p class="title">{title}</p>
			</div>
      <div class="list-area">
				<dl>
					{todos.map((todo, index) => (
						<Items key={index} text={todo} onRemove={() => handleRemoveTodo(index)} />
					))}
				</dl>
			</div>
			<div class="btn-area">
				<button class="add" onClick={handlerAddBtn}>{addBtn}</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={handlerCloseModal} onSave={handleAddTodo} />
		</div>
	);
}

export default Todo;
