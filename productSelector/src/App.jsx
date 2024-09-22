import React from 'react'
import './App.css'
import { useState } from 'react';

const products = [
  { id: 1, name: 'Leather Bag', category: 'bags' },
  { id: 2, name: 'Sports Watch', category: 'watches' },
  { id: 3, name: 'Aviator Sunglasses', category: 'sunglasses' },
  { id: 4, name: 'Soccer Ball', category: 'sports' },
  { id: 5, name: 'Formal Watch', category: 'watches' },
  { id: 6, name: 'Tote Bag', category: 'bags' },
  { id: 7, name: 'Running Shoes', category: 'sports' }
];


function App(){
  const [selectedCategories, setSelectedCategories] = useState([]);

  function handleClick(category){
     setSelectedCategories((prevSelected)=>
      prevSelected.includes(category) ? prevSelected.filter((c)=> c != category) : [...prevSelected, category]
    );
  };

  const filteredProducts = products.filter((product)=>
  selectedCategories.length == 0 || selectedCategories.includes(product.category)
  );
  console.log(selectedCategories);
  return(
    <div>
        <div className='button-group'>
          {
            ['bags', 'watches', 'sunglasses', 'sports'].map((category)=>
            <button
            key={category}
            onClick={()=>handleClick(category)}
            className={selectedCategories.includes(category) ? 'active' : ""}>{category}</button>
            )
          }
        </div>


        <div className='product-list'>
          { filteredProducts.length > 0 ? (
            filteredProducts.map((product)=>(
               <div key={product.id} className='product-item'>{product.name}</div>
            ))
          ):(<div>No product in the container</div>)
          }
        </div>
       
        
    </div>
  )
}

export default App;