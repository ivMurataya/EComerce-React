import { createContext, useState, useEffect } from "react";

// Used when upload data
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data.js";

// as the actual value you want to access
// Initialiced as an empty value
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  /* Run just one to upload data
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
*/

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      //console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  // Pasing the value will allow to the children to acces it
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
