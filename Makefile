install:
	npm install

start: 
	npx node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .