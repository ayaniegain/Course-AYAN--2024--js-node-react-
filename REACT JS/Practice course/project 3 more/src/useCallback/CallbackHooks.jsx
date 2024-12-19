import React, { memo, useCallback, useMemo, useState } from "react";
import Counter from "./Counter";

function CallbackHooks() {
  const [countOne, setcountOne] = useState(0);
  const [countTwo, setcountTwo] = useState(0);

  const CallbackFunctionOne = useCallback(
    () => setcountOne(countOne + 1),
    [countOne]
  );
  const CallbackFunctionTwo = useCallback(
    () => setcountTwo(countTwo + 1),
    [countTwo]
  );

  return (
    <div>
      <Counter countValue={countOne} onClick={CallbackFunctionOne} />
      <Counter countValue={countTwo} onClick={CallbackFunctionTwo} />
    </div>
  );
}

export default CallbackHooks;
