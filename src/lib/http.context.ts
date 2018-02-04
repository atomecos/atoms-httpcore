import { IProcessContext } from "atomservicescore";

export interface HttpContext<RequestType = any, ResponseType = any> {
  process: IProcessContext;
  method: string;
  path: string;
  request: RequestType;
  response: ResponseType;
}
