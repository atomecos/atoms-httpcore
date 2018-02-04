import * as Http from "http";
import { IProcessContext } from "atomservicescore";
import { Composing } from "./composing";

export namespace Application {
  export interface IApplicationComposable {
    compose?: (context: IProcessContext, composing: Composing) => void;
  }

  export interface IApplicationListenable {
    listen: (port: number, ...ext: any[]) => Http.Server;
  }
}
