import React from "react";

const Blog = () => {
  const style1 = {
    color: "white",
    textShadow: "1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, 1px -1px 1px #000000",
  };
  return (
    <div style={style1}>
      <h1 className="title is-1">This is the Blog Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.

        Hello I am going to change something right here!
      </p>
    </div>
  );
};

export default Blog;
