import React, { useState } from "react";

function QS() {
  let [sortByValue, setSortByValue] = useState([]);

  let arrObj = [
    { name: "John", age: 25 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 },
  ];
  let arrObj2 = [
    { name: "John", age: 25 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 25 },
  ];
  let arrObj3 = [
    { name: "John", age: 25 },
    { name: "Alice", age: 22 },
    { name: "John", age: 30 },
  ];

  function sortByFunc(action) {
    if (action === "name") {
      setSortByValue(arrObj.sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (action === "age") {
      setSortByValue(arrObj.sort((a, b) => a.age - b.age));
    }
    if (action === "filter") {
      setSortByValue(arrObj.filter((a, b) => a.age > 23));
    }
    if (action === "max") {
      // setSortByValue([(arrObj.sort((a, b) => b.age-(a.age))[0])])
      //   let maxval = Math.max(...arrObj.map((a) => +a.age));
      //   setSortByValue([arrObj.find((e) => e.age === +maxval)]);

      setSortByValue([
        arrObj.reduce((a, b) => {
          return a.age > b.age ? a : b;
        }, {}),
      ]);
    }

    let myMap = new Map();
    if (action === "GRPBYAGE") {
      arrObj2.map((user) => {
        if (!myMap.has(user.age)) {
          myMap.set(user.age, []);
        }
        myMap.get(user.age).push(user);
      });
    }
    // console.log(Object.fromEntries(myMap))

    if (action === "inc") {
      // setSortByValue(arrObj.map((person)=>person.age++))
      setSortByValue(
        arrObj.map((person) =>
          person ? { ...person, age: person.age + 1 } : person
        )
      );
    }

    if (action === "duplicateKey") {
      //   let duplicateNames = [...new Set(arrObj3.map((e) => e.name))];

      let names = arrObj3.map((e) => e.name);

      // Identify duplicate names (names appearing more than once)
      let duplicateNames = names.filter(
        (name, index, arr) => arr.indexOf(name) !== index
      );

      // Remove duplicates from duplicateNames array (to avoid redundant filtering)
      duplicateNames = [...new Set(duplicateNames)];

      console.log(duplicateNames);

      let duplicates = arrObj3.filter((e) => duplicateNames.includes(e.name));

      console.log(duplicates);
    }

    if (action==="total") {
        
        console.log(arrObj3.reduce((a,b)=>a+b.age,0))
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-green-700 py-2">list of person</h1>
      <div>
        {arrObj.map((person) => (
          <div key={person.name}>
            <p>
              Hello {person.name} age {person.age}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-3xl text-green-700 py-2 mx-2">sorting...</h1>
      <button
        onClick={() => sortByFunc("name")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        sort by Name
      </button>
      <button
        onClick={() => sortByFunc("age")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        sort by Age
      </button>
      <button
        onClick={() => sortByFunc("filter")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        Filter by age {String(">")} 23
      </button>
      <button
        onClick={() => sortByFunc("max")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        MAX age
      </button>
      <button
        onClick={() => sortByFunc("GRPBYAGE")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        Group User by age
      </button>
      <button
        onClick={() => sortByFunc("inc")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        Inc 1 BY AGE
      </button>
      <button
        onClick={() => sortByFunc("duplicateKey")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        duplicate Key
      </button>
      <button
        onClick={() => sortByFunc("total")}
        className="border-2 border-gray-500 p-2 mx-2"
      >
        total
      </button>
      <div className="mx-4">
        {sortByValue.map((person) => (
          <div key={person.name}>
            <p>
              Hello{" "}
              <span className="text-orange-700 font-bold">{person.name}</span>{" "}
              age <span className="text-blue-700 font-bold">{person.age}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QS;
