import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <section>
      <div style={{fontSize:'24px', textAlign:'center'}}> This is Home Page</div>
      <div style={{ display: "flex", gap: "20px", justifyContent:'center', fontSize:'20px' }}>
        <Link to={"one"}>PageOne</Link>
        <Link to={"two"}>Pagetwo</Link>
        <Link to={"counter"}>Counter</Link>
        <Link to={"form"}>Advance form</Link>
        <Link to={"hook"}>Ref</Link>
        <Link to={"memo"}>UseMemo</Link>
        <Link to={"callback"}>UseCallBack</Link>
        <Link to={"query"}>ReactQuery</Link>
      </div>
    </section>
  );
}

export default Home;
