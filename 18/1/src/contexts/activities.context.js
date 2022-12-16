import { createContext, useState } from "react";

export const ActivitiesContext = createContext({
  favorite: 0,
  setFavorite: () => null
});

export const ActivitiesProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(0);
  const value = { favorite, setFavorite };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};
