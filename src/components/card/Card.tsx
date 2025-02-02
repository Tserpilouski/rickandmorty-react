import { Component } from 'react';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  link: string;
}

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
