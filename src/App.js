import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header.Component/header";
import { LeftAside } from "./Components/LeftAside.Component/LeftAside";
import { NewPost } from "./Components/NewPost.Component/NewPost";
import { Comment } from "./Components/Comment.Component/Comment";

function App() {
  return (
    <>
      <div className="App">
        {/* <Header />
        <LeftAside /> */}
        {/* <NewPost /> */}
        <Comment />
      </div>
    </>
  );
}

export default App;
