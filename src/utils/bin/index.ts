import * as commands from './commands';
import * as apiCommands from './api_commands';
import { default as sumfetch } from './sumfetch';
import { CommandList } from './interface';

export const commandList: CommandList = {
	...commands,
	...apiCommands,
	sumfetch,
}

export { banner } from './commands';
