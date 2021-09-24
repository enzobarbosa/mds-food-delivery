import React from 'react';
import './styles/Restaurant.css'

class Restaurant extends React.Component {

  render() {
    if (!this.props.restaurant){
        return(
            <p>Pas de restaurants</p>
        )
    }
    return(
        <div className="restaurant">
                <div className="image"><img src={`https://strapi.myidea.fr${this.props.restaurant.Photos[0].url}`}></img>
                <h2 className="titre">{this.props.restaurant.title}</h2></div>
                <p className="description">{this.props.restaurant.description}</p>
                {/* <button onClick={this.handleEdit}>✏️</button>
                <button onClick={this.handleDelete}>🗑️</button>
                <button onClick={this.toggleFavorite}>{this.props.note.isFavorite ? '❤️' : '🤍'}</button> */}
        </div>
    )
    }
}


export default Restaurant;
