import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState({ status: false, blogData: [] });
  // fetch the existing blog from db.
  useEffect(() => {
    const url = `${process.env.REACT_APP_URL}/blogposts`;
    axios
      .get(url)
      .then(({ data }) => {
        setBlog({ status: true, blogData: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="welcome-page sec-padding text-center p-relative o-hidden bg-gray">
        <div className="container">
          <div className="row welcome-text sec-padding flex-center">
            <div className="col-md-12 mb-20px z-index-1">
              <h1 className="color-blue">Blog</h1>
            </div>
            <div className="col-md-8 text-center">
              <img alt="img" src="images/y.png" className="ml-auto mr-auto" />
            </div>
          </div>
        </div>
        <div className="pattern p-absolute"></div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-md-center">
            {!blog.status ? (
              <div className="alert alert-warning text-center">
                Fetching Blog Posts!
              </div>
            ) : (
              <>
                {blog.blogData.length === 0 ? (
                  <div className="alert alert-warning text-center">
                    No Post Available Right Now!
                  </div>
                ) : (
                  blog.blogData.map((post) => (
                    <div
                      className="col-md-8 p-4 blog-container"
                      key={post.postDate}
                    >
                      <h3 className="text-center text-upper">
                        {post.blogTitle}
                      </h3>
                      <h6 className="text-center">Posted : {post.postDate}.</h6>
                      <hr />
                      <section>
                        <p>{post.content}</p>
                      </section>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
