// 삭제 -> 앱 라우터 생성

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../routes/layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../routes/Profile";
import PostDetail from "../routes/post/PostDetail";
import PostWrite from "../routes/post/PostWrite";
import PostEdit from "../routes/post/PostEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/post-write" element={<PostWrite />} />
          <Route path="/post-edit" element={<PostEdit />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
