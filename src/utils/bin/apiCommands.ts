/**
 * List of commands that require API calls
 */

import { getProjects } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

import { Command } from './interface';

export const projects: Command = async () => {
  const projects = await getProjects();
  return projects
    .map(
      (repo: { name: string; html_url: string }) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const readme: Command = async () => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather: Command = async (args) => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
