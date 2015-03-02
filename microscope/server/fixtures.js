if (Posts.find().count() === 0) {
    var now = new Date().getTime();

    var meId = Meteor.users.insert({
        profile: {name: 'Ashok Gelal'}
    });

    var me = Meteor.users.findOne(meId);
    var youId = Meteor.users.insert({
        profile: {name: 'Mr You'}
    });
    var you = Meteor.users.findOne(youId);

    var telescopeId = Posts.insert({
        title: 'Introducing Telescope',
        userId: you._id,
        author: you.profile.name,
        url: 'http://telescope.com',
        submitted: new Date(now - 7 * 3600 * 1000),
        commentsCount: 2
    });

    Comments.insert({
        postId: telescopeId,
        userId: me._id,
        author: me.profile.name,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: 'Interesting project, can I get involved?'
    });

    Comments.insert({
        postId: telescopeId,
        userId: you._id,
        author: you.profile.name,
        submitted: new Date(now - 3 * 3600 * 1000),
        body: 'You sure can!'
    });

    Posts.insert({
        title: 'Meteor',
        userId: me._id,
        author: me.profile.name,
        url: 'http://meteor.com',
        submitted: new Date(now - 10 * 3600 * 1000),
        commentsCount: 0
    });

    Posts.insert({
        title: 'The Meteor Book',
        userId: me._id,
        author: me.profile.name,
        url: 'http://themeteorbook.com',
        submitted: new Date(now - 12 * 3600 * 1000),
        commentsCount: 0
    });
}
