import React, { useEffect, useState } from "react";
import data from "./data";
function Accordian() {
  const [accDetails, setAccDetails] = useState([]);

  function getAccordianData() {
    setAccDetails(data.map((item) => ({ ...item, ["open"]: false })));
  }

  useEffect(() => {
    getAccordianData();
  }, []);

  function handleShowAnser(id) {
    setAccDetails((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, ["open"]: !item.open } : item
      )
    );
  }

  return (
    <>
      {accDetails && !accDetails.length == 0 ? (
        <>
          <section className="flex justify-center items-center">
            <h2 className="text-orange-500 text-2xl font-bold">My Accordian</h2>
          </section>

          {accDetails.map((acc) => (
            <div
              key={acc.id}
              className="flex flex-col items-center justify-center mt-4  "
            >
              <section className="flex p-3 border-2 border-amber-700 w-1/2 bg-amber-200 justify-between">
                <h1 className="text-xl">{acc.question}</h1>
                <button onClick={() => handleShowAnser(acc.id)}>
                  {!acc.open ? "➕" : "➖"}
                </button>
              </section>
              {acc.open && (
                <section className="text-center font-bold text-xl p-4  border-b-2 border-x-2  border-gray-300-700 w-1/2 bg-gray-200">
                  <p>{acc.answer}</p>
                </section>
              )}
            </div>
          ))}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Accordian;
