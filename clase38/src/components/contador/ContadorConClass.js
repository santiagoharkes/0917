import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: this.props.numerito,
    };

    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  componentDidMount() {
    console.log("Se montó el componente");
  }

  componentDidUpdate() {
    console.log("Se actualizó el componente");
  }

  // componentWillUnmount() {

  // }

  render() {
    return <h1>Jupiter {this.state.contador}</h1>;
  }
}

export default Contador;
