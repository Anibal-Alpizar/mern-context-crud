import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { HomePage, NotFoundPage, PostFormPage } from "./pages";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostFormPage />} />
            <Route path="/post/:id" element={<PostFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
