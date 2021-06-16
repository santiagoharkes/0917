import React from "react";

function ListitaPelado() {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center">BUSTRAPITO BAROVERO</h1>

      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listita</h4>

          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="lead">Tarea Uno</span>
              <div>
                <button className="btn btn-sm btn-danger float-right mx-2">
                  Borrar
                </button>
                <button className="btn btn-sm btn-warning float-right">
                  Editar
                </button>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span className="lead">Tarea Dos</span>
              <div>
                <button className="btn btn-sm btn-danger float-right mx-2">
                  Borrar
                </button>
                <button className="btn btn-sm btn-warning float-right">
                  Editar
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Escribí algo pewitou</h4>

          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="form-control mb-2"
              placeholder="Escwibi algo pewito malwado"
            />
            <button className="btn btn-dark w-100">Agregalo ya!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListitaPelado;
