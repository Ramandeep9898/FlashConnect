import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header.Component/header";
import { LeftAside } from "./Components/LeftAside.Component/LeftAside";
import { NewPost } from "./Components/NewPost.Component/NewPost";
import { Comment } from "./Components/Comment.Component/Comment";
import { RightAside } from "./Components/RightAside.component/RightAside";

function App() {
  return (
    <>
      <div className="App">
        {/* <Header />
        <LeftAside /> */}
        {/* <NewPost /> */}
        {/* <Comment /> */}
        <RightAside />
      </div>
    </>
  );
}

export default App;
