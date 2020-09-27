import React, { Component } from 'react';

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        name: this.props.name
    }
    
    constructor(props) {
        super(props);
        
        this.setTipo = this.setTipo.bind(this);
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value });
    }

    setName(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        const { tipo, name } = this.state
        return (
            <div>
                <h1>{tipo} {name}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="name..."
                    value={name} onChange={e => this.setName(e)} />
            </div>
        )
    }
}