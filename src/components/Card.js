import React from "react";

class Card extends React.Component {
  render() {
    return (
      // Dans réact mettre entre accolades le style, mettre les guillemets entre la valeur et non la width et enlever le ;
      // première accolade car js et deuxième accolade pour dire que c'est un objet
      <div className="card" style={{ width: "18rem" }}>
        {/* Mettre en props le map de movies (movie) avec la cle poster-path */}
        <img
          src={
            "https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path
          }
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.movie.title}</h5>
          {/* overflow et height  pour retirer le blanc entre le text et la date  */}
          <p className="card-text overflow-auto" style={{ height: "10rem" }}>
            {this.props.movie.overview}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.props.movie.release_date}</li>
        </ul>
      </div>
    );
  }
}

export default Card;
