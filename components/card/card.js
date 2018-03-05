import React from 'react';
import ReactDom from 'react-dom';
import styles from './card.scss'

class Card extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            status: 'wait',
        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handlePopupClick = this.handlePopupClick.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    
    handleDeleteClick(e) {
        e.stopPropagation();
        this.props.deleteCard(this.props.item.id)
    }

    handlePopupClick () {
        console.log('olollo')
        this.props.handlePopup(this.props.item.id)
    }

    handleCheckbox (e) {
        e.stopPropagation();
        this.setState({
            status: 'done'
        })
    }

    render () {
        const { item } = this.props
        return (
            <div className={styles.card} onClick={this.handlePopupClick}>
                { item.data.title }
                <button onClick={this.handleDeleteClick}>X</button>
                <input type='checkbox' onClick={this.handleCheckbox}/>
            </div>
        )
    }
} 

export default Card;