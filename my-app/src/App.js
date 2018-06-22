import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    // clicked: [],
    score: 0,
    topScore: 0,
    match: {},
  };


  //when the card has been clicked, check to see if it has been clicked before.
  clickHandler = (id) => {
    const newFriends = [...this.state.friends];
    newFriends.forEach((friend, index) => {
      if (friend.id === id) {

        console.log(friend.id, id, friend.clicked);
        //if card has been clicked, the game ends. shuffle cards and reset the score.
        if (friend.clicked) {
          console.log("game over");
          this.setState({
            friends: this.shuffleCards(friends),
            score: 0
          });
        } else  {
          newFriends[index].clicked = true;
          console.log("has not been clicked")
          this.setState({
            friends: this.shuffleCards(newFriends),
            score: this.state.score + 1
          })
        }

      }
    });

    //if statement //do a check to see if this is the first click or not

    console.log(this.state.friends)
    console.log("im in clickHandler", id)
    //if char is -1 then it has not been clicked before, else then it has been clicked. game over.

  }


  shuffleCards = (data) => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Your Score:
          {this.state.score}
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clicked={this.clickHandler}
            id={friend.id}
            key={friend.id}
            name={friend.name} s
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
