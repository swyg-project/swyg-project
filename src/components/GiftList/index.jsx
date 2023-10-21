import React, { useEffect, useState } from "react";
import { getProducts } from "../../11st/getProducts";
import { promiseAll } from "../../11st/promiseAll";
import { createProductList } from "../../constructor/Product";
import * as S from "./styled";

const GiftList = ({ onFinalListChange, productIdList }) => {
  const [finalList, setfinalList] = useState([]);
  const [products, setProducts] = useState([]);

  const productCodes = JSON.parse(productIdList);

  const likeImageSrc = `${
    import.meta.env.VITE_PUBLIC_URL
  }/images/icons/핑크하트.svg`;
  const unlikeImageSrc = `${
    import.meta.env.VITE_PUBLIC_URL
  }/images/icons/빈하트.svg`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRequests = productCodes.map((productCode) => ({
          productCode: productCode,
        }));

        const newProducts = await promiseAll(getProducts, productRequests);
        const result = createProductList(newProducts);
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
      if (e.target.getAttribute("src") === unlikeImageSrc) {
        e.target.setAttribute("src", likeImageSrc);
        return [...current, productId];
      } else {
        e.target.setAttribute("src", unlikeImageSrc);
        return current.filter((id) => id !== productId);
      }
    });
  };
  useEffect(() => {
    onFinalListChange(finalList);
  }, [finalList, onFinalListChange]);

  return (
    <S.Container>
      {products.map((product) => (
        <S.ProductBox key={product.productCode} id={product.productCode}>
          <a href={product.productUrl}>
            <S.ProductImg src={product.productImage} />
          </a>
          <S.NamePriceSpace>
            <div className="productName">{product.productName}</div>
            <div className="productPrice">{product.productPrice}</div>
          </S.NamePriceSpace>
          <S.Heartbutton src={unlikeImageSrc} onClick={toggleLike} />
        </S.ProductBox>
      ))}
    </S.Container>
  );
};

export default GiftList;
