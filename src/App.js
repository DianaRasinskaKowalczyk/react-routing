import HomePage from "./views/HomePage";
import { HashRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PostPage from "./views/PostPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/:category-flower/:title'>
					<PostPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
