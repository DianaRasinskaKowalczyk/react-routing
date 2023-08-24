import HomePage from "./views/HomePage";
import { HashRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import FlowersPage from "./views/FlowersPage";
import ContainerPage from "./views/ContainerPage";
import NotFoundPage from "./views/NotFoundPage";
import PostPage from "./views/PostPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<ContainerPage>
						<HomePage />
					</ContainerPage>
				</Route>
				<Route path='/flowers'>
					<ContainerPage>
						<FlowersPage />
					</ContainerPage>
				</Route>
				<Route path='/post/:id-:title'>
					<PostPage />
				</Route>
				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;