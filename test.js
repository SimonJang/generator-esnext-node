import path from 'path';
import test from 'ava';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';
import pify from 'pify';

let generator;

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('esnext-node', [path.join(__dirname, './app')], null, {skipInstall: true});
});

test('should generate files', async t => {
	helpers.mockPrompt(generator, {
		functionName: 'test',
		functionDescription: 'test description',
		keywords: ['foo', 'bar', 'baz']
	});

	await pify(generator.run.bind(generator))();

	assert.file([
		'.babelrc',
		'.editorconfig',
		'.gitattributes',
		'.gitignore',
		'.travis.yml',
		'.npmrc',
		'index.js',
		'test.js',
		'package.json'
	]);

	t.pass();
});
