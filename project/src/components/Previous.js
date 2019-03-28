import React, {Component} from "react";


class Previous extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)   
    }
    handleChange() {
        this.props.previous()
    }
    
    render() {
        return (
                <h3 onClick={this.handleChange}> &lt; Previous</h3>
        )
    }
}
export default Previous