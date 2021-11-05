import React, { useState, useEffect } from "react";
import PostContext from "../context/postsContext";
import { getPosts, getPostsByCategory } from "../services/postService";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import CategoryContext from "../context/categoryContext";
import { getCategories } from "../services/categoryServices";

function Posts(props) {
  const [posts, setPost] = useState();
  const [categoties, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    async function getData() {
      const { data: mPosts } = await getPosts();
      const { data: categories } = await getCategories();
      setPost(mPosts);
      setCategory(categories);
    }
    getData();
  }, []);

  const handleClcik = async (c) => {
    console.log(c);
    setSelectedCategory(c.category_id);
    const { data: mPosts } = await getPostsByCategory(c.category_id);
    setPost(mPosts);
  };

  return (
    <div>
      <div className="row mt-3">
        <CategoryContext.Provider value={categoties}>
          <div className="col-md-3 col-sm-3 col-12 col-lg-3">
            <CategoryList handleClcik={handleClcik} />
          </div>
        </CategoryContext.Provider>

        <PostContext.Provider value={posts}>
          <div className="col-md-8 col-sm-8 col-12 col-lg-8">
            <PostList />
          </div>
        </PostContext.Provider>
      </div>
    </div>
  );
}

export default Posts;
