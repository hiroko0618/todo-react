import React, {useState} from 'react';
import './layout.css';

const Items = ( {type, content, onRemove} ) => {
	const [deleteBtn, setDeleteBtn] = useState('✕');	

	return (
			<dt className="list-item">
				{type === 'checkbox' && <input class="checkbox" checked={content} /> }
				{type === 'text' && <p class="text-item">{content}</p> }
				{type === 'button' && <button onClick={onRemove} class="delete">{deleteBtn}</button> }
			</dt>
	);
}

export default Items; 
