import yargs from 'yargs';

const params = {
  englishOnly: false,
  threshold: 100,
  minLength: 3,
  maxLength: Infinity,
};

yargs.strict();
yargs.help();
yargs.options({
  englishOnly: {
    alias: 'e',
    describe: 'Filters results to only include english words',
    type: 'boolean',
    default: undefined,
  },
  threshold: {
    alias: 't',
    describe: 'The minimum count for a result to be included',
    type: 'number',
    default: undefined,
  },
  minLength: {
    alias: 'min',
    describe: 'The minimum length of a substring to be included',
    type: 'number',
    default: undefined,
  },
  maxLength: {
    alias: 'max',
    describe: 'The maximum length of a substring to be included',
    type: 'number',
    default: undefined,
  },
});

yargs.alias('help', 'h');
yargs.alias('version', 'V');

yargs.wrap(Math.min(120, yargs.terminalWidth()));

const { argv } = yargs;

params.englishOnly = argv?.englishOnly || params.englishOnly;
params.threshold = argv?.threshold || params.threshold;
params.minLength = argv?.minLength || params.minLength;
params.maxLength = argv?.maxLength || params.maxLength;

export { argv, yargs, params };
