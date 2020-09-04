import React from "react";
import MemeDisplay from "../MemeDisplay/MemeDisplay";
import "./styles.css";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/1bij.jpg",
      allMemeImages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes);
        this.setState({
          allMemeImages: memes,
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        [name]: value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
    const randMemeImg = this.state.allMemeImages[randNum].url;
    this.setState({
      randomImage: randMemeImg,
    });
  }

  render() {
    return (
      <div id="main">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Top text"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
          />
          <button type="submit">Gen</button>
        </form>
        <div id="memebox">
          <img src={this.state.randomImage} alt="" />
          <h1 className="top">{this.state.topText}</h1>
          <h1 className="bottom">{this.state.bottomText}</h1>
        </div>
        {/* <h3>All available images</h3> */}
        {/* <MemeDisplay allMemeImages={this.state.allMemeImages} /> */}
      </div>
    );
  }
}

export default MemeGenerator;
