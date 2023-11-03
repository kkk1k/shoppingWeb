import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


function Navbar({authenticate, setAuthenticate}) {
  const menuList = ['여성', '남성', 'Divided', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  const navigate = useNavigate();
  const GotoLogin = () => {
    navigate("/login")
    
  }
  const GotoLoginout= () => {
    navigate("/login")
    setAuthenticate(false)
  }
  const search = (event) => {
    if(event.key === "Enter"){
      //입력한 검색어를 읽어와서 url을 바꿔줌
      let keyword = event.target.value;
      //쿼리 이용
      navigate(`/?q=${keyword}`)

    }
  }
  const GotoHome = () => {
    navigate("/")
  }
  return (
    <div>
      <div>
        <div className="LoginButton ">
          <FontAwesomeIcon icon={faUser} />
          
          {authenticate ? <div onClick={GotoLoginout}>로그아웃</div> : <div onClick={GotoLogin}>로그인</div>}
        </div>
      </div>

      <div className="nav-section">
        <img alt="HM Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png" width={100} onClick={GotoHome}/>
      </div>
      <div className="menu_area">
        
          <ul className="menu-list">
            {menuList.map(menu=><li>{menu}</li>)}
          </ul>
        
          <div className="search-box landing-search-box">
          
          <input type="text" onKeyDown={(event)=>search(event)}  />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
