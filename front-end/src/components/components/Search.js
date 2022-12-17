/* eslint-disable */
import React from "react";

function Search(){
    return(
        <form action="">
          <div className="search-container">
            <input type="text" placeholder="Search Category" className="search-bar" />
            <button className="search-category-button">
              <p>Category</p><img src="../ASSETS/Category_Button_Arrow_Vector.svg" alt="" />
            </button>
          </div>
        </form>
    );
}

export default Search;