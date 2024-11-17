// List of commands that do not require API calls

import { Command } from './interface';
import { commandList } from './index';
import config from '_/config.json';

// Help
export const help: Command = async () => {
  let c = '';
  for (let i = 1; i <= Object.keys(commandList).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(commandList).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(commandList).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo: Command = async () => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about: Command = async () => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume: Command = async () => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate: Command = async () => {
  return `thank you for your interest. 
but i don't need donations at the moment.
`;
};

// Contact
export const email: Command = async () => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github: Command = async () => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// export const linkedin: Command = async () => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// Search
export const google: Command = async (args) => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo: Command = async (args) => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing: Command = async (args) => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit: Command = async (args) => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo: Command = async (args) => {
  return args.join(' ');
};

export const whoami: Command = async () => {
  return `${config.ps1_username}`;
};

// export const ls: Command = async () => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

// export const cd: Command = async () => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

export const date: Command = async () => {
  return new Date().toString();
};

export const vi: Command = async () => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim: Command = async () => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim: Command = async () => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs: Command = async () => {
  return `you know what? just use vscode.`;
};

export const sudo: Command = async () => {
  // use client language to choose the right link
  const isChinese = navigator.language.includes('zh');

  if (isChinese) {
    window.open('https://www.bilibili.com/video/BV1GJ411x7h7/', '_blank');
  }
  else {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  }

  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (): string => {
  return `
 █████╗  ██████╗ ██████╗ ██╗   ██╗ █████╗ ████████╗███████╗██████╗ ███╗   ███╗
██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗████╗ ████║
███████║██║     ██║   ██║██║   ██║███████║   ██║   █████╗  ██████╔╝██╔████╔██║
██╔══██║██║     ██║▄▄ ██║██║   ██║██╔══██║   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║
██║  ██║╚██████╗╚██████╔╝╚██████╔╝██║  ██║   ██║   ███████╗██║  ██║██║ ╚═╝ ██║
╚═╝  ╚═╝ ╚═════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
                                                                              
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// my custom commands
export const acqua: Command = async () => {
  return `Acqua is the cutest pony!
  <img src="https://cdn.zerolacqua.top/images/acqua_qrcode.png" alt="Acqua" width="200" height="200">`;
};
