# JSPlus

A JavaScript Library that adds a handfull of useful functions, written in TypeScript

## How to read this documentation

Every method has a JSDoc for it's proprieties/description/etc...

### Compatability

The majority of functionality varies on if you use NodeJS, Vanilla JS or React, although the most important functionality will be available on all of them.

_I mean how am I supposed to Inject a Stylesheet in a Terminal_

Each `@method` (and some `@class`es) will have a `depends` field, which describes what functionality is required

> - if it says `@depends document`, it depends on `document` existing.
> - `@depends nodemodule.chalk` would mean it depends on the nodejs module `chalk`
> - `@depends Math&(document/nodemodule.chalk)` would mean either nodemodule.chalk, or document are needed, but in either case, Math is required

Some might additionally have a `requires` field, which describes an environement\*

> - As an example, `@requires node/electron` would mean it requires a nodejs, or electron environement
> - `@requires node>10/electron` would mean it requires `nodejs` @ any version above v10.\*.\*, or any (decently recent) electron environement
> - `@requires node>10,electron>=12/chrome>69/firefox>27` would mean it requires (Node @ any version above 10 and electron at any version above or equal to 12), (Chrome > 69), or (Firefox > 27)
> - `@requires node>10,electron>=12/chrome>69,!opera/firefox>27` would mean it requires (Node @ any version above 10 and electron at any version above or equal to 12), (Chrome > 69, but **NOT** opera), or (Firefox > 27)

\* Environements specifying `chrome` define any env that depends on Chrome's rendering engine (on that chrome version), such as Chrome, Chromium, Brave, Opera, etc...

### Access

Each method will describe how to access it, in the following format:

> extendsPrototypes: (1)

or

> noExtendedPrototypes: (2)

or both

(1) = If extendsPrototypes is `true` in the loader, this will be how it's accessible

(2) = How to access it regardless of extendsPrototypes

### Examples

If the documentation states

> ### document.injectCSS
>
> extendsPrototypes: N/A
> noExtendedPrototypes: document.injectCSS
>
> ```js
> /**
>  * @description Injects a Stylesheet (CSS) into the Document
>  *
>  * @arg {string} CSS
>  *
>  * @method
>  * @depends document
>  * @requires anyBrowser, !ie, !operamini
>  */
>
> document.injectCSS(`.scriptOnly {
>   display:none
> }`);
> ```

it means, the method `document.injectCSS` is described with `Injects a Stylesheet (CSS) into the Document`, takes an argument of type `string` named `CSS`, is a method, depends on `document`, and on any browser environment, but not an IE or Opera Mini environment, and is available under `document.injectCSS`

## Methods

### document.injectCSS

SOON&trade;
