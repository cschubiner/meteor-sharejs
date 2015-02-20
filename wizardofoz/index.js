// Router.route('/items/:_id', function () {
//     var item = Items.findOne({
//         _id: this.params._id
//     });
//     this.render('ShowItem', {
//         data: item
//     });
// });

Router.route('/:_id', function () {
    console.log(this.params);
    console.log(this.params._id);
    var a = this.params._id;
    Session.set('playername', a)
    Session.set("document", a)

    console.log(a);
    this.render('playerpage', {
        playerName: a
    });
    var x = document.getElementsByClassName("ace_text-input");
    for (var i = 0; i < x.length; i += 1) {
        x.setAttribute('readonly', 'readonly');
    }
});

// when you navigate to "/one" automatically render the template named "One".
// Router.route('/one');

// Router.route('/two');
