function GiftLast() {
  const urlParams = new URLSearchParams(window.location.search);
  const productList = urlParams.getAll("productId");
  console.log(productList);

  return <div>LastPresent페이지 입니다.</div>;
}
export default GiftLast;
