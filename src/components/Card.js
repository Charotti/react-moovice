import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div class="card" style="width: 18rem;">
        <img
          src="https://image.tmdb.org/t/p/w300/"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
        </ul>
      </div>
    );
  }
}

export default Card;
