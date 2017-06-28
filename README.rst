EdX Bootstrap
=============

This library provides `Bootstrap 4`_ themes for use within Open edX. It
includes an Open edX theme as well as an edX-branded theme. In addition,
it includes the `Open Sans typeface`_ which is the default font for Open edX.

.. _Bootstrap 4: https://v4-alpha.getbootstrap.com/
.. _Open Sans typeface: https://fonts.google.com/specimen/Open+Sans

Getting Started
---------------

The edx-bootstrap library should be installed via npm:

    npm install edx-bootstrap

Once installed, you can generate the `Sample pages`_:

    make samples

For a full list of the available make targets, run:

    make help

.. sample pages: https://github.com/edx/edx-bootstrap/blob/master/samples

Using The EdX Bootstrap Theme
-----------------------------

To use an edX Bootstrap theme, import the ``_theme.scss`` partial file from
your chosen theme into your own Sass. Note that this file must be loaded before
any Bootstrap partial files so that the theming will be applied.

See the `sample Open edX SASS file`_ for a simple example.

.. sample Open edX SASS file: https://github.com/edx/edx-bootstrap/blob/master/samples/open-edx/sass/sample.scss

License
-------

The code in this repository is licensed under version 3 of the AGPL
unless otherwise noted. Please see the `LICENSE`_ file for details.

.. _LICENSE: https://github.com/edx/edx-bootstrap/blob/master/LICENSE

How To Contribute
-----------------

Contributions are very welcome. Please read `How To Contribute`_ for details.
Even though they were written with ``edx-platform`` in mind, the guidelines
should be followed for Open edX code in general.

.. _How To Contribute: https://github.com/edx/edx-platform/blob/master/CONTRIBUTING.rst

Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@edx.org.

Getting Help
------------

Have a question about this repository, or about Open edX in general?  Please
refer to this `list of resources`_ if you need any assistance.

.. _list of resources: https://open.edx.org/getting-help
