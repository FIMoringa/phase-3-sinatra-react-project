import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {posts} from '../posts';


function Home() {
	return (
   
		<div className="d-flex flex-wrap">
			{ posts.map((post) => (
        <Card style={{ width: '30%', height: '100%' }} className="container mt-5 w-30">
				<Card.Body>
					<Card.Title>Post Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Author: author</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Link href="#">Delete Post</Card.Link>
					<Card.Link href="#">Create new Post</Card.Link>
				</Card.Body>
			</Card>
      )
      )}
		</div>
	);
}

export default Home;
