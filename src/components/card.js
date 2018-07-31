import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjective1: '',
            celeb1: '',
            adjective2: '',
            noun1: '',
            num1: '',
            num2: '',
            noun2: '',
            adjective3: '',
            celeb2: '',
            celeb3: '',
            adjective4: '',
            noun3: '',
            celeb4: '',
            adjective5: '',
            contentVisible: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        this.setState({ contentVisible: !this.state.contentVisible })
    }

    render() {

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.adjective1, name: 'adjective1'},
            {title: 'Celebrity', state: this.state.celeb1, name: 'celeb1'},

            {title: 'Adjective', state: this.state.adjective2, name: 'adjective2'},
            {title: 'Noun', state: this.state.noun1, name: 'noun1'},
            {title: 'Number', state: this.state.num1, name: 'num1'},
            {title: 'Number', state: this.state.num2, name: 'num2'},

            {title: 'Noun', state: this.state.noun2, name: 'noun2'},
            {title: 'Adjective', state: this.state.adjective3, name: 'adjective3'},
            {title: 'Celebrity', state: this.state.celeb2, name: 'celeb2'},
            {title: 'Celebrity', state: this.state.celeb3, name: 'celeb3'},

            {title: 'Adjective', state: this.state.adjective4, name: 'adjective4'},
            {title: 'Noun', state: this.state.noun3, name: 'noun3'},
            {title: 'Celebrity', state: this.state.celeb4, name: 'celeb4'},
            {title: 'Adjective', state: this.state.adjective5, name: 'adjective5'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card_inputs">
                    {
                        inputData.map(data => Input( (data), this.handleInputChange ))
                    }
                </div>
                <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;