import { IProcessContext } from "atomservicescore";
import { HttpContextStore } from "./http.context.store";

export interface HttpContext<RequestType = any, ResponseType = any> {
  process: IProcessContext;
  store: HttpContextStore;
  method: string;
  path: string;
  request: RequestType;
  response: ResponseType;
}
