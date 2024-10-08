import Navbar from "./components/Header";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NowPlayingMovies from "./pages/movies/nowPlayingMovies";
import PopularMovies from "./pages/movies/popularMovies";
import UpComingMovies from "./pages/movies/upComingMovies";
import TopRatedMovies from "./pages/movies/topRatedMovies";
import AiringToday from "./pages/tvSeries/airingToday";
import OnTheAir from "./pages/tvSeries/onTheAir";
import PopularSeries from "./pages/tvSeries/popularSeries";
import TopRatedSeries from "./pages/tvSeries/topRatedSeries";
import NotFoundPage from "./pages/404";

// Layout untuk rute dengan Navbar dan Footer
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* untuk merender child routes */}
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Rute dengan Navbar dan Footer
      errorElement: <NotFoundPage />, // Untuk menangani halaman Not Found tanpa Navbar dan Footer
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "movies",
          element: <NotFoundPage />,
        },
        {
          path: "movies/now_playing",
          element: <NowPlayingMovies />,
        },
        {
          path: "movies/popular_movies",
          element: <PopularMovies />,
        },
        {
          path: "movies/upcoming_movies",
          element: <UpComingMovies />,
        },
        {
          path: "movies/top_rated_movies",
          element: <TopRatedMovies />,
        },
        {
          path: "tv",
          element: <NotFoundPage />,
        },
        {
          path: "tv/airing_today",
          element: <AiringToday />,
        },
        {
          path: "tv/on_the_air",
          element: <OnTheAir />,
        },
        {
          path: "tv/popular_series",
          element: <PopularSeries />,
        },
        {
          path: "tv/top_rated_series",
          element: <TopRatedSeries />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
