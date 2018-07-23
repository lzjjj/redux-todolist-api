import React, { Component } from 'react';
import TodoListContainer from "../Container/TodoListContainer"
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from 'antd';
class FilterList extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <BrowserRouter>
        <div>
        <Route exact path="/:status" component={TodoListContainer} />
          <ul className="filters">
            <Button type={this.props.status === "completed,active" ? "primary" : ""}>
                <Link  to="/completed,active"  onClick={() => this.props.onChangeStatus('completed,active')}>ALL</Link> 
            </Button>
            <Button type={this.props.status === "active" ? "primary" : ""}>
              
                <Link to="/active"  onClick={() => this.props.onChangeStatus('active')}>Active</Link>
            </Button>
            <Button type={this.props.status === "completed" ? "primary" : ""}>
                <Link to="/completed"  onClick={() => this.props.onChangeStatus('completed')}>Complete</Link>
            </Button>
          </ul>
         
        </div >
       </BrowserRouter>
    );
  }
}

export default FilterList;