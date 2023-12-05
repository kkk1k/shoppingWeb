import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";
function ProductAll() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useSearchParams([]);
  const productList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은", searchQuery);
    dispatch(productAction.getProducts(searchQuery));
    setLoading(false);
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
            {productList &&
              productList.map((menu) => (
                <Col lg={3}>
                  <ProductCard item={menu} className="hover01" />
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default ProductAll;
