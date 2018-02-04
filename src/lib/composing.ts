import { ContextProxy } from "./context.proxy";

export type Composing = (ctx: ContextProxy, next: () => any) => void;
