import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  //     {
  //       id: 2,
  //       name: "SSD 1TB",
  //       email: "Jayne_Kuhic@sydney.com",
  //       body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
  //     },

  // [axios 요청 후]
  //     {
  //       postId:2
  //       id: 2,
  //       name: "SSD 1TB",
  //       email: "Jayne_Kuhic@sydney.com",
  //       body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
  //     },
  return (
    <Link to={`/products/${product.id}`} className="ProductItem">
      <ul>
        <li>상품명: {product.name} </li>
        <li>상세설명: {product.body.slice(0, 80)} </li>
      </ul>
    </Link>
  );
}
