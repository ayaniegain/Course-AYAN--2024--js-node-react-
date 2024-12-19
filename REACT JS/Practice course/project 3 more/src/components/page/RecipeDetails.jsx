import React from "react";
import { useLocation, useParams } from "react-router-dom";

function RecipeDetails() {
  let { id } = useParams();
  let { pathname } = useLocation();

  console.log(location);
  return (
    <>
      <h2>RecipeDetails No {id}</h2>
      <h4>path name {pathname}</h4>
    </>
  );
}

export default RecipeDetails;
