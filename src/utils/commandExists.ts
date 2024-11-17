import { commandList } from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(commandList)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
