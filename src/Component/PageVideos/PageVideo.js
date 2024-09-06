import requests from "./Utils.js";

import "./Styles/Row.css";
import "./Styles/Banner.css";
import "./Styles/NavVideo.css";
import "./Styles/Style.css";

import Row from "./Component/Row.js";
import Nav from "./Component/NavVideos.js";
import Banner from "./Component/Banner.js";

export default function App() {
  return (
    <div className="App-video">
      <Nav />
      <Banner />
      <Row
        title={"Trending Now"}
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horrow Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romantice Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
