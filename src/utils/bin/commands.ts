/**
 * List of commands that do not require API calls
 */


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

export const date: Command = async () => {
  return new Date().toString();
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

// sumfetch
export const sumfetch: Command = async () => {
  return `
   sumfetch
  -----------
   ABOUT
   ${config.name}
   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
  爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  -----------
   CONTACT 
   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  
`;
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
