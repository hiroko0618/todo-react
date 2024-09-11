import React, {useState} from 'react';
import './layout.css'; 

const Modal = ({ isOpen, onClose, onSave }) => {
	const [title, setTitle] = useState('New TODO');
	const [addBtn, setAddBtn] = useState('Add');
	const [cancelBtn, setCancelBtn] = useState('Cancel');
	const [errMsg, setErrMsg] = useState('Please enter the task name.');
	const [inputValue, setInputValue] = useState('');
	const [deleteBtn, setDeleteBtn] = useState('✕');

	if (!isOpen) return null;

	const handleSave = () => {
		const newTodo = [
			{ type: 'text', content: inputValue},
			{ type: 'button', content: deleteBtn}
		]
		console.log(newTodo);
		onSave(newTodo);
		setInputValue('');
		onClose();
	}

	return (
		<div className="overlay">
			<div className="modal">
				<div className="mtitle-area">
					<p className="mtitle">{title}</p>
				</div>
      	<div className="form-area">
					<form>
						<input 
							className="inputtext" 
							type="text" 
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/><br />
						<span className="error">{errMsg}</span>
					</form>
				</div>
				<div className="mbtn-area">
					<button className="addlist" onClick={handleSave}>{addBtn}</button>&nbsp;&nbsp;
					<button className="cancel" onClick={onClose}>{cancelBtn}</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
