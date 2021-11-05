// import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import NotFound from "./components/common/NotFound";
import Navbar from "./components/common/Navbar";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import Register from "./components/Register";
import PostDetails from "./components/PostDetails";
import Task from "./components/Task";
import CartContext from "./context/cartContext";
import { CartProvider } from "./context/cartContext";
import CartPage from "./components/CartPage";

function App() {
  return (
    <CartProvider>
      <div className="App container">
        <Navbar />
        <div>
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/post-details/:id" component={PostDetails} />
            <Route path="/creat-edit-post/:id" component={NewPost} />
            <Route path="/creat-edit-post" component={NewPost} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" component={NotFound} />

            {/* <Route path="/cartPage" exact component={CartPage} />
            <Route path="/" exact component={Task} /> */}
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
