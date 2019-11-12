import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.sendEmail = this.sendEmail.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleAssuntoChange = this.handleAssuntoChange.bind(this)
    this.handleMesageChange = this.handleMesageChange.bind(this)

    this.state = {
      name: '',
      email: '',
      assunto: '',
      mensagem: ''
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleAssuntoChange(event) {
    this.setState({ assunto: event.target.value });
  }

  handleMesageChange(event) {
    this.setState({ mensagem: event.target.value });
  }

  sendEmail() {
    const nome = this.state.name;
    const email = this.state.email;
    const assunto = this.state.assunto;
    const mensagem = this.state.mensagem;
    (async () => {
      const res = await axios.post('http://localhost:3001/contato', {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
      })
    })()
  }

  componentDidMount() {
    (async () => {
      const res = await axios.get('http://localhost:3001')
      console.log(res)
    })()
  }
  render() {
    return (
      <>
        <span>Nome</span>
        <input onChange={this.handleNameChange} value={this.state.name} />
        <span>E-mail</span>
        <input type='email' onChange={this.handleEmailChange} value={this.state.email} />
        <span>Assunto</span>
        <input onChange={this.handleAssuntoChange} value={this.state.assunto} />
        <span>Mensagem</span>
        <textarea onChange={this.handleMesageChange} value={this.state.mensagem}></textarea>
        <button onClick={this.sendEmail}>Enviar</button>
      </>
    )
  }
}

export default App;
