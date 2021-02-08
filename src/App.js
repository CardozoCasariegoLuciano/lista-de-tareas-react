import React from 'react';
import logo from './logo.svg';
import './App.css';

import {tareas} from './tareas.json'


class App extends React.Component{

  constructor(){

    super();

    this.state = {
      tareas
    }
  }

  render(){

    const tareas = this.state.tareas.map( (tarea , i) => {

      return (

        <div className="col-md-4 mt-4">
          <div className="card">

            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger">
                {tarea.prioridad}
              </span>
            </div>

            <div className="card-body">
              <p>{tarea.escripcion}</p>
              <p><mark>{tarea.responsale}</mark></p>
            </div>

          </div>
        </div>
      )

    })


    return (
      <div className="App">
      
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white ml-4">
            
              Tareas - 
              
              <span className="badge badge-pill badge-light">
                {this.state.tareas.length}
              </span>
                          
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            {tareas}
          </div>          
        </div>

        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
