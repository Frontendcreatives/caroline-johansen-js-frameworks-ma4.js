import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { API } from "../../constants/api";
import SearchRecipe from "./SearchRecipe";


function RecipeList() {
    
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [load, setLoad] = useState(true);
    
   useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(json => {
                setRecipes(json.results);
                setFilteredRecipes(json.results);
        })
            .catch(error => console.log(error))
            .finally(() => setLoad(false));
    }, []);
    
    const filterRec = function(e) {
    const searchInp = e.target.value.toLowerCase();
    const filterArr = recipes.filter(function(rec) { 
     
     const lowCaseTitle = rec.title.toLowerCase();
    if (lowCaseTitle.startsWith(searchInp)) {
    
        return true;
         
        }
        
        return false;
        
    });
    
    setFilteredRecipes(filterArr);
    };
        
        
if (load) {
		return <Spinner animation="border" className="spinner" />;
	}
      return (
    
      <div>
          <SearchRecipe handleSrc={filterRec} />
            <Row>
                    {filteredRecipes.map(r => {
                        const { title, thumbnail } = r;
    
                return (
					<Col sm={6} md={3} key={title}>
						<RecipeItem title={title} thumbnail={thumbnail} />
					</Col>
				    );
    
                })}
            </Row>
            </div>
    );
}
export default RecipeList;