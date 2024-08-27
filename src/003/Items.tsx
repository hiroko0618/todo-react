import React, {useState} from 'react';
import './layout.css';

const Items = ( {text, onRemove} ) => {
	const [deleteBtn, setDeleteBtn] = useState('✕');	

	return (
			<dd class="list-item">
				<input type="checkbox" class="checkbox" />
				<p>{text}</p>
				<button onClick={onRemove} class="delete">{deleteBtn}</button>
			</dd>	
	);
}

export default Items; 
