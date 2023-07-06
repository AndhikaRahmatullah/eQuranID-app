import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import Navbar from "./Components/Navbar";
import { UserProvider } from "./Context/Surah";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Navbar />
				<Router />
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
