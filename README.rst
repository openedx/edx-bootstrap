.. image:: https://badge.fury.io/js/%40edx%2Fedx-bootstrap.svg
    :target: https://badge.fury.io/js/%40edx%2Fedx-bootstrap
.. highlight:: css
    
=============
edX Bootstrap
=============

This library is an extension of `Bootstrap 4 <http://getbootstrap.com>`_
for use with edX and openEdX.

Installation
------------

Using npm::

    npm install --save @edx/edx-bootstrap

Usage
-----

Add the following import in your project's base scss file::

    @import "~@edx/edx-bootstrap/scss/edx/theme.scss";

Or for Open edX users::

    @import "~@edx/edx-bootstrap/scss/open-edx/theme.scss";

This includes everything you need. Bootstrap is included so you don't 
need to add it in your project. If you need more control, see the 
theming section.

Alternatively, you can download this repo and use one of the compiled outputs:

- ``dist/open-edx/theme.css`` (Open edX bootstrap, extensions, & theme)
- ``dist/edx/theme.css`` (edX bootstrap, extensions, & theme)
- ``dist/core/core.css`` (edX bootstrap & extensions only)

Theming
-------

The content of a `theme.scss` file::
    
    // Optional
    @import "my-fonts";
    @import "my-variables";

    // Required core (includes bootstrap and extensions)
    @import "@edx/edx-boostrap/scss/core/core.scss";

    // The rest of your scss
    // ...

To create a theme, make a copy of the ``scss/open-edx`` folder in your own project
and make changes. Then include it before you include edx-bootstrap::

    @import "fonts";
    @import "variables";

    // If you are creating your own theme remove
    // the "../core/core" import with the line below.
    @import "../core/core";
    // @import "@edx/edx-boostrap/scss/core/core.scss";

    @import "overrides";

Getting Help
------------
If you’re having trouble, you can ask in the front-end channel on Slack or contact the Frontend Working Group:

- `#front-end <https://openedx.slack.com/messages/C0EUBSV7D>`_
- `#frontend-working-group <https://openedx.slack.com/messages/C02BMP2RD5Y>`_

License
-------

The code in this repository uses the Apache 2.0 license unless otherwise noted.
Please see the `LICENSE file <https://github.com/openedx/edx-bootstrap/blob/master/LICENSE>`_
for details.

Documentation
-------------

Documentation details can be found in the `docs index.rst`_.

.. _docs index.rst: docs/index.rst


How to Contribute
-----------------

Contributions are very welcome, but for legal reasons, you must submit a
signed `individual contributor agreement`_ before we can accept your
contribution. See our `CONTRIBUTING`_ file for more information – it
also contains guidelines for how to maintain high code quality, which
will make your contribution more likely to be accepted.


Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email
security@edx.org.

.. _individual contributor agreement: https://open.edx.org/wp-content/uploads/2019/01/individual-contributor-agreement.pdf
.. _CONTRIBUTING: https://github.com/openedx/.github/blob/master/CONTRIBUTING.md
