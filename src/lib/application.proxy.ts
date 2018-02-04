import * as Http from "http";
import { IProcessContext } from "atomservicescore";
import { Composing } from "./composing";

export interface ApplicationProxy {
  listen: (port: number) => Http.Server;
  compose: (context: IProcessContext, composing: Composing) => void;
}
