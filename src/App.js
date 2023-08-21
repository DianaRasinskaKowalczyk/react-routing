import HomePage from "./views/HomePage";
import { HashRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {

  return (
		<Router>
			<Switch>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);

}

export default App;
