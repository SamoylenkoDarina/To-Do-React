import React from 'react';
import ReactDom from 'react-dom';

class Card extends React.Component {
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePopupClick = this.handlePopupClick.bind(this);
    }
    
    handleClick() {
        this.props.deleteCard(this.props.item.id)
    }

    handlePopupClick () {
        console.log('olollo')
        this.props.handlePopup(this.props.item.id)
    }

    render () {
        const { item } = this.props
        return (
            <div className='card'>
                { item.data.title }
                <button onClick={this.handlePopupClick}>edit</button>
                <button onClick={this.handleClick}>X</button>
            </div>
        )
    }
} 

export default Card;