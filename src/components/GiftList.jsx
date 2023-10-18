import React, { useEffect, useState } from "react";
import axios from "axios";
import convert from "xml-js";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductBox = styled.div`
  display: flex;
  margin: 0;
  margin-bottom: 20px;
  width: 386px;
  height: 111px;

  box-shadow: 0px 0px 6px #c194c0;
  border: 5px solid #c194c0;
  border-radius: 10px;
  opacity: 1;
`;

export const ProductImg = styled.img`
  text-align: center;
  width: 100px;
  height: 110px;
  border-radius: 5px 0 0 5px;
`;

export const NamePriceSpace = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
  .productName {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
`;

export const Heartbutton = styled.button`
  border: none;
  background-color: white;
  height: 30px;
  width: 30px;
  padding: 0;
  font-size: 20px;
  margin-top: 8px;
`;

const GiftList = () => {
  const [finalList, setfinalList] = useState([]);

  const [productIds, setProductIds] = useState([
    4756237695, 4411811312, 3966505927, 5728375032, 4423418273, 3662022092,
    6031272155, 3647229036, 6019418682, 99285112, 3919537799,
  ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRequests = productIds.map((productId) => {
          const requestUrl = `/openapi/OpenApiService.tmall?key=${
            import.meta.env.VITE_11ST_API_KEY
          }&apiCode=ProductInfo&productCode=${productId}`;
          return axios.get(requestUrl, {
            headers: {
              openapikey: import.meta.env.VITE_11ST_API_KEY,
            },
          });
        });
        const productResponses = await Promise.all(productRequests);

        const newProducts = productResponses.map((response) => {
          return response.data;
        });

        const result = newProducts.map((product) => {
          const json = convert.xml2js(product, { spaces: 4 });
          const productId =
            json.elements[0].elements[1].elements[0].elements[0].text;
          const productName =
            json.elements[0].elements[1].elements[1].elements[0].cdata;
          const productPrice =
            json.elements[0].elements[1].elements[2].elements[0].elements[0]
              .text;
          const productImg =
            json.elements[0].elements[1].elements[3].elements[0].cdata;
          const productUrl = `https://www.11st.co.kr/products/${productId}`;
          return {
            productId,
            productName,
            productPrice,
            productImg,
            productUrl,
          };
        });

        // console.log(result);

        setProducts(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const toggleLike = (e) => {
    const productId = e.target.parentNode.id;
    setfinalList((current) => {
      if (e.target.textContent === "🤍") {
        e.target.textContent = "💖";
        return [...current, productId];
      } else {
        e.target.textContent = "🤍";
        return current.filter((id) => id !== productId);
      }
    });
  };

  useEffect(() => {
    console.log(finalList);
  }, [finalList]);

  return (
    <Container>
      {products.map((product) => (
        <ProductBox id={product.productId}>
          <a href={product.productUrl}>
            <ProductImg src={product.productImg} />
          </a>
          <NamePriceSpace>
            <div className="productName">{product.productName}</div>
            <div className="productPrice">{product.productPrice}</div>
          </NamePriceSpace>
          <Heartbutton onClick={toggleLike}>🤍</Heartbutton>
        </ProductBox>
      ))}
    </Container>
  );
};

export default GiftList;
