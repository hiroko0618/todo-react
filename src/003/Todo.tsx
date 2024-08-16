import React, {useState} from 'react';
import './layout.css'; 
import * as Utils from './utils';

const Todo = () => {
	const [title, setTitle] = useState(Utils.title);
	const [addBtn, setAddbtn] = useState('+');
	const [closeBtn, setClosebtn] = useState('✕');
	const [key, setKey] = useState(0);

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
				<button class="add">{addBtn}</button>
			</div>
		</div>
	);
}

export default Todo;
