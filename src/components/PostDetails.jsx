import React, { useState, useEffect } from "react";
import { getPost } from "../services/postService";

function PostDetails(props) {
  //   const post = props.location.post;
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const data = await getPost(parseInt(props.match.params.id));
        setPost(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [props.match.params.id]);

  return (
    <div>
      {post ? (
        <div className="row d-flex justify-content-center mt-4 ms-2 me-2">
          <div className="card  justify-content-center mb-3 col-lg-8 col-sm-8 col-md-8 col-12 ">
            <div className="card-header text-start">{post.first_name}</div>
            <div className="card-body">
              <h5 className="card-title text-start">{post.title}</h5>
              <p className="card-text text-start">{post.body}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>No Data found</div>
      )}
    </div>
  );
}

export default PostDetails;

{
}
