import React from 'react';

class InputCard extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.collectData = this.collectData.bind(this);
    }

    collectData(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addCard(this.state);

        this.setState({
            title: '',
            description: ''
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Enter title</label>
                    <input value={this.state.title} type="text" name="title" onChange={this.collectData}/>
                    <label htmlFor="body">Enter description</label>
                    <input value={this.state.description} type="text" name="description" onChange={this.collectData}/>
                    <button>add task</button>
                </form>
            </div>
        )
    }
} 

export default InputCard;