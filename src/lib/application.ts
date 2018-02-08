import * as Http from "http";
import { IProcessContext } from "atomservicescore";

export namespace Application {
  export interface IApplicationComposable {
    compose?: (composing: Function, ...args: any[]) => Function;
  }

  export interface IApplicationListenable {
    listen: (port: number, ...exts: any[]) => Http.Server;
  }

  export interface IProcessContextFunctions {
    getProcessContext?: () => IProcessContext;
    setProcessContext?: (context: IProcessContext) => void;
  }
}
