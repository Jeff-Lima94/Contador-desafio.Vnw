import "./styles.css";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb5607;
  width: 100%;
  height: 600px;
  text-align: center;
  font-size: 40px;
`;

const Btn = styled.button`
  width: 80px;
  height: 60px;
  border: solid 2px;
  background-color: #8338ec;
  cursor: pointer;
  margin-top: 50px;
`;

class Contador extends Component {
  state = {
    numero: 0
  };

  adicionar = () => {
    if (this.state.numero <= 9) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  subtrair = () => {
    if (this.state.numero >= 1)
      this.setState({
        numero: this.state.numero - 1
      });
  };

  zerar = () => {
    this.setState({
      numero: 0
    });
  };

  render() {
    return (
      <Container>
        <section>
          <h1>Contador Vai na Web </h1>
          <h2>{this.state.numero}</h2>
          <Btn onClick={this.adicionar}>+</Btn>
          <Btn onClick={this.subtrair}>-</Btn>
          <Btn onClick={this.zerar}>Zerar</Btn>
        </section>
      </Container>
    );
  }
}
export default Contador;
