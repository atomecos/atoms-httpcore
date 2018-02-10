import { Application } from "./application";

export interface HttpApplication extends
  Application.IApplicationComposable,
  Application.IApplicationListenable,
  Application.IProcessContextFunctions {
  use(...arg: any[]): void;
}
