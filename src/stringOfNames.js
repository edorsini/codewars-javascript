/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

 */

function list(names) {
    if (names.length > 2) {
        let last2 = names.splice(-2, 2);
        return names
            .map(function(item) {
                return item.name;
            })
            .join(', ') + ', ' + list(last2);
    } else if (names.length === 2) {
        return names
            .map(function(item) {
                return item.name;
            })
            .join(' & ');
    } else if(names.length === 1) {
        return  names[0].name;
    } else {
        return '';
    }

}

module.exports = {
    list: list
}

// console.log(list([]));
// console.log(list([ {name: 'Bart'} ]));
// console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Ed'} ]));