import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {
  const {description, image, location, id} = listing
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={()=>setIsFavorite(!isFavorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setIsFavorite(!isFavorite)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>deleteListing(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
