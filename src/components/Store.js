import React from "react";

const Store = () => {
  const style1 = {
    color: "white",
    textShadow:
      "1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, 1px -1px 1px #000000",
  };
  return (
    <div style={style1}>
      <h1 className="title is-1">This is the Store Page</h1>
      <p>
        Bibendum enim facilisis gravida neque convallis a cras semper. Sit amet
        consectetur adipiscing elit ut aliquam purus sit. Tellus orci ac auctor
        augue. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        Fermentum leo vel orci porta non pulvinar neque laoreet. Justo nec
        ultrices dui sapien eget mi proin sed libero. Cursus vitae congue mauris
        rhoncus aenean vel elit. Fermentum odio eu feugiat pretium nibh ipsum.
        Suspendisse in est ante in nibh mauris cursus. Cursus vitae congue
        mauris rhoncus aenean vel elit. Quis auctor elit sed vulputate mi sit
        amet mauris commodo.
      </p>
    </div>
  );
};

export default Store;
