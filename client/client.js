  Template.body.helpers({
    imps: function () {
      return Imps.find({}, {sort: {likes: -1}});
    },
    rebels: function () {
      return Rebels.find({}, {sort: {likes: -1}});
    },
    scavi: function () {
      return ScAVi.find({}, {sort: {likes: -1}});
    }
  });
  Template.cards.events({
    'click .js-open-popup': function (e) {
        var imgPath = $(e.currentTarget).data('image');
        if (imgPath) {
            sImageBox.open(imgPath, {
                animation: 'zoomIn'
            });
        }
    },
    'click .like': function(e) {
      var cardName = $(e.currentTarget).data('cardname');
      var fraction = $("a[data-cardname='" + cardName + "']").parent().parent().find("h3").data("fraction");
      switch(fraction) {
        case 'rebels':
          var doc = Rebels.findOne({"cardName": cardName})
          Rebels.update(doc._id, {$inc: {likes: 1}});
          alert("Wahl registriert für " + cardName);
          break;
        case 'imps':
          var doc = Imps.findOne({"cardName": cardName})
          Imps.update(doc._id, {$inc: {likes: 1}});
          alert("Wahl registriert für " + cardName);
          break;
         case 'scavi':
          var doc = ScAVi.findOne({"cardName": cardName})
          ScAVi.update(doc._id, {$inc: {likes: 1}});
          alert("Wahl registriert für " + cardName);
          break;
      }
    }
    });