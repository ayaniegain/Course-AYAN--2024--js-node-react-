import { useState } from "react";

function Events() {
  const [imgSizeInc, setimgSizeInc] = useState("200px");
  const [name, setName] = useState("");
  const [passsword, setPassword] = useState("");
  const [submittedData, setsaveUserData] = useState(null);

  const handleOver = () => {
    setimgSizeInc("400px");
  };

  const handleLeave = () => {
    setimgSizeInc("200px");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setsaveUserData({ name: name, password: passsword });

    console.log(name, passsword);
    setName("");
    setPassword("");
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }

    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    let key = e.code.replace("Key", "");

  console.log(key)

    if (key==="Enter") alert(`pressed key ${key}`);
  };

  return (
    <>
      <div>
        <h2
          onCopy={() => console.log("copy text")}
          onPaste={() => console.log("paste text")}
          onCut={() => console.log("cut text")}
        >
          hello works
        </h2>
        <img
          src="../public/images.jpg"
          alt="img"
          style={{
            height: imgSizeInc,
            width: imgSizeInc,
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          id="inc"
        />
        <input
          type="text"
          onFocus={() => console.log("on focused")}
          onBlur={() => console.log("blured")}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          onClick={() => console.log("single click")}
          onDoubleClick={() => alert("double click")}
        >
          click
        </button>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">submit</button>
        </form>

        {submittedData && (
          <h3>
            Submitted Name: {submittedData.name || ""}, Submitted Password:{" "}
            {submittedData.password || ""}
          </h3>
        )}
      </div>
    </>
  );
}

export default Events;