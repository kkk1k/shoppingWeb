import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
    console.log(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product && product.choice ? "Concious choice" : ""}</div>
          <div>
            <Dropdown.Menu show>
              {product && product.size ? (product.size.map((item, index) => (
                <Dropdown.Item key={index} >
                  {item}
                </Dropdown.Item>
              ))) : ""}
            </Dropdown.Menu>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
