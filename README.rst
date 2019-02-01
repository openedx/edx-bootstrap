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

::

Alternatively you can download this repo and use the compiled css at ``dist/css/edx-bootstrap``

Usage
-----

Add the following import in your project's base scss file::

    @import "~@edx/edx-bootstrap/scss/edx-bootstrap";
    
::

This includes everything you need. Bootstrap is included for so you don't 
need to add it in your project. If you need more control, see the 
customization section.

Theming
-------

To create a theme, make a copy of ``scss/theme-variables`` in your own project
and make changes. Then include it before you include edx-bootstrap::

    @import 'my-theme-variables';
    
    @import "~@edx/edx-bootstrap/scss/edx-bootstrap";
    
    // Your overrides go here
    
::

If you prefer not to include fonts used by default, see the granular control
section.

Granular Control
----------------

If you need more granular control, you can also include @edx-bootstrap this way::

    // Your theme imports go here
    
    // Remove these if you need to
    @import "~@edx/edx-bootstrap/scss/fonts";
    @import "~@edx/edx-bootstrap/scss/theme-variables";
    
    // Refer to the bootstrap documentation for other ways to import bootstrap
    @import "~bootstrap/scss/bootstrap";
    
    // Remove this is you need to
    @import "~@edx/edx-bootstrap/scss/overrides";

    // Your overrides go here
::

Getting Help
------------
If you’re having trouble, contact the arch squad on Slack:

-  https://openedx.slack.com: #architecture
-  edX Internal: #arch-team

License
-------

The code in this repository uses the Apache 2.0 license unless otherwise noted.
Please see the `LICENSE file <https://github.com/edx/edx-bootstrap/blob/master/LICENSE>`_
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
.. _CONTRIBUTING: https://github.com/edx/edx-platform/blob/master/CONTRIBUTING.rst
