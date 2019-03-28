import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card"
import Next from "./components/Next"
import Previous from "./components/Previous"
import Delete from "./components/Delete"
import Add from "./components/Add"
import AddForm from "./components/AddForm"
import data from "./components/data"

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      showEdit: false,
      showAdd: false
    }

    this.next =this.next.bind(this)
    this.previous =this.previous.bind(this)
    this.addForm =this.addForm.bind(this)
    this.leaveForm =this.leaveForm.bind(this)
  }


  next() {
    if(this.state.id === data.length - 1) {
      return
    }
    this.setState({id: this.state.id + 1})
  }

  addForm() {
    this.setState({showAdd: true})
  }
  leaveForm() {
    this.setState({showAdd: false})
  }


  previous() {
    if (this.state.id === 0) {
      return
    }
    this.setState({id: this.state.id - 1})
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5>Home</h5>
        </header>
        <main className="App-main">
          <Card id={this.state.id}/>
          <section className="buttons">
            <Previous previous={this.previous}/>
            <Add add={this.addForm} show={this.state.showAdd}/>
            <Delete id={this.state.id} previous={this.previous}/>
            <Next next={this.next}/>
          </section>
          {this.state.showAdd === true ? <AddForm leave={this.leaveForm}/> : ""}
          {/* {this.state.showAdd === true ? <EditForm /> : ""} */}
        </main>
      </div>
    );
  }
}

export default App;
