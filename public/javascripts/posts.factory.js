angular
    .module('app')
    .factory('posts', posts)

function posts() {
    var o = {
        posts: []
    };
    return o;
}