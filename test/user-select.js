describe('User select', function () {
    var userSelect = null;
    var $compile = null;
    var $scope = null;
    var el = null;

    beforeEach(module('rt.userselect'));

    beforeEach(inject(function ($injector) {
        userSelect = $injector.get('userSelect');
        $compile = $injector.get('$compile');
        $scope = $injector.get('$rootScope').$new();

        el = $compile('<div><div user-select /></div>')($scope);
    }));

    it('Disables selection when requested', function () {
        assert.notMatch(el.html(), /user-select: none/);
        userSelect.disable();
        assert.match(el.html(), /user-select: none/);
    });

    it('Enables selection when requested', function () {
        userSelect.disable();
        assert.match(el.html(), /user-select: none/);
        userSelect.enable();
        assert.notMatch(el.html(), /user-select: none/);
    });
});
