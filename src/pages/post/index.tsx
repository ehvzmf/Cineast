import { Container, Typography, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4">포스트 제목 (ID: {postId})</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            포스트 내용이 여기에 표시됩니다.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Post;
