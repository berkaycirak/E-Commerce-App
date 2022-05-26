import { createContext, useState, useEffect } from 'react';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utilities/firebase/firebase.utils.js';
import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // we call below function once, then we have data in firebase. Then we can delete below function.
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
