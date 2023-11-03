import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
function ProductAll() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState();
  const [query, setQuery] = useSearchParams([]);
  const getProducts = async () => {
    try {
      let searchQuery = query.get('q') || "";
      console.log("쿼리값은",searchQuery)
      let url = `https://my-json-server.typicode.com/kkk1k/shoppingWeb/products?q=${searchQuery}`;
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setProductList(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정합니다.
    }
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <Container>
          <Row>
            {productList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu} className="hover01"/>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default ProductAll;
