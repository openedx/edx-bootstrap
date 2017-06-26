.PHONY: clean docs help install quality test

.DEFAULT_GOAL := help

help: ## display this help message
	@echo "Please use \`make <target>' where <target> is one of"
	@perl -nle'print $& if m{^[a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}'

install: ## install requirements
	npm install

clean: ## remove build artifacts
	rm -rf css/
	rm -rf samples/css/
	rm -rf dist/

dist: ## build the distribution
	mkdir dist
	mkdir dist/edx-bootstrap
	cp -r sass/* dist/edx-bootstrap

samples: dist ## build the samples
	mkdir samples/css
	./node_modules/node-sass/bin/node-sass samples/sass --output samples/css --include-path dist --include-path node_modules

build: clean dist ## build the npm package

preview: samples ## build the preview site
	aws s3 sync samples s3://${S3_PREVIEW_DOMAIN}/edx-bootstrap-samples

test: clean samples ## run tests
