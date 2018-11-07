import React, { Component } from "react";
import Card from "../components/Card";

class Clicky extends Component {
  state = {
    image: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    score: 0,
    clicked: [],
    highScore: 0
  };

  componentDidMount() {
    this.startGame();
  }

  handleBtnClick = event => {
    event.preventDefault();
    let clicked = event.target.attributes.value.value;
    if (this.state.clicked.indexOf(clicked) === -1) {
      this.state.clicked.push(clicked);
      this.setState({ score: this.state.score + 1 });
      this.startGame();
    } else {
      alert("Oops! You Lost!");
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
      this.setState({ score: 0, clicked: [] });
      this.startGame();
    }
  };

  startGame() {
    if (this.state.clicked.length === 12) {
      alert("Congratulations! You beat the game!");
      this.setState({ score: 0, clicked: [] });
    }
    this.setState({ image: this.shuffleArray(this.state.image) });
    console.log(this.state.image);
  }

  resetGame() {}

  shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">
            Racist, Or Do They Just Look Too Damn Similar? Politically
            Incorrect? Sue Me!
          </h1>
          <h3>
            Score - {this.state.score} &nbsp;&nbsp;&nbsp; High Score -{" "}
            {this.state.highScore}
          </h3>
        </div>
        <h3 className="text-center">
          This is a game that puts your memory and ability to tell asian women
          apart to the test! Click on a beauty pageant contestant and she and
          her friends will be randomly shuffled. Try not to click on the same
          person. Can you get them all without clicking the same chick twice?
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}

export default Clicky;
