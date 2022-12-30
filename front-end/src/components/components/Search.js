/* eslint-disable */
import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Search(){
    return(
        <form action="">
          <div className="search-container">
            <input type="text" placeholder="Search Category" className="search-bar" />
            {/* <button className="search-category-button">
              <p>Category</p><img src="../ASSETS/Category_Button_Arrow_Vector.svg" alt="" />
            </button> */}

            <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-custom-1" className="search-category-button" style={{
            "backgroundColor": "#FF1684", 
            "color": "white", 
            "fontFamily": "Poppins", 
            "fontStyle": "normal",
            "fontWeight": "400",
            "fontSize": "20px",
            "line-height": "30px", 
            "border": "none", 
            "borderRadius": "10px"
          }}>Category</Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item eventKey="1" onClick={() => alert("click")}>Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">
              Active Item
            </Dropdown.Item>

            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          </div>
        </form>
    );
}

export default Search;