import React from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends React.Component {

  render() {
    if (!this.props.restaurants) {
        return (
            <p>Aucun resto</p>
        )
    }
    return(
        <div>
            {this.props.restaurants.map((restaurant) => {
                return <Restaurant { ... this.props} key={restaurant._id} restaurant={restaurant} />
            })}
        </div>
    )
  }
}

export default RestaurantList;
