import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { Userinfo } from "../interfaces/Userinfo";

interface UserContextType {
  user: Userinfo;
  setuser: Dispatch<SetStateAction<Userinfo>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  user: { email: "", name: "" },
  setuser: () => {
    console.log("test"); // valeur par défaut vide
  },
});

interface UserContextProviderProps {
  children: ReactNode;
}

// 🔹 Provider du contexte
export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setuser] = useState<Userinfo>({ email: "", name: "" });

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
}
