import React from 'react'

function ProductCard({item}) {
  return (
    <div className='hover'>
        <img src={item?.img} alt='사진' />
        <div>{item?.choice ? "concious choice": ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        <div>{item.new ? "신제품":""}</div>
    </div>
  )
}

export default ProductCard