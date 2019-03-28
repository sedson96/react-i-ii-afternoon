import React, {Component} from "react";


class Next extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)   
    }
    handleChange() {
        this.props.next()
    }
    
    render() {
        return (
                <h3 onClick={this.handleChange} >Next ></h3>
        )
    }
}
export default Next