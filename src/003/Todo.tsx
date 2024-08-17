import React, {useState} from 'react';
import './layout.css'; 
import * as Utils from './utils';
import Modal from './Modal';

const Todo = () => {
	const [title, setTitle] = useState(Utils.title);
	const [addBtn, setAddBtn] = useState('+');
	const [closeBtn, setCloseBtn] = useState('✕');
	const [isModalOpen, setModalOpen] = useState(false);

	const handlerAddBtn = () => { setModalOpen(true) };
	const handlerCloseModal = () => { setModalOpen(false) };

	return (
		<div class="container">
			<div class="title-area">
				<p class="title">{title}</p>
			</div>
      <div class="list-area">
				<dl>
					<dd class="list-item">
						<input type="checkbox" />
						<button class="close">{closeBtn}</button>
					</dd>
				</dl>
			</div>
			<div class="btn-area">
				<button class="add" onClick={handlerAddBtn}>{addBtn}</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={handlerCloseModal}/>
		</div>
	);
}

export default Todo;
