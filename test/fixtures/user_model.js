YUI.add('user', function (Y) {

  Y.User = Y.Base.create(
    'user',
    Y.Model,
    Y.ModelSync.REST,
  {

    /**
    @property root
    @type {String}
    **/
    root: 'my/users/endpoint'

  });

},
'0.0.1',
{
  requires: [
    'model',
    'model-sync-rest'
  ]
});
