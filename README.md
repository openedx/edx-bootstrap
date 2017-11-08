[![npm version](https://badge.fury.io/js/%40edx%2Fedx-bootstrap.svg)](https://badge.fury.io/js/%40edx%2Fedx-bootstrap)

EdX Bootstrap
=============

This library provides [Bootstrap 4](https://v4-alpha.getbootstrap.com/) themes
for use within Open edX. It includes an Open edX theme as well as an edX-branded
theme.

Getting Started
---------------

The edx-bootstrap library should be installed via npm:

    npm install --save @edx/edx-bootstrap

Once installed, you can generate the
[sample pages](https://github.com/edx/edx-bootstrap/blob/master/samples):

    make samples

For a full list of the available make targets, run:

    make help

Using The EdX Bootstrap Theme
-----------------------------

To use an edX Bootstrap theme, import the ``_theme.scss`` partial file from
your chosen theme into your own Sass. Note that this file must be loaded before
any Bootstrap partial files so that the theming will be applied.

See the [sample Open edX SASS file](https://github.com/edx/edx-bootstrap/blob/master/samples/open-edx/sass/sample.scss)
for a simple example.

Using The EdX Bootstrap Theme With Webpack
------------------------------------------

The edX Bootstrap Sass expects the Bootstrap source to exist at the project root.
Add an includePaths option to your sass-loader config so that Webpack knows
to look for Bootstrap in your node_modules folder.

See a [sample Webpack config](https://github.com/edx/paragon/blob/master/webpack.config.js#L56)
in [Paragon](https://github.com/edx/paragon), which uses edX Bootstrap and
Webpack.

License
-------

The code in this repository uses the Apache 2.0 license unless otherwise noted.
Please see the [LICENSE file](https://github.com/edx/edx-bootstrap/blob/master/LICENSE)
for details.


## Contributions

Contributions are very welcome. Please read
[How To Contribute](https://github.com/edx/edx-platform/blob/master/CONTRIBUTING.rst)
for details. Even though they were written with edx-platform in mind, the
guidelines should be followed for Open edX code in general.

Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@edx.org.

Getting Help
------------

Have a question about this repository, or about Open edX in general?  Please
refer to this [list of resources](https://open.edx.org/getting-help) if you need
any assistance.
