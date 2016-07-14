//code developed 07-13-16 EG
//Meteor 1.3.4.1
//MongoDB 3.2.8

this.Documents = new Mongo.Collection("documents");

if (Meteor.isClient){
    Template.editor.helpers({
        docid:function(){
            console.log("doc id helper:");
            console.log(Documents.findOne());
            var doc = Documents.findOne();
            if(doc){
               return doc._id;
            }
            else{
                return undefined;
            }
        
            
        }
    });

}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	if (!Documents.findOne()){//no documents yet!
            Documents.insert({title:"my new document"}); 
            
        }
        
        });
}