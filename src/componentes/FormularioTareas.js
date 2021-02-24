import React from "react";

class FormularioTareas extends React.Component {
  constructor() {
    super();

    this.state = {
      titulo: "",
      responsale: "",
      escripcion: "",
      prioridad: "",
    };

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const { value, name } = e.target;

    this.setState({
        [name] : value
    });
  }

  handleSubmit(e){

    e.preventDefault()    
    this.props.onAgregarTarea(this.state)
    
    console.log("Enviando la informacion")
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group my-1">
            <input
              type="text"
              name="titulo"
              onChange={this.handleInput}
              placeholder="Title"
              className="form-control"
            />
          </div>

          <div className="form-group my-1">
            <input
              type="text"
              name="responsale"
              onChange={this.handleInput}
              placeholder="Responsalbe"
              className="form-control"
            />
          </div>

          <div className="form-group my-1">
            <input
              type="text"
              name="escripcion"
              onChange={this.handleInput}
              placeholder="Descripcion"
              className="form-control"
            />
          </div>

          <div className="form-group my-1">
            <select
              name="prioridad"
              className="form-control"
              onChange={this.handleInput}
            >              
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            {" "}
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default FormularioTareas;
