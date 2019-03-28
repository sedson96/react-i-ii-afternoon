import React, {Component} from "react";
import data from "./data";
let newObj ={name:{}, favoriteMovies:[]}
class AddForm extends Component {

    handleChange1(val) {
        newObj.name.first = val;
    }
    handleChange2(val) {
        newObj.name.last = val;
    }
    handleChange3(val) {
        newObj.city = val;
    }
    handleChange4(val) {
        newObj.country = val;
    }
    handleChange5(val) {
        newObj.employer = val;
    }
    handleChange6(val) {
        newObj.title = val;
    }
    handleChange7(val) {
        newObj.favoriteMovies.push(val);
    }

    handleClick1(e) {
        e.preventDefault()
        newObj.id = data.length + 1
        data.push(newObj)
        this.props.leave()
        
    }
    handleClick2(e) {
        e.preventDefault()
        this.props.leave()
        
    }

    
    render() {
        return (
                <form>
                    <h1>First Name</h1>
                    <input onChange={(event) => this.handleChange1(event.target.value)}/>
                    <h1>Last Name</h1>
                    <input onChange={(event) => this.handleChange2(event.target.value)}/>
                    <h1>City</h1>
                    <input onChange={(event) => this.handleChange3(event.target.value)}/>
                    <h1>Country</h1>
                    <input onChange={(event) => this.handleChange4(event.target.value)}/>
                    <h1>Job Title</h1>
                    <input onChange={(event) => this.handleChange5(event.target.value)}/>
                    <h1>Employer</h1>
                    <input onChange={(event) => this.handleChange6(event.target.value)}/>
                    <h1>Favorite Movies</h1>
                    <input onChange={(event) => this.handleChange7(event.target.value)}/>
                    <div>
                        <button onClick={(e) => this.handleClick2(e)}>Close</button>
                        <button onClick={(e) => this.handleClick1(e)}>Submit</button>
                    </div>

                </form>
        )
    }
}
export default AddForm