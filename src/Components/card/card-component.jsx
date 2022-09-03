//import { Component } from 'react';

import './card.styles.css';

const CardComponent = ({ monsterId, monsterName, monsterEmail }) => {
  return (
    <div className="card-container" key={monsterId}>
      <img
        src={`https://robohash.org/${monsterId}?set=set2`}
        alt={`monster ${monsterName}`}
      />
      <h2>{monsterName}</h2>
      <p>{monsterEmail}</p>
    </div>
  );
};
// class CardComponent extends Component {
//   render() {
//     return (
//       <div className="card-container" key={this.props.monsterId}>
//         <img
//           src={`https://robohash.org/${this.props.monsterId}?set=set2`}
//           alt={`monster ${this.props.monsterName}`}
//         />
//         <h2>{this.props.monsterName}</h2>
//         <p>{this.props.monsterEmail}</p>
//       </div>
//     );
//   }
// }
export default CardComponent;
