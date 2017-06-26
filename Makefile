.PHONY: clean docs help install preview quality samples test

.DEFAULT_GOAL := help

help: ## display this help message
	@echo "Please use \`make <target>' where <target> is one of"
	@perl -nle'print $& if m{^[a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}'

install: ## install requirements
	npm install

clean: ## remove build artifacts
	rm -rf css/
	rm -rf samples/css/
	rm -rf samples/edx-bootstrap/

samples: ## build the samples
	mkdir samples/edx-bootstrap
	cp -r fonts/ samples/edx-bootstrap/fonts
	cp -r sass/ samples/edx-bootstrap/sass
	mkdir samples/css
	mkdir samples/css/edx
	mkdir samples/css/open-edx
	./node_modules/node-sass/bin/node-sass samples/edx/sass --output samples/edx/css --include-path samples --include-path node_modules
	./node_modules/node-sass/bin/node-sass samples/open-edx/sass --output samples/open-edx/css --include-path samples --include-path node_modules

build: clean ## build the npm package

preview: samples ## build the preview site
	aws s3 sync samples s3://${S3_PREVIEW_DOMAIN}/edx-bootstrap-samples

test: clean samples ## run tests
