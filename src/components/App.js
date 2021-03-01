import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState(null)
  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(setListings)
  },[])

  function deleteListing(id){
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
    let newListings = listings.filter(listing => listing.id !== id)
    setListings(newListings)
  }

  function handleSearch(searchTerm){
    console.log(searchTerm)
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(lists => {
      let newListings = lists.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
    setListings(newListings)
    })
    
  }


  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      {listings ? <ListingsContainer listings={listings} deleteListing={deleteListing}/> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
