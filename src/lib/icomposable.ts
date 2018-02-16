import { Composing } from "./composing";

export interface IComposable {
  toComposing: () => Composing;
}
