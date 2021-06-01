# Not including dev commands as they have issues on Window's Powershell.

# Fixing paths for different platforms
# https://stackoverflow.com/questions/4058840/makefile-that-distincts-between-windows-and-unix-like-systems
ifdef OS
   RM = del /Q
   FixPath = $(subst /,\,$1)
else
   ifeq ($(shell uname), Linux)
      RM = rm -f
      FixPath = $1
   endif
endif

SEP ?= '\'

# Stands for MODULES_BINARIES, abbreviated to pollute less possible the commands
M_B ?= $(call FixPath, ./node_modules/.bin/)

lint:
	$(M_B)eslint "./{src, tests}/**" --fix

lint-build:
	$(M_B)eslint "./src/**" --fix

test:
	$(M_B)jest

build: lint-build test
	$(M_B)tsc
