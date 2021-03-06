import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "12251266-2c3b192180737f27f5db644c4",
    images: []
  };
  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] }); //clears the screen to blank if search bar is blank
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}`
          )
          .then(res => {
            this.setState({ images: res.data.hits });
            console.log(res.data.hits[0].imageSize);
          })
          // for(let i=0 i<res.data.hits.lenght i++){}
          .catch(err => console.log(err));
      }
    });
  }; // will try to change this to a async await function later on!!

  onAmountChange = e =>
    this.setState({ amount: e.target.value, refresh: true }); //a function to handle the change of the number of images to show
  render() {
    console.log(this.state); // just for debuging get rid of this line later on
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.serchText}
          onChange={this.onTextChange}
          label="Search For Images"
          fullWidth={false}
          helperText="Type the discription of image you would like to search for"
        />
        <br />
        <br />

        <Select
          name="amount"
          label="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          native={false}
          style={{ marginBottom: 10 }}
        >
          <MenuItem value={5}>show 5</MenuItem>
          <MenuItem value={10}>show 10</MenuItem>
          <MenuItem value={15}>show 15</MenuItem>
          <MenuItem value={30}>show 20</MenuItem>
          <MenuItem value={50}>show 50</MenuItem>
        </Select>

        {this.state.images.length > 0 ? ( //ternary operator saying if images exist then show them else do nothing.
          <ImageResults images={this.state.images} /> // can probably do this with the && statements, also look to place this in another section maybe
        ) : null}
      </div>
    );
  }
}

export default Search;
