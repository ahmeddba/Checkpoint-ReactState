// Class based component template
import React, { Component } from 'react';
import './App.css';
import ProfileCard from './Profile/Profile';
import { Button } from 'react-bootstrap';

class App extends Component {

  state = {
    // State variables go here
    person:{
      fullName: 'Ahmed Ben Abid',
      bio: 'A software developer',
      imgSrc: '/me.jpg',
      profession: 'Software Engineer',
    },
    show: false,
    interval: 0,
    buttonText: "Click to show profile card"
  };
//change show state when we click on the button
  toggle = () => {
    this.setState((prevState)=>({show: !prevState.show}), () => {console.log(this.state.show)});
    this.setState({buttonText:  !this.state.show ? "Hide profile card" : "Show profile card"})

  };
  //Using componentDidMount to update the interval state variable every second
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000); // Update interval every 1 second
  }
  //Using componentWillUnmount to clear the interval
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    const alignProfile ={display: "flex", justifyContent: "center", alignItems: "center"}
    return (
      <div className="App">
        <Button variant="secondary" onClick={this.toggle}>{this.state.buttonText}</Button>
        {this.state.show &&
        <div style={alignProfile}>
          <ProfileCard
            fullName={this.state.person.fullName}
            bio={this.state.person.bio}
            imgSrc={this.state.person.imgSrc}
            profession={this.state.person.profession}
          />
          </div>
        }
        {/* showing the duration of mounting the component */}
         <p>Time since mounted: {this.state.interval} seconds</p>
      </div>
    );
  }
}

export default App;
