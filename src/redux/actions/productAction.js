function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    try {
      let url = `https://my-json-server.typicode.com/kkk1k/shoppingWeb/products?q=${searchQuery}`;
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
}

export const productAction = { getProducts };
