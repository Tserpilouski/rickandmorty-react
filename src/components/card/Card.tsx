import { Component } from 'react';
import { Character } from '../../types/api';

import styles from './card.module.scss';

interface CardProps {
  item: Character;
}

class Card extends Component<CardProps> {
  render() {
    const { item } = this.props;
    return (
      <div className={styles.card}>
        <img className={styles.card_img} src={item.image} />
        <div className={styles.card_list}>
          <h3>Description</h3>
          <ul className={styles.description}>
            <li>Name: {item.name}</li>
            <li>Gender: {item.gender}</li>
            <li>Status: {item.status}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
