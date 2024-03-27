import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  // const products = [
  //     {
  //       id: 1,
  //       name: "다이슨 슈퍼소닉",
  //       email: "Eliseo@gardner.biz",
  //       body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
  //     },
  //     {
  //       id: 2,
  //       name: "SSD 1TB",
  //       email: "Jayne_Kuhic@sydney.com",
  //       body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
  //     },
  //   ];
  return (
    <section className="ProductList">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
}
