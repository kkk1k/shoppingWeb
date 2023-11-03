import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

function ProductAll() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState();
  const getProducts = async () => {
      try {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        if (response.ok) {
          let data = await response.json();
          setProductList(data);
          
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }  finally {
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정합니다.
      }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {setLoading? <div>loading</div>:<Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} >
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>}
      
    </div>
  );
}

export default ProductAll;
