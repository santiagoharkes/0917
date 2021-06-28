import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function ListitaConPelo() {
  // Cómo seteabamos el valor inicial de un estado?

  const [tareitas, setTareitas] = useState([]);
  const [tareaInput, setTareaInput] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaAEditar, setTareAEditar] = useState(null);
  const [errorState, setErrorState] = useState("");

  console.log({ modoEdicion });
  console.log({ tareaAEditar });

  const onInputchange = (e) => {
    setTareaInput(e.target.value);
    setErrorState("");
  };

  const onInputAEditarChange = (e) => {
    setTareAEditar({ ...tareaAEditar, texto: e.target.value });
  };

  const agregarUnCoso = (e) => {
    e.preventDefault();

    if (tareaInput === "") {
      setErrorState("No podés agregar cosas vacías");
      return;
    }

    setTareitas([
      ...tareitas,
      {
        id: uuidv4(),
        texto: tareaInput,
      },
    ]);

    setTareaInput("");
  };

  const actualizarTarea = (e) => {
    e.preventDefault();

    const nuevoArray = tareitas.map((valor) =>
      valor.id === tareaAEditar.id ? tareaAEditar : valor
    );

    setTareitas(nuevoArray);
    setModoEdicion(false);
    setTareAEditar(null);
  };

  const borrarUnCoso = (loQueReciboPorParametro) => {
    const nuevoArray = tareitas.filter(
      (valor) => valor.id !== loQueReciboPorParametro
    );
    setTareitas(nuevoArray);
  };

  const editarTarea = (tareita) => {
    setTareaInput("");
    setModoEdicion(true);
    setTareAEditar(tareita);
  };

  return (
    <Container fluid>
      <h1 className="text-center">BUSTRAPITO BAROVERO</h1>

      <Row>
        <Col xs={12} md={4}>
          <h4 className="text-center">Escribí algo pewitou</h4>

          <Form onSubmit={modoEdicion ? actualizarTarea : agregarUnCoso}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Escwibi algo pewito malwado"
                onChange={modoEdicion ? onInputAEditarChange : onInputchange}
                value={modoEdicion ? tareaAEditar.texto : tareaInput}
              />
            </Form.Group>
            <Button
              variant={modoEdicion ? "success" : "dark"}
              className="w-100"
              type="submit"
            >
              {modoEdicion ? "Actualizar" : "Agregar"}
            </Button>
            {errorState && <p>{errorState}</p>}
          </Form>
        </Col>
        <Col xs={12} md={8}>
          <h4 className="text-center">Listita</h4>

          <ListGroup as="ul">
            {tareitas.length > 0 ? (
              tareitas.map((valor) => (
                <ListGroup.Item
                  key={valor.id}
                  as="li"
                  className="d-flex justify-content-between"
                >
                  <span className="lead">{valor.texto}</span>

                  <div>
                    <Button
                      variant="danger"
                      size="sm"
                      className="mx-2"
                      onClick={() => borrarUnCoso(valor.id)}
                    >
                      Borrar
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      className="mx-2"
                      onClick={() => editarTarea(valor)}
                    >
                      Editar
                    </Button>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <p>No hay tareitas...</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ListitaConPelo;
