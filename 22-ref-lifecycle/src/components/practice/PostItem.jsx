export default function PostItem({ post }) {
  // post ={id:1, title:'aaaa', body:'aaaa', userId:1}
  return (
    <div className="post-container">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      {/* body가 너무 긴 경우 120글자까지만
      잘라서 가지고 오기 위해서 slice 사용 */}
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
}
