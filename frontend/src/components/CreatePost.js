import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreatePost() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();

		const post = { title, content };
		fetch('http://localhost:9292/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		});
	};
	return (
		<Form className="container mt-5" onSubmit={submitHandler}>
			<Form.Group className="mb-3" controlId="formBasicText">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter post Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Group>
			<FloatingLabel controlId="floatingTextarea2" label="POST CONTENTS">
				<Form.Control
					as="textarea"
					placeholder="Leave a comment here"
					style={{ height: '100px' }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
				/>
			</FloatingLabel>
			<Button variant="primary" type="submit" className="mt-3">
				Submit
			</Button>
		</Form>
	);
}

export default CreatePost;
