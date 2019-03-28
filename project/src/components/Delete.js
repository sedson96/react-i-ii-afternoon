import React, {Component} from "react";
import data from "./data"


class Delete extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)   
    }
    handleClick() {
        data.splice(this.props.id,1)
        this.props.previous()
    }
    
    render() {
        return (
                <button onClick={this.handleClick} >Delete</button>
        )
    }
}
export default Delete