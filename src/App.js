import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState({
      searchTerms: e.target.value,
    });
  }

  render() {
    const { products } = this.props;
    const searchTerms = this.state.searchTerms.trim().toLowerCase();
    let filteredProducts = products;

    if (searchTerms.length > 0) {
      filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().indexOf(searchTerms) !== -1;
      });
    }

    return (
      <form id="app">
        <div className="search">
          <input type="text" placeholder="Search" onChange={this.handleChange}/>
        </div>

        <ul>
          {filteredProducts.map((product, index) => {
            return (
              <li key={index}>
                <p>{product.name}</p>
              </li>
            )
          })}
        </ul>
      </form>
    );
  }
}
export default App;