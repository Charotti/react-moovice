import React from "react";
import Card from "../components/Card";

class Popular extends React.Component {
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
        console.log(res);
        this.setState({ movies: res.results });
        console.log("movies: ", this.state.movies);
      });
  }
  render() {
    return (
      <div>
        <h1>Popular</h1>
        {this.state.movies.map((data) => (
          <Card movie={data}></Card>
        ))}
      </div>
    );
  }
}

export default Popular;
