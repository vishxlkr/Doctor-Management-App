// steps to follow

// Step 1 — Create the Context
import { createContext } from "react";
export const AppContext = createContext();              
// this is like a open box where we will store the data and also access the data.
// So we will use this inside the contextProvider function also. and then whenever we will use the Usecontext. 

// Step 2 — Create a Provider Component
const ContextProvider = (props) => {
   const phone = "+1 123456789";

   return (
      <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
   );
};
export default ContextProvider;
// this is the function created used as a opener. and this will be used to wrap the app component in main.jsx






// Step 3 — Wrap Your App with the Provider
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <ContextProvider>
      <App />
   </ContextProvider>
);






// Step 4 — Use the Shared Data Anywhere
import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const App = () => {
  const phone = useContext(AppContext);

  return (
    <div>
      <h1>Phone Number: {phone}</h1>
    </div>
  );
};

export default App;
