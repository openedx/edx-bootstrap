.PHONY: clean docs help install preview quality samples test

.DEFAULT_GOAL := help

NPM_BIN = $(shell npm bin)

# Generates a help message. Borrowed from https://github.com/pydanny/cookiecutter-djangopackage.
help: ## display this help message
	@echo "Please use \`make <target>' where <target> is one of"
	@perl -nle'print $& if m{^[\.a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}'

install: ## install requirements
	npm install

clean: ## remove build artifacts
	rm -rf {css,samples/{css,edx-bootstrap}}

build.samples: clean ## build the samples
	$(eval $@_INCLUDE = --include-path samples --include-path node_modules)
	mkdir -p samples/edx-bootstrap
	mkdir -p samples/css/{edx,open-edx}
	cp -R sass/ samples/edx-bootstrap/sass
	$(NPM_BIN)/node-sass samples/edx/sass --output samples/edx/css $($@_INCLUDE)
	$(NPM_BIN)/node-sass samples/open-edx/sass --output samples/open-edx/css $($@_INCLUDE)

samples: clean build.samples ## build and show the samples
	$(NPM_BIN)/opn samples/index.html

preview: build.samples ## build the preview site
	$(eval $@_REF = $(shell git rev-parse --abbrev-ref HEAD))
	aws s3 sync samples s3://${S3_PREVIEW_DOMAIN}/$($@_REF)
	@echo Preview generated to http://${S3_PREVIEW_DOMAIN}/$($@_REF)
	$(NPM_BIN)/opn http://${S3_PREVIEW_DOMAIN}/$($@_REF)

quality:
	$(NPM_BIN)/stylelint sass/**/*.scss samples/**/*.scss

fix:
	$(NPM_BIN)/stylelint sass/**/*.scss samples/**/*.scss --fix

test: clean quality build.samples ## run tests

xxx:
	echo $$(git rev-parse --abbrev-ref HEAD)
