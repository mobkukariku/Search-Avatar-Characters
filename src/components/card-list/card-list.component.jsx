import { Component } from "react";
import "./card-list.styles.css"

class CardList extends Component{

    

    render(){
        const {characters} = this.props;
        return(
        <div className="cards-list">
            {characters.map((character)=>{
                return(
                    <div className="card-container" key={character.id}>
                        <img src={character.image}  alt={character.name} />
                        <h2>{character.name}</h2>
                    </div>
                );
            })}
        </div>
      );
    }
}

export default CardList;