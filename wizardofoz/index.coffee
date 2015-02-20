this.Documents = new Meteor.Collection("documents")
this.Players = new Meteor.Collection("players")

Meteor.methods
  deleteDocument: (id) ->
    Documents.remove(id)
    ShareJS.model.delete(id) unless @isSimulation # ignore error

# Router.map(function () {
#     this.route('hello');
# });

Router.map(->
    this.route('main', {path: '/woz'} )
    this.route('index', {path: '/'} )
    )

if Meteor.isClient
    Template.playerpage.helpers
      playerName: -> Session.get('playername')

#     Template.main.helpers
#         title: -> 'Wizard of Oz'


# Router.route('/hello', ->
#   this.render('home')
# )
