import { useState, useEffect } from "react";

import history from "../history";

export default function useUrlState(key: string, defaultValue: string) {
  const params = new URLSearchParams(history.location.search);
  const param = params.get(key);
  const [state, setState] = useState(param || defaultValue);

  const onStateUpdate = (newState: string) => {
    setState(newState);
    params.set(key, newState);
    history.push({
      pathname: history.location.pathname,
      search: params.toString(),
    });
  };

  useEffect(() => {
    if (param !== state) {
      setState(param || defaultValue);
    }
  }, [param, defaultValue, state, key]);

  return [state, onStateUpdate] as const;
}
