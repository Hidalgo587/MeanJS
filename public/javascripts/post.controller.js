angular
    .module('app')
    .controller('PostCtrl', PostCtrl);


function PostCtrl($scope, $stateParams, posts){

    var self = this;
    self.post = posts.posts[$stateParams.id];

    this.addComment = function(){
        if(self.body === '') { return; }
        this.post.comments.push({
            body: self.body,
            author: 'user',
            upvotes: 0
        });
        self.body = '';
    };

}
