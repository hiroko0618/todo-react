import React, {useState} from 'react';
import './layout.css';

const Items = ( {type, content, onRemove} ) => {
	const [deleteBtn, setDeleteBtn] = useState('✕');	

	return (
			<li className="list-item">
				{type === 'checkbox' && <input className="checkbox" /> }
				{type === 'text' && <p className="text-item">{content}</p> }
				{type === 'button' && <button onClick={onRemove} class="delete">{deleteBtn}</button> }
			</li>
	);
}

export default Items; 
