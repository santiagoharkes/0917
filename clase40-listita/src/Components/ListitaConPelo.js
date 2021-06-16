import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function ListitaConPelo() {
  // Cómo seteabamos el valor inicial de un estado?

  const [tareitas, setTareitas] = useState([
    { id: 1, texto: "Holis" },
    { id: 2, texto: "chaupis" },
    { id: 3, texto: "meduermis" },
  ]);

  return (
    <Container fluid>
      <h1 className="text-center">BUSTRAPITO BAROVERO</h1>

      <Row>
        <Col xs={12} md={4}>
          <h4 className="text-center">Escribí algo pewitou</h4>

          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Escwibi algo pewito malwado"
              />
            </Form.Group>
            <Button variant="dark" className="w-100" type="submit">
              Agregar
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={8}>
          <h4 className="text-center">Listita</h4>

          <ListGroup as="ul">
            {tareitas.map((valor) => (
              <ListGroup.Item
                key={valor.id}
                as="li"
                className="d-flex justify-content-between"
              >
                <span className="lead">{valor.texto}</span>

                <div>
                  <Button variant="danger" size="sm" className="mx-2">
                    Borrar
                  </Button>
                  <Button variant="warning" size="sm" className="mx-2">
                    Editar
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ListitaConPelo;
