NODE_BIN ?= .\node_modules\.bin

lint:
	@$(NODE_BIN)\eslint ./src/** --fix

test:
	@$(NODE_BIN)\jest

build: lint test
	@$(NODE_BIN)\tsc
