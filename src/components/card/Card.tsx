import { Component } from 'react';
import { Character } from '../../types/api';

interface CardProps {
  item: Character;
}

class Card extends Component<CardProps> {
  render() {
    const { item } = this.props;
    return (
      <div>
        <span>{item.name}</span>
      </div>
    );
  }
}

export default Card;
