import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.card.data.title,
            description: this.props.card.data.description,
        };
        this.collectData = this.collectData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    collectData(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title === '') {
            return
        }
        this.props.collectPopupData(this.state);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.closePopup()
    }

    render() {
        const props = this.props;

        return (
            <div>
                <form>
                    <label htmlFor="title">Enter title</label>
                    <input value={this.state.title} type="text" name="title" onChange={this.collectData}/>
                    <label htmlFor="body">Enter description</label>
                    <input value={this.state.description} type="text" name="description" onChange={this.collectData}/>
                    <button onClick={this.handleSubmit}>add task</button>
                    <button onClick={this.handleClick}>x</button>
                </form>
            </div>
        )
    }
}

export default Popup;