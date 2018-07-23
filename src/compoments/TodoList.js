import React, { Component } from 'react';
import { Checkbox } from 'antd';
class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props.onChangeStatus(this.props.status)
  }
  
  checkItem = (e,i) => {
    let status = e.target.checked ? "completed" : "active"
    this.props.onCheckItem(i.id, status)
  }
  editItem = (event) => {
    event.target.setAttribute("contentEditable", true);
    event.target.focus()
  }
  handOnKeyPress = (event, itemId) => {
    var keycode = (event.keyCode
      ? event.keyCode
      : event.which);
    if (keycode == '13') {
      event.target.setAttribute("contentEditable", false);
      this.props.onEditItemContent(itemId, event.target.innerText)
    }
  }
  
  render() {
    return (
      <div >
        <ol>
          {
            this.props.todoList.map(i => {
              return (<li
                className={i.status ==="completed" ? "checked" : ""}
                key={i.id}
                onDoubleClick={(e) => this.editItem(e)}
                onKeyPress={(e, itemId) => this.handOnKeyPress(e, i.id)}>
                <Checkbox onChange={(event, itemId) => this.checkItem(event,i)}
                  checked={i.status ==="completed" ? true : false} >{i.content}</Checkbox>
              </li>)
            })
          }
        </ol>
      </div>
    );
  }
}

export default TodoList;