import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  //category search; State either = default "All" or selected category
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )

  //search characters; convert both the search characters and current items characters to lowercase, return the ones that match
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  //onItemFormSubmit is passed via prop to Itemform, event handling of submission and State done there, pass it on to the App 
  //onSearchChange passed via prop to filter component, when that executes in the Filter component, State gets set here, in parent.
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        search={search}
        onCategoryChange={handleCategoryChange} 
        onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
