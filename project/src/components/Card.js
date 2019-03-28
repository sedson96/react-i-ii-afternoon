import React ,{Component} from "react"
import data from "./data"

class Card extends Component {
    constructor(){
    super() 
    this.state = {
        data: data

    }
    }
    
    render () {
        let user = this.state.data[this.props.id]
        return (
            <section className="App-section" >
            <div className={"card"}>
                <h2>{`${user.name.first}  ${user.name.last}`}</h2>
                <div className="about">

                <h1><strong>From:</strong> {user.city}</h1>
                <h1><strong>Job Title:</strong> {user.title}</h1>
                <h1><strong>Employer:</strong> {user.employer}</h1>

                </div>
            
                <div className="movie" >
                    <h1><strong>Favorite Movies:</strong></h1>
                     <ol>
                        <li>{user.favoriteMovies[0]}</li>
                        <li>{user.favoriteMovies[1]}</li>
                        <li>{user.favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
            <h4>{this.props.id + 1}/{this.state.data.length}</h4>
        </section>
        )
    }
}

export default Card