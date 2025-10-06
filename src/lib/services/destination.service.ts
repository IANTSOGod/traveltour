import type { Destinationresponse } from "../interfaces/backendresponse/Destinationresponse";
import { backendurl } from "../utils";

export async function getdestinationlist(): Promise<
  Destinationresponse[] | string
> {
  const response = await fetch(`${backendurl}/destination/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const result: Destinationresponse[] = await response.json();
    return result;
  } else {
    const err: { message: string } = await response.json();
    return err.message;
  }
}
