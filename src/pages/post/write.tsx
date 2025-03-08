import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    console.log("제목:", title);
    console.log("내용:", content);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        포스트 작성
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          작성 완료
        </Button>
      </Box>
    </Container>
  );
};

export default WritePost;
