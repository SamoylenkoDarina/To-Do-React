import React from 'react';

import styles from './details.scss';

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
        this.editData = this.editData.bind(this);
        this.renderData = this.renderData.bind(this);
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

    editData() {
        console.log('edit')
        return (
            <div>
                <label htmlFor="title">Enter title</label>
                <input value={this.state.title} type="text" name="title" onChange={this.collectData}/>
                <label htmlFor="body">Enter description</label>
                <input value={this.state.description} type="text" name="description" onChange={this.collectData}/>
            </div>
        )
    }

    renderData() {
        return (
            <div className={styles.details}>
                <div onClick={this.editData}>{this.state.title}</div>
                <div>{this.state.description}</div>
                <button onClick={this.handleSubmit}>add task</button>
                <button onClick={this.handleClick}>x</button> 
            </div>
        )
    }

    render() {
        const props = this.props;

        return (
            <div>
                <div onClick={this.editData}>{this.renderData}</div>
            </div>
        )
    }
}

export default Popup;

{/* <label htmlFor="title">Enter title</label>
<input value={this.state.title} type="text" name="title" onChange={this.collectData}/>
<label htmlFor="body">Enter description</label>
<input value={this.state.description} type="text" name="description" onChange={this.collectData}/> */}

{/* <div className={styles.popup}>
                    <div onClick={this.editData}>{this.state.title}</div>
                    <div>{this.state.description}</div>
                    <button onClick={this.handleSubmit}>add task</button>
                    <button onClick={this.handleClick}>x</button>
                </div> */}