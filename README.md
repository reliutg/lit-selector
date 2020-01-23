# LitSelector
<p>LitSelector is a small and fast JavaScript library. It allows to select elements of the DOM in a very easy and efficient way.</p>

[![GitHub issues](https://img.shields.io/github/issues/regdev18/lit-selector)](https://github.com/regdev18/lit-selector/issues)
[![GitHub license](https://img.shields.io/github/license/regdev18/lit-selector)](https://github.com/regdev18/lit-selector/blob/master/LICENSE)


## Usage
<p>To include LitSelector, first install with npm.</p>

``
npm i lit-selector
``

## Examples

### Finding the first element matching a class

<p>
  In this example, the first element in the document with the class "myclass" is returned:
</p>

<p>
  <code>
    const el = ls(".myclass");
  </code>
</p>

### A more complex selector

<p>
Selectors can also be really powerful, as demonstrated in the following example. Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class is "user-panel main" (<div class="user-panel main">) in the document is returned:
</p>

<p>
<code>
const el = ls("div.user-panel.main input[name='login']");
</code>
</p>
