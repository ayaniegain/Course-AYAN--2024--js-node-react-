import React, { useMemo, useState } from "react";
import UseFetch from "../custom/UseFetch";

function RecipeList() {
  const { isLoading, apiData, serverError } = UseFetch(
    "https://dummyjson.com/recipes"
  );

  const [count, setCount] = useState(0);



  const renderedRecipes = useMemo(() => {

    console.log("first")
    return apiData?.length > 0 ? (
      apiData.map((e, index) => <li key={index}>{e.name}</li>)
    ) : (
      <p>No data available</p>
    );
  }, [apiData]);


  if (isLoading) {
    return <h4>Loading data! Please wait...</h4>;
  }

  if (serverError) {
    return <h4>Error: {serverError}</h4>;
  }


  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <ul>{renderedRecipes}</ul>
    </>
  );
}

export default RecipeList;
