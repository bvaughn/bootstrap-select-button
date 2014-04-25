# bootstrapSelectButton

This component is designed for use with [Angular 1.2.x - 1.3x](https://angularjs.org/) and the [Twitter Bootstrap 3.x](http://getbootstrap.com/). It creates a bindable button dropdown (see [Bootstrap components: Button dropdowns](http://getbootstrap.com/components/#btn-dropdowns) that looks like a Bootstrap `btn` and behaves like an HTML `<select>` tag.

----
## How do I use the bootstrapSelectButton

To use this component, first include the `'bootstrapSelectButton` module in your application. Next simply add the following attributes to a any DOM element:

    <div bootstrap-select-button options="bindableOptionsSet" selected-option="bindableSelectedOption"></div>

Here are some demos on JS Fiddle:
 * [Basic configuration, displaying a set of strings](http://jsfiddle.net/gh/get/library/pure/bvaughn/bootstrap-select-button/tree/master/demo/set-of-strings)
 * [Advanced configuration, displaying a set of objects](http://jsfiddle.net/gh/get/library/pure/bvaughn/bootstrap-select-button/tree/master/demo/set-of-objects)

----
## What configuration options does the bootstrapSelectButton support?

* **options**: Array of unique Strings or Objects
* **selectedOption**: Bindable attribute to store the selected option
* **optionIconKey**: Optional icon attribute if `options` Array contains Objects; defaults to `icon`
* **optionLabelKey**: Optional label attribute if `options` Array contains Objects; defaults to `label`
* **dropdownToggleClass**: Optional button class for the dropdown toggle; defaults to `btn-default`
