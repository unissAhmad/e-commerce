import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

// THIS THUNK STARTS WITH FALSE LOADING
export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading];
}
