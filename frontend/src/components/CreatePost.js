import React, { useState, useEffect } from 'react';
import { FloatingLabel } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [author, setAuthor] = useState('');
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		const getAuthors = async () => {
			const response = await fetch('http://localhost:9292/authors');
			const data = await response.json();
			console.log(data);
			setAuthors(data);
		};

		getAuthors();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		const post = { title, content, author_id: author };
		fetch('http://localhost:9292/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		});
	};
	return (
		<div>
			<Button className='ms-5 mt-3' onClick={(e) => navigate('/')}>Home</Button>
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
				<Form.Select aria-label="Default select example">
					<option>Select Author</option>
					{authors.map((author) => (
						<option
							key={author.id}
							value={author.id}
							onChange={(e) => setAuthor(e.target.value)}
						>
							{author.first_name}
						</option>
					))}
				</Form.Select>
				<Button variant="primary" type="submit" className="mt-3">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default CreatePost;
