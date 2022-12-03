import './App.css';
import Home from './components/Home';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CreatePost from './components/CreatePost';

function App() {
	return (
		<Router className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-post" element={<CreatePost />} />
			</Routes>
		</Router>
	);
}

export default App;
