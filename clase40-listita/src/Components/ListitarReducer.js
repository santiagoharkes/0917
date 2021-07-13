import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function ListitaReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_CHANGE":
        if (state.modoEdicion) {
          return {
            ...state,
            tareaEditar: { ...state.tareaEditar, texto: action.payload },
          };
        } else {
          return { ...state, tareaInput: action.payload };
        }

      case "ADD_TODO":
        return {
          ...state,
          lista: [...state.lista, { texto: state.tareaInput, id: uuidv4() }],
          tareaInput: "",
        };

      case "DELETE_TODO":
        return { ...state, lista: action.payload };

      case "EDIT_MODE":
        return {
          ...state,
          modoEdicion: !state.modoEdicion,
          tareaEditar: action.payload,
          tareaInput: "",
        };

      case "TODO_EDITED":
        const newTodoEdited = state.lista.map((valor) =>
          valor.id === state.tareaEditar.id ? state.tareaEditar : valor
        );

        return {
          ...state,
          lista: newTodoEdited,
          tareaEditar: null,
          modoEdicion: !state.modoEdicion,
        };

      default:
        return state;
    }
  };

  const initialState = {
    lista: [],
    tareaInput: "",
    modoEdicion: false,
    tareaEditar: null,
    errorState: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e) => {
    dispatch({ type: "HANDLE_CHANGE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.modoEdicion) {
      dispatch({ type: "TODO_EDITED" });
    } else {
      dispatch({ type: "ADD_TODO" });
    }
  };

  const handleDelete = (id) => {
    const newTodo = state.lista.filter((item) => item.id !== id);
    dispatch({ type: "DELETE_TODO", payload: newTodo });
  };

  const handleEdit = (item) => {
    dispatch({ type: "EDIT_MODE", payload: item });
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

export default ListitaReducer;
