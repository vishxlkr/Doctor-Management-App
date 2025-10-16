import { createContext } from "react";
export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
   const value = {};

   return (
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
   );
};

export default DoctorContextProvider;
