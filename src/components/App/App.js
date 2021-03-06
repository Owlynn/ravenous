import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import Searchbar from '../Searchbar/Searchbar';
import { render } from '@testing-library/react';
import Yelp from '../../util/Yelp';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { businesses : []};

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
    Yelp.search(term,location,sortBy)
    .then((businesses) => {
      this.setState({
        businesses : businesses
      })
    }

    );
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <Searchbar searchYelp = {this.searchYelp}/>
        <BusinessList businesses= {this.state.businesses}/>
    </div>
    )
  };
}

export default App;
