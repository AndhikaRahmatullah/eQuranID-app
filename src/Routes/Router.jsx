import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const OnLoading = lazy(() => import("../Components/OnLoading"));
const Home = lazy(() => import("../Pages/Home/Home"));
const About = lazy(() => import("../Pages/About/About"));
const DetailSurah = lazy(() => import("../Pages/DetailSurah/DetailSurah"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

const Router = () => {
	const location = useLocation();

	return (
		<Suspense fallback={<OnLoading />}>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/:idSurah"
					element={<DetailSurah />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</Suspense>
	);
};

export default Router;
