import type { Loginresponse } from "../interfaces/backendresponse/Loginresponse";
import type { Logintype } from "../interfaces/senddataclasses/logintype";
import type { Signuptype } from "../interfaces/senddataclasses/signuptype";
import { backendurl } from "../utils";

export async function login(data: Logintype): Promise<Loginresponse | string> {
  const response = await fetch(`${backendurl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result: Loginresponse = await response.json();
    return result;
  } else {
    const err: { message: string } = await response.json();
    return err.message;
  }
}

export async function signup(
  data: Signuptype
): Promise<{ message: string } | string> {
  const fullname = data.fullname.split(" ");
  const fname = fullname[0];
  const lname = fullname[1];
  const response = await fetch(`${backendurl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: fname,
      lname: lname,
      email: data.email,
      password: data.password,
    }),
  });
  if (response.ok) {
    const result: { message: string } = await response.json();
    return result;
  } else {
    const err = await response.json();
    return err.message;
  }
}

export async function getuserinfofromtoken({ token }: { token: string }) {
  const response = await fetch(`${backendurl}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) {
    const result: { email: string; name: string; accesstoken: string | null } =
      await response.json();
    return result;
  } else {
    const result: { message: string } = await response.json();
    return result.message;
  }
}
