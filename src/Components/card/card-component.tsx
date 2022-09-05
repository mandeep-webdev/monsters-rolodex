//import { Component } from 'react';
import {Monster} from '../../App'
import './card.styles.css';

type CardProps =  {
  monster : Monster;
}
const Card = ({ monster} : CardProps ) => {
  const {id, name, email} =  monster
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
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
export default Card;
