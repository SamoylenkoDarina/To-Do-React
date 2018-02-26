import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/list/list';
import InputCard from '../../components/inputCard/inputCard';
import Popup from '../edit/edit';
import { addCard, deleteCard, editCard } from '../../store/actions';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            popupId: '',
        }
        this.handlePopup = this.handlePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.collectPopupData = this.collectPopupData.bind(this);
    }

    handlePopup (id) {
        this.setState({
            popupId: id
        })
    }

    closePopup() {
        this.setState({
            popupId: ''
        })
    }

    collectPopupData(data) {
        this.props.editCard(this.state.popupId, data);
        this.closePopup();
    }

    renderPopup () {
        const card = this.props.cards.find((item) => item.id === this.state.popupId)
        return <Popup card={card} closePopup={this.closePopup} collectPopupData={this.collectPopupData}/>
    }

    render () {
        return (
            <div>
                <InputCard addCard={this.props.addCard}/>
                <List cards={this.props.cards} deleteCard={this.props.deleteCard} handlePopup={this.handlePopup}/>
                {this.state.popupId && this.renderPopup()}
            </div>
            
        )
    }
} 

const mapStateToProps = (state) => {
    const { cards } = state
    return {
        cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCard: (data) => {dispatch(addCard(data))},
        deleteCard: (cardId) => {dispatch(deleteCard(cardId))},
        editCard: (cardId, data) => {dispatch(editCard(cardId, data))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);