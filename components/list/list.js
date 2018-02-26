import React from 'react';

import Card from '../card/card'

class List extends React.Component {
    constructor() {
        super()
    };

    render () {
        const { cards } = this.props;
        return (
            <div className="list">
                { cards.map((item) => 
                    <Card item={item} key={item.id} deleteCard={this.props.deleteCard} handlePopup={this.props.handlePopup}/>
                )}
            </div>
        )
    }
}

export default List;