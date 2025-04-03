import React from "react";
import PageOne from "./components/page/PageOne";
import PageTwo from "./components/page/PageTwo";
import { Link, Route, Routes, useRoutes } from "react-router-dom";
import RecipeDetails from "./components/page/RecipeDetails";
import Layout from "./components/Layout";
import CounterPage from "./components/page/CounterPage";
import ReactHookForm from "./components/page/ReactHookForm";
import Hooks from "./hooks/Hooks";
import UseMemo from "./Memo/UseMemo";
import CallbackHooks from "./useCallback/CallbackHooks";
import ReactQuery from "./reactQuery/ReactQuery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/one" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/form" element={<ReactHookForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/hook" element={<Hooks />} />
          <Route path="/memo" element={<UseMemo />} />
          <Route path="/callback" element={<CallbackHooks />} />
          <Route path="/query" element={<ReactQuery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
