import { IProcessContext } from "atomservicescore";

export interface ContextProxy {
  process: IProcessContext;
  method: string;
  path: string;
  request: any;
  response: any;
}
