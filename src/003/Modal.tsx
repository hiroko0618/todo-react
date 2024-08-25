import React, {useState} from 'react';
import './layout.css'; 

const Modal = ({ isOpen, onClose }) => {
	const [title, setTitle] = useState('New TODO');
	const [addBtn, setAddBtn] = useState('Add');
	const [cancelBtn, setCancelBtn] = useState('Cancel');
	const [errMsg, setErrMsg] = useState('Please enter the task name.');

	if (!isOpen) return null;

	const handleSave = () => {
		const text = 'New Todo';
		onSave(text);
		onClose();
	}

	return (
		<div class="overlay">
			<div class="modal">
				<div class="mtitle-area">
					<p class="mtitle">{title}</p>
				</div>
      	<div class="form-area">
					<form>
						<input class="inputtext" type="text"></input><br />
						<span class="error">{errMsg}</span>
					</form>
				</div>
				<div class="mbtn-area">
					<button class="addlist" onClick={handleSave}>{addBtn}</button>&nbsp;&nbsp;
					<button class="cancel" onClick={onClose}>{cancelBtn}</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
