import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    addItem = () => {
        if (this.state.inputValue) {
            this.props.onAddItem({ status: "active", content: this.state.inputValue })
            this.setState({
                inputValue: ""
            })
        } else {
            alert("添加todo不能为空")
        }

    }
    changeInputValue = (e) => {
        let inputValue = e.target.value;
        this.setState({
            inputValue
        })

    }
    render() {
        return (
            <div>
                <Search
                    value={this.state.inputValue} onChange={(e) => this.changeInputValue(e)}
                    enterButton="Add"
                    size="large"
                    onSearch={() => this.addItem()}
                />

            </div>
        );
    }
}

export default AddItem;