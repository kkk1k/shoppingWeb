import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const menuList = ['여성', '남성', 'Divided', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  return (
    <div>
      <div>
        <div className="LoginButton">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav-section">
        <img alt="HM Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png" width={100}/>
      </div>
      <div className="menu_area">
        
          <ul className="menu-list">
            {menuList.map(menu=><li>{menu}</li>)}
          </ul>
        
          <div className="search-box landing-search-box">
          
          <input type="text"  />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
