import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { tareas } from "./tareas.json";
import FormularioTareas from "./componentes/FormularioTareas";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tareas,      
    };

    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  handleAddTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea],
    });
  }

  handleDelete(index) {
    this.setState({
      tareas: this.state.tareas.filter((task, i) => {
        return i !== index;
      }),
    });
  }  

  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-md-4 mt-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="prioridad">
                {tarea.prioridad}
              </span>
            </div>

            <div className="card-body">
              <p>{tarea.escripcion}</p>
              <p>
                <mark>{tarea.responsale}</mark>
              </p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.handleDelete.bind(this, i)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      );
    });

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
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <FormularioTareas onAgregarTarea={this.handleAddTarea} />
            </div>

            <div className="col-md-9">
              <div className="row">{tareas}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;




