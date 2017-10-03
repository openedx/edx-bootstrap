.PHONY: clean docs help install preview quality samples test

.DEFAULT_GOAL := help

# Generates a help message. Borrowed from https://github.com/pydanny/cookiecutter-djangopackage.
help: ## display this help message
	@echo "Please use \`make <target>' where <target> is one of"
	@perl -nle'print $& if m{^[\.a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}'

install: ## install requirements
	npm install

clean: ## remove build artifacts
	rm -rf css/
	rm -rf samples/css/
	rm -rf samples/edx-bootstrap/

build: clean ## build the npm package

build.samples: clean ## build the samples
	mkdir samples/edx-bootstrap
	cp -r sass/ samples/edx-bootstrap/sass
	mkdir samples/css
	mkdir samples/css/edx
	mkdir samples/css/open-edx
	./node_modules/node-sass/bin/node-sass samples/edx/sass --output samples/edx/css --include-path samples --include-path node_modules
	./node_modules/node-sass/bin/node-sass samples/open-edx/sass --output samples/open-edx/css --include-path samples --include-path node_modules

samples: clean build.samples ## build and show the samples
	./node_modules/.bin/opn samples/index.html

preview: build.samples ## build the preview site
	aws s3 sync samples s3://${S3_PREVIEW_DOMAIN}/$(shell git rev-parse --abbrev-ref HEAD)
	@echo Preview generated to http://${S3_PREVIEW_DOMAIN}/$(shell git rev-parse --abbrev-ref HEAD)

quality:
	./node_modules/stylelint/bin/stylelint.js sass/**/*.scss samples/**/*.scss

fix:
	./node_modules/stylelint/bin/stylelint.js sass/**/*.scss samples/**/*.scss --fix

test: clean quality build.samples ## run tests

xxx:
	echo $(shell git rev-parse --abbrev-ref HEAD)
