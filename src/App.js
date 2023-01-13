import Row from './Components/Row';
import './App.css';
import requests from './requist';
import Banar1 from './Components/Banar1';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <Nav />
      <Banar1 fetchUrl={requests.fetchNetflixOriginals} />
      <Row isLargeRow={true} title="Netflix Orginal" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
  );
}

export default App;
