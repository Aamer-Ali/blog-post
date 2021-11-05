import React, { useContext } from "react";
import PostContext from "../context/postsContext";
import { Link } from "react-router-dom";

function PostList(props) {
  const posts = useContext(PostContext);
  const MAX_LENGTH = 50;

  return (
    <div>
      {posts
        ? posts.map((post) => (
            <div key={post.post_id} className="card mb-3">
              <div className="card-header text-start d-flex justify-content-between">
                <div>
                  {post.first_name} {post.last_name}
                </div>
                <div>Created At : {post.created_at}</div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-start">{post.title}</h5>
                <p className="card-text text-start">
                  {post.body.substring(0, MAX_LENGTH)}....
                  <Link
                    to={{
                      pathname: `/post-details/${post.post_id}`,
                      post: post,
                    }}
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default PostList;
