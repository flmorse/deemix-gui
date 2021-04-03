NODE_BIN ?= .\node_modules\.bin

lint:
	@$(NODE_BIN)\eslint ./src/** --fix

build: lint
	@$(NODE_BIN)\tsc
