import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  //   console.log(products); //array [{},{},{},,,]
  //   const params = useParams();
  //   console.log(params); //{productId: '2'}
  //   console.log(params.productId); //{productId: '2'}

  const { productId } = useParams();
  console.log(productId);

  const navigate = useNavigate();
  //   filter: 배열을 리턴,
  //   params의 productId와 product.id 가 같은 것 찾기
  //   const targetProduct ={ id:2, ...}
  //   const targetProduct = products.filter(
  //     (product) => product.id === Number(productId)
  //   )[0];
  const [targetProduct] = products.filter(
    (product) => product.id === Number(productId)
  );

  console.log(targetProduct); //{postId, id(판매번호), name(상품명), body(상세설명), email(판매자)}

  if (!targetProduct) {
    return <main>존재하지 않는 상품입니다.</main>;
  }
  return (
    <main>
      <h5>상세페이지</h5>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매 번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
