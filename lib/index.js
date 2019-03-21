'use strict';
module.exports = function () {
    return {
        name: 'transform-remove-strict-directive',
        visitor: {
            Directive(path) {
                const { node } = path;

                if (node.value.value === 'use strict') {
                    path.remove();
                }
            },
        },
    };
};