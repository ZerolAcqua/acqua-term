import { commandList } from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const commands = Object.keys(commandList).filter((entry) =>
    entry.startsWith(command),
  );

  console.log(commands);
  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
