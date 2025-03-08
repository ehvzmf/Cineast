import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState(`기존 제목 (ID: ${postId})`);
  const [content, setContent] = useState("기존 포스트 내용입니다.");

  const handleSave = () => {
    console.log("수정된 제목:", title);
    console.log("수정된 내용:", content);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        포스트 수정 (ID: {postId})
      </Typography>
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="제목"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="내용"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          저장
        </Button>
      </Box>
    </Container>
  );
};

export default EditPost;
