import { createContext, useContext, useRef, useMemo } from 'react';

import AppStore from 'stores/AppStore';

const AppContext = createContext();

export const useStore = () => {
  const context = useContext(AppContext);
  return context.store;
};

const AppContextProvider = ({ children }) => {
  const store = useRef(new AppStore());

  const contextValue = useMemo(
    () => ({
      store: store.current,
    }),
    [],
  );
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
