export type Command = (args: string[]) => Promise<string> | string;
export type Commands = Record<string, Command>;