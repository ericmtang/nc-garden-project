import React from "react";

const Recipes = () => {
  const style1 = {
    color: "white",
    textShadow:
      "1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, 1px -1px 1px #000000",
  };
  return (
    <div style={style1}>
      <h1 className="title is-1">This is the Recipes Page</h1>
      <p>
        Orci porta non pulvinar neque laoreet suspendisse interdum consectetur.
        Duis ultricies lacus sed turpis. Tincidunt praesent semper feugiat nibh
        sed pulvinar proin gravida hendrerit. Velit sed ullamcorper morbi
        tincidunt ornare massa eget. Urna molestie at elementum eu facilisis sed
        odio. Dui id ornare arcu odio ut sem nulla pharetra diam. Scelerisque
        eleifend donec pretium vulputate sapien. Imperdiet dui accumsan sit
        amet. Lacus vestibulum sed arcu non odio euismod. Mauris in aliquam sem
        fringilla ut morbi. Odio tempor orci dapibus ultrices in. Nunc sed
        blandit libero volutpat. Nunc congue nisi vitae suscipit tellus mauris a
        diam. Faucibus vitae aliquet nec ullamcorper. Viverra orci sagittis eu
        volutpat odio. A diam maecenas sed enim ut sem viverra aliquet.
        Porttitor lacus luctus accumsan tortor posuere.
      </p>
    </div>
  );
};

export default Recipes;
