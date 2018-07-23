import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import AddItem from "./Container/AddItemContainer"
import FilterList from "./Container/FilterListContainer"

class App extends Component {
  constructor(props) {
    super(props)
  }
componentDidMount(){
  console.log(11111)
}
  render() {
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <div >
          <AddItem addToDoList={(e) => this.addToDoList(e)} />
          <FilterList />
        </div >

      </div >
    );
  }
}

export default App;
