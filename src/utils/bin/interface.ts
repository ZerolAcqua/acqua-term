export type Command = (args: string[]) => Promise<string> | string;
export type CommandList = Record<string, Command>;