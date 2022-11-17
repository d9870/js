//mongoimport --db TYITEXAM --collection restraunt --file restaurants.json


//1. write  a query to display all the documents in the collection restraunt.
//db.restraunt.find().pretty()

//2. write a query to display the fields restaurant_id, 
//name, borough and cuisine for all the documents in the collection restraunt.
//db.restraunt.find({},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

//3. write a query to display the fields restaurant_id, name, borough and cuisine,
//but exclude the field _id for all the documents in the collection restraunt.
//db.restraunt.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}).pretty()

//4. write a query to display the fields restaurant_id, name, borough and zip code,
//but exclude the field _id for all the documents in the collection restraunt.
//db.restraunt.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1,_id:0}).pretty()

//5. write a query to display all the restaurant which is in the borough Bronx.
//db.restraunt.find({borough:"Bronx"}).pretty()




// 1. write a mongoDB query to find the restaurant name , borough, longitude and
// latitude and cuisine for those restaurants which contains 'mon' as first three letters for its name.
//db.restraunt.find({name:/^mon/},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0}).pretty()