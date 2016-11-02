//var Person = function(config){
//    this.name = config.name;
//    this.age = config.age;
//    this.job = config.job;
//};
//
//Person.prototype.walk = function(){
//  return this.name + ' is walking';
//};
//
//var nick = new Person({name: 'Nick', age:'24',job:'Front-end-developer'});

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president',
        hobbies: 'php',
		words: 'Hello world'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li', 
	
	

template:'#person-id',

initialize: function(){
	this.render();
},


    render: function () {
		var template = _.template($(this.template).html() );
        this.$el.html(template(this.model.toJSON() ) );
          
	}
	
});

var person = new Person;
var personView = new PersonView({model: person});

var person2 = new Person({'name':'Ivan','age': 19});
var personView2 = new PersonView({model: person2});



