// 📁 routes/post/PostDetail.tsx
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams(); // /post/:id 형태라면 id 사용 가능
  return <h1>📝 포스트 상세보기 (ID: {id})</h1>;
}
