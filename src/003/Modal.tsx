import React, {useState} from 'react';
import './layout.css'; 

const Modal = ({ isOpen, onClose }) => {
	const [title, setTitle] = useState('New TODO');
	const [addBtn, setAddBtn] = useState('Add');
	const [cancelBtn, setCancelBtn] = useState('Cancel');
	const [errMsg, setErrMsg] = useState('Please enter the task name.');

	if (!isOpen) return null;

	return (
		<div class="modal">
			<div class="title-area">
				<p class="title">{title}</p>
			</div>
      <div class="form-area">
				<form>
					<input type="text"></input>
					<span>{errMsg}</span>
				</form>
			</div>
			<div class="btn-area">
				<button class="addlist">{addBtn}</button>
				<button class="cancel" onClick={onClose}>{cancelBtn}</button>
			</div>
		</div>
	);
}

export default Modal;
