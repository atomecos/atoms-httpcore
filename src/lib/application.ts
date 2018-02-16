import * as Http from "http";
import { IProcessContext } from "atomservicescore";
import { Composing } from "./icomposable";

export namespace Application {
  export interface IApplicationComposable {
    compose?: (composing: Composing, ...args: any[]) => Function;
    useCompose?: (composing: Composing, ...args: any[]) => void;
  }

  export interface IApplicationListenable {
    listen: (port: number, ...exts: any[]) => Http.Server;
  }

  export interface IProcessContextFunctions {
    getProcessContext?: () => IProcessContext;
    setProcessContext?: (context: IProcessContext) => void;
  }
}
