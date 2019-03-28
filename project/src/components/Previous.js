import React, {Component} from "react";

class Previous extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)   
    }
    handleClick() {
        this.props.previous()
    }
    
    render() {
        return (
                <h3 onClick={this.handleClick}> &lt;Previous</h3>
        )
    }
}
export default Previous