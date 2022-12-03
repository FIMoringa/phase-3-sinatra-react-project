import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [posts, setPosts] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('http://localhost:9292/posts');
			const data = await response.json();
      console.log(data)
			setPosts(data);
		};
		fetchPosts();
	}, []);

	const deleteHandler = (id) => {
		console.log(id);
		fetch(`http://localhost:9292/posts/${id}`, {
			method: 'DELETE',
		});
	};

	return (
		<div className="d-flex flex-wrap">
			{posts.map((post) => (
				<Card
					key={post.id}
					style={{ width: '30%', height: '100%' }}
					className="container mt-5 w-30"
				>
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text>{post.content}</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>Author: {post.author}</ListGroup.Item>
					</ListGroup>
					<Card.Body>
						<Card.Link href="#" onClick={() => deleteHandler(post.id)}>
							Delete Post
						</Card.Link>
						<Card.Link onClick={() => navigate('/create-post')} href="#">
							Create new Post
						</Card.Link>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default Home;
