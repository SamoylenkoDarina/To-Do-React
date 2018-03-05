import React from 'react';

import Card from '../card/card';
import styles from './list.scss';

class List extends React.Component {
    constructor() {
        super()
    };

    render () {
        const { cards } = this.props;
        return (
            <div className={styles.list}>
                { cards.map((item) => 
                    <Card item={item} key={item.id} deleteCard={this.props.deleteCard} handlePopup={this.props.handlePopup}/>
                )}
            </div>
        )
    }
}

export default List;