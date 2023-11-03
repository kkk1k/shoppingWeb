import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item, className }) {
  const navigate = useNavigate();
  const gotoDetail = (id) => {
    console.log(id)
    navigate(`/detail/${id}`);
  };
  return (
    <div className={className}>
      <img src={item?.img} alt="사진" onClick={() => gotoDetail(item.id)}/>
      <div>{item?.choice ? "concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item.new ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard;
