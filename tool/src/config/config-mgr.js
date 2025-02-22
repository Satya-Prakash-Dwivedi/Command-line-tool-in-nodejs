import chalk from 'chalk';
import { cosmiconfigSync } from 'cosmiconfig';
import configLoader from cosmiconfigSync('tool');

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  } else {
    console.log('Found configuration', result.config);
    return result.config;
  }
}