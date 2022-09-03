import { Component } from 'react';

import './card-list.styles.css';

import CardComponent from '../card/card-component';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monsters) => {
          const { name, email, id } = monsters;
          return (
            <CardComponent
              monsterName={name}
              monsterId={id}
              monsterEmail={email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
