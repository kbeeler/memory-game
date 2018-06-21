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
    //if statement //do a check to see if this is the first click or not
    let match = this.state.friends.find(function(b) {
      return b.id === id
    });
    console.log(this.state.friends)
    console.log("im in clickHandler", id, match)
    //if char is -1 then it has not been clicked before, else then it has been clicked. game over.

  }

  

  correctGuess = (id) => {

  }

  incorrectGuess = () => {

  }

  shuffleCards = () => {
    //spread this.state.friends
    let newFriends = [...this.state.friends]
    //shuffle new friends
    //send new friends back
    this.setState({friends:newFriends})
  }

  resetScore = () => {

  }


  //if card has been clicked, the game ends. shuffle cards and reset the score.

  //if the card has not been clicked, add point, then shuffle the cards. 

  // take a copy of state, then randomize the cards. make function shuffle cards.




  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clicked = {this.clickHandler} 
            id={friend.id}
            key={friend.id}
            name={friend.name}s
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
