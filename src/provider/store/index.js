import React, { createContext } from "react";
import AuthStore from  './Auth';
import CourseStore from './Course';
import UserStore from './confirmUser';

  
   export const StoreContext = createContext();
   export const StoreMainProvider = StoreContext.Provider;
   export const StoreConsumer = StoreContext.Consumer;

   export default ({ children }) => {
    // const { state: authState, updatetoken, dispatch: authDisptch } = AuthStore();
    const authStore = AuthStore();
    // const { state: appState, dispatch: appDispatch } = AppStore();
    const courseStore = CourseStore();
    const userStore = UserStore();
  
    const StoreValue = {
      auth: authStore,
      course: courseStore,
      user: userStore, 
    };
    return <StoreMainProvider value={StoreValue}>{children}</StoreMainProvider>;
  };
  
