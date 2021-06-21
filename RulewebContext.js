import React from "react";
const RulewebContext = React.createContext({
    email: "",
    password: "",
    isAuthorized: false,
    shopData: {},
    setData: () => {},
    setEmail: () => {},
    setPassword: () => {},
    setIsAuthorized: () => {},
    setShopData: () => {}
  });
export default RulewebContext