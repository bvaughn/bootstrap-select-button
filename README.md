# bootstrapSelectButton

This component is designed for use with [Angular 1.2.x - 1.3x](https://angularjs.org/) and the [Twitter Bootstrap 3.x](http://getbootstrap.com/). It creates a bindable button dropdown (see [Bootstrap components: Button dropdowns](http://getbootstrap.com/components/#btn-dropdowns) that looks like a Bootstrap `btn` and behaves like an HTML `<select>` tag.

You can see a demo in JS Fiddle here:

 * [Basic configuration (displaying a set of strings)](http://jsfiddle.net/gh/get/library/pure/bvaughn/bootstrap-select-button/tree/master/demo/set-of-strings)
 * [Advanced configuration (displaying a set of objects)](http://jsfiddle.net/gh/get/library/pure/bvaughn/bootstrap-select-button/tree/master/demo/set-of-objects)

## How do I use the bootstrapSelectButton?

You can install bootstrapSelectButton using Bower:

    bower install bootstrap-select-button

Next you'll need to include the `bootstrapSelectButton` module in your application.

Lastly, simply add the following attributes to a any DOM element:

    <bootstrap-select-button options="bindableOptionsSet" selected-option="bindableSelectedOption" />

## Configuration Options

* **options**: Set (Array) of Strings or Objects
* **selectedOption**: Bindable attribute to store the selected option
* **optionIconKey**: *Optional* icon attribute if `options` Array contains Objects; defaults to `icon`
* **optionLabelKey**: *Optional* label attribute if `options` Array contains Objects; defaults to `label`
* **dropdownToggleClass**: *Optional* button class for the dropdown toggle; defaults to `btn-default`
