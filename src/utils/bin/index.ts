import * as commands from './commands';
import * as apiCommands from './apiCommands';
import * as secretCommands from './secretCommands';

import { CommandList } from './interface';


export const commandList: CommandList = {
	...commands,
	...apiCommands,
}

export const secretCommandList: CommandList = {
	...secretCommands,
}

export const allCommandList: CommandList = {
	...commandList,
	...secretCommandList,
}


export { banner } from './commands';
