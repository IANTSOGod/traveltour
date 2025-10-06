import { UserContext } from "@/lib/context/Usercontext";
import { getuserinfofromtoken } from "@/lib/services/auth.service";
import { LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import LoginDialog from "./LoginDialog";
import NavItems from "./NavItems";

export default function Header() {
  const [price, setPrice] = useState<string>("USD");
  const { user, setuser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("token");
    setuser({ email: "", name: "" });
  };

  const handlegetinfo = async (token: string) => {
    const response = await getuserinfofromtoken({ token: token });
    if (typeof response === "string") {
      alert(response);
    } else {
      if (response.accesstoken) {
        localStorage.setItem("token", response.accesstoken);
      }
      const newuser = {
        name: response.name,
        email: response.email,
      };
      setuser(newuser);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handlegetinfo(token);
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-5 py-6 md:py-10 gap-4 md:gap-0">
      <Label className="text-2xl font-bold flex flex-row gap-x-0">
        <p>Travel</p>
        <p className="text-blue-400">tour</p>
      </Label>

      <div className="hidden lg:block">
        <NavItems />
      </div>

      <div className="flex flex-row items-center gap-3 md:gap-5">
        <Select value={price} onValueChange={setPrice}>
          <SelectTrigger className="border-none w-20 md:w-24">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Devise</SelectLabel>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="CAD">CAD</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {user.email != "" && user.name != "" ? (
          <>
            {user.name} <LogOut onClick={logout}></LogOut>
          </>
        ) : (
          <>
            <LoginDialog></LoginDialog>
          </>
        )}
      </div>
    </div>
  );
}
