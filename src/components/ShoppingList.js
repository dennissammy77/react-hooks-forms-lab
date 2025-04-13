import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
    setSearchCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  function onItemFormSubmit(newItem){
    setItems([
      ...items,
      newItem
    ]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={searchCategory} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.filter((item)=>item.name.toLowerCase().includes(searchCategory.toLowerCase())).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
