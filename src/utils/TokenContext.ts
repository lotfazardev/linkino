import { createContext } from "react";

interface TokenContextInterface {
  UserToken: string;
  setUserToken: Function;
}

export const TokenContext = createContext<TokenContextInterface>({
  UserToken: "",
  setUserToken: () => null,
});
