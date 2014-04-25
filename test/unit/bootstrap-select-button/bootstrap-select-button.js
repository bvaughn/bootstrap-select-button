'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('bootstrap-select-button', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('bootstrap-select-button');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('bootstrap-select-button.config')).toBeTruthy();
    });

    
    it('should load filters module', function() {
        expect(hasModule('bootstrap-select-button.filters')).toBeTruthy();
    });
    

    
    it('should load directives module', function() {
        expect(hasModule('bootstrap-select-button.directives')).toBeTruthy();
    });
    

    

});
