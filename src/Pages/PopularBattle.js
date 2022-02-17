import React from "react";
import Card from "../components/Card";

class PopularBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    // récupération API
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a8b9f0e5cc95854f24e9e4d259fa6033"
    )
      //Après récupération stockage du résultat dans un Json
      .then((res) => res.json())
      //Après stockage, modification du state movies par la clé results
      //console.log du res et du state après modification
      .then((res) => {
        let twoPopularsMovies = res.results.splice(0, 2);
        this.setState({ movies: twoPopularsMovies });
        console.log("movies: ", this.state.movies);
      });
  }
  render() {
    return (
      <div>
        <h1>PopularBattle</h1>
        <div className="d-flex flex-wrap justify-content-around ">
          {this.state.movies.map((data) => (
            <Card movie={data}></Card>
          ))}
        </div>
      </div>
    );
  }
}

export default PopularBattle;
