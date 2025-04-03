import React from "react";
import UseFetch from "../../custom/UseFetch";

function PageOne() {
  let { isLoading, apiData, serverError } = UseFetch(
    "https://dummyjson.com/recipes"
  );

  // console.log({ isLoading, apiData, serverError });

  if (isLoading) {
    return <h2>Loading......</h2>;
  }

  return (
    <div>
      {apiData?.length > 0
        ? apiData.map((e) => <h2 key={e.id}>{e.cuisine}</h2>)
        : null}
    </div>
  );
}

export default PageOne;
