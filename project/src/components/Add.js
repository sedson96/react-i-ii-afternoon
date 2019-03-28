import React, {Component} from "react";

class Add extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)   
    }
    handleClick() {
        this.props.add()
    }
    
    render() {
        return (
                <button onClick={this.handleClick} >Add</button>
        )
    }
}
export default Add