angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state, posts) {

    var self = this;
    self.posts = posts.posts;

    self.addPost = function() {
        if(!self.title || self.title === ''){return;}
        self.posts.push({
            title: self.title,
            link: self.link,
            upvotes:0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        });
        self.title = '';
        self.link = '';
    };

    self.incrementUpvotes = function(post){
        post.upvotes += 1;
    }

};

