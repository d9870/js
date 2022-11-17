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







// 1. write a mongoDB query to display the restaurant id , name, borough and cuisine for those restaurants which 
// prepared either American or Chinese dish or restaurant's name begin with letter 'Wil'.
//db.restraunt.find({$or:[{cuisine:"American "},{cuisine:"Chinese"},{name:/^Wil/}]},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}).pretty()

// 2. write a mongoDB query to display the restaurant id , name and grades for those restaurants which achieved a grade of A and scored 11 on an ISODate 
//"2014-08-11T00:00:00Z" among many of survey dates.
//db.restraunt.find({"grades.grade":"A","grades.score":11,"grades.date":ISODate("2014-08-11T00:00:00Z")},{restaurant_id:1,name:1,grades:1,_id:0}).pretty()

// 3. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants 
//where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z.
//db.restraunt.find({"grades.1.grade":"A","grades.1.score":9,"grades.1.date":ISODate("2014-08-11T00:00:00Z")},{restaurant_id:1,name:1,grades:1,_id:0}).pretty()

// 4. Write a MongoDB query to find the restaurant Id, name and address and geographical location for those restaurants
// where 2nd element of coord array contains a value which is more than 42 and upto 52.
//db.restraunt.find({"address.coord.1":{$gt:42,$lt:52}},{restaurant_id:1,name:1,address:1,_id:0}).pretty()

// 5. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
//db.restraunt.find().sort({name:1}).pretty()







// 1. write a mongoDB query to find the restaurant name , borough, longitude and
// latitude and cuisine for those restaurants which contains 'mon' as first three letters for its name.
//db.restraunt.find({name:/^mon/},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0}).pretty()

// 2. write a mongoDB query to find the restaurant name , borough, longitude and
// latitude and cuisine for those restaurants which contains 'Mad' as first three letters for its name.
//db.restraunt.find({name:/^Mad/},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0}).pretty()

// 3. write a mongoDB query to find the restaurant which is located in the longitude value less than -95.754168.
//db.restraunt.find({"address.coord.0":{$lt:-95.754168}},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0}).pretty()

// 4. write a mongoDB query to find the restaurant id , name, borough and cuisine for those restaurants which consains 'Wil' as first three letters for its name.
//db.restraunt.find({name:/^Wil/},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0}).pretty()

// 5. write a mongoDB query to find the restaurant id , name, borough and cuisine for those restaurants which consains 'ces' as last three letters for its name.
//db.restraunt.find({name:/ces$/},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0}).pretty()







//1. Write a MongoDB query to arrange the name of the restaurants in decending order along with all the columns.
//db.restraunt.find().sort({name:-1}).pretty()

//2. Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
//db.restraunt.find().sort({cuisine:1,borough:-1}).pretty()

//3. Write a MongoDB query to know whether all the addresses contains the street or not.
//db.restraunt.find({"address.street":{$exists:true}}).pretty()

//4. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
//db.restraunt.find({"address.coord":{$type:"double"}}).pretty()

//5. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
//db.restraunt.find({},{restaurant_id:1,name:1,grades:1,_id:0}).pretty()






//1. create a collection named "employee" with following fields eid,ename,Sal,City,hobbies 
// where hobbies is an array perform following Queries based on the above collection.
//db.employee.insert({eid:1,ename:"Raj",Sal:10000,City:"Bangalore",hobbies:["Cricket","Football"]})
//db.employee.insert({eid:2,ename:"Ravi",Sal:20000,City:"Bangalore",hobbies:["Cricket","Football"]})
//db.employee.insert({eid:3,ename:"Raju",Sal:30000,City:"Bangalore",hobbies:["Cricket","Football"]})
//db.employee.insert({eid:4,ename:"Ramesh",Sal:40000,City:"Bangalore",hobbies:["Cricket","Football"]})
//db.employee.insert({eid:5,ename:"Rajesh",Sal:50000,City:"Bangalore",hobbies:["Cricket","Football"]})


//A. Write a MongoDB query to use sum , avg , min , max expression.
//db.employee.aggregate([{$group:{_id:"$City",totalSalary:{$sum:"$Sal"},avgSalary:{$avg:"$Sal"},minSalary:{$min:"$Sal"},maxSalary:{$max:"$Sal"}}}])

//B. Write a MongoDB query to use push and addToSet expression.
//db.employee.aggregate([{$group:{_id:"$City",hobbies:{$push:"$hobbies"}}}])
//db.employee.aggregate([{$group:{_id:"$City",hobbies:{$addToSet:"$hobbies"}}}])

//C. Write a MongoDB query to use first and last expression.
//db.employee.aggregate([{$group:{_id:"$City",first:{$first:"$ename"},last:{$last:"$ename"}}}])

//D. perform backup and restore of the above collection.
//mongodump --db test --collection employee
//mongorestore --db test --collection employee







// 1. Connect python to mongoDB and perform CRUD operations for document.
// from pymongo import MongoClient
// client = MongoClient('localhost', 27017)
// db = client.TYITEXAM
// def insert():
//     try:
//         name = input("Enter the name:")
//         Rollno = int(input("Enter rollno:"))
//         Age = int(input("Enter age:"))
//         id = int(input("Enter id:"))
//         db.restraunt.insert_one({
//             "name": name,
//             "Rollno": Rollno,
//             "Age": Age,
//             "id": id
//         })
//         print("Data inserted successfully!")
//     except Exception as e:
//         print(str(e))
// def update():
//     try:
//         name = input("Enter the name:")
//         Rollno = int(input("Enter rollno:"))
//         Age = int(input("Enter age:"))
//         id = int(input("Enter id:"))
//         db.restraunt.update_one({
//             "name": name
//         }, {
//             "$set": {
//                 "Rollno": Rollno,
//                 "Age": Age,
//                 "id": id
//             }
//         })
//         print("Data updated successfully!")
//     except Exception as e:
//         print(str(e))
// def delete():
//     try:
//         name = input("Enter the name:")
//         db.restraunt.delete_one({
//             "name": name
//         })
//         print("Data deleted successfully!")
//     except Exception as e:
//         print(str(e))
// def display():
//     try:
//         for i in db.restraunt.find():
//             print(i)
//     except Exception as e:
//         print(str(e))
//
// insert()
// update()
// delete()
// display()






// 2. Connect java to mongoDB and perform CRUD operations for collection.
// perform CRUD opearation to interact with java and mongoDB.

// import com.mongodb.client.MongoCollection;
// import com.mongodb.client.MongoDatabase;
// import com.mongodb.MongoClient;
// import com.mongodb.MongoCredential;
// import com.mongodb.DB;
// import com.mongodb.DBCollection;
// import com.mongodb.DBCursor;
// import com.mongodb.BasicDBObject;
// import com.mongodb.DBObject;
// import org.bson.Document;
// import java.util.logging.Level;
// import java.util.logging.Logger;
// import com.mongodb.client.MongoCursor;

// class CRUDdata
// {
//     public void insert()
//     {
//         MongoClient mongo = new MongoClient("localhost" , 27017);
//         System.out.println("Connected to the database successfully");
//         MongoDatabase database = mongo.getDatabase("TYITEXAM");
//         MongoCollection <Document> collection = database.getCollection("restraunt");
//         System.out.println("Collection restraunt selected successfully");
//         Document document = new Document();
//         document.append("id" , 1);
//         document.append("document" , "database");
//         document.append("likes" , 100);
//         document.append("url" , "http://www.mongodb.com");
//         document.append("by" , "NoSQL");
//         document.append("id","1");
//         collection.insertOne(document);
//         System.out.println("Document inserted Successfully");
//     }
//     public void read()
//     {
//         MongoClient mongo = new MongoClient("localhost" , 27017);
//         System.out.println("Connected to the database successfully");
//         MongoDatabase database = mongo.getDatabase("TYITEXAM");
//         MongoCollection <Document> collection = database.getCollection("restraunt");
//         System.out.println("Collection restraunt selected successfully");
//         MongoCursor <Document> cursor = collection.find().iterator();
//         try
//         {
//             while (cursor.hasNext())
//             {
//                 System.out.println(cursor.next().toJson());
//             }
//         }
//         finally
//         {
//             cursor.close();
//         }
        
//     }
//     public void update()
//     {
//         MongoClient mongo = new MongoClient("localhost" , 27017);
//         System.out.println("Connected to the database successfully");
//         MongoDatabase database = mongo.getDatabase("TYITEXAM");
//         MongoCollection <Document> collection = database.getCollection("restraunt");
//         System.out.println("Collection restraunt selected successfully");
//         BasicDBObject newDocument = new BasicDBObject();
//         newDocument.append("$set", new BasicDBObject().append("likes", 200));
//         BasicDBObject searchQuery = new BasicDBObject().append("id", 1);
//         collection.updateOne(searchQuery, newDocument);
//         System.out.println("Document updated successfully");
//     }
//     public void delete()
//     {
//         MongoClient mongo = new MongoClient("localhost" , 27017);
//         System.out.println("Connected to the database successfully");
//         MongoDatabase database = mongo.getDatabase("TYITEXAM");
//         MongoCollection <Document> collection = database.getCollection("restraunt");
//         System.out.println("Collection restraunt selected successfully");
//         BasicDBObject searchQuery = new BasicDBObject();
//         searchQuery.put("id", 1);
//         collection.deleteOne(searchQuery);
//         System.out.println("Document deleted successfully");
//     }
// }
// class CRUD
// {
//     public static void main(String args [])
//     {
//         CRUDdata crud = new CRUDdata();
//         // crud.insert();
//         // crud.read();
//         // crud.update();
//         // crud.read();
//         // crud.delete();
//         crud.read();
//     }
// }


// 3. Create a database and collection in mongoDB and perform CRUD operations for collection using php.

// <?php

// insert data in mongoDB

// echo "Connection to database successfully <br>";
// $bulkWrite = new MongoDB\Driver\BulkWrite;
// $doc = ['name' => 'Deepak', 'class' => 'TYIT', 'Rollno' => '229749'];
// $bulkWrite->insert($doc);
// $m->executeBulkWrite('TYITEXAM.restraunt', $bulkWrite);
// echo "Data inserted successfully";

//update data in the database

// $bulkWrite = new MongoDB\Driver\BulkWrite;
// $filter = ['name' => 'Ram'];
// $update = ['$set' => ['name' => 'Smith', age => 35, RollNo => 3546, Project => 'Guess what?']];
// $options = ['multi' => false, 'upsert' => false];
// $bulkWrite->update($filter, $update, $options);
// $m->executeBulkWrite('TYITEXAM.restraunt', $bulkWrite);
// echo "Data updated successfully";

//delete data in the database

/// $filter = [];
// $options = ['limit' => 0];
// $bulkWrite->delete($filter, $options);
// $m->executeBulkWrite('TYITEXAM.restraunt', $bulkWrite);
// echo "Data deleted successfully";

//read data from the database

//m = new MongoDB\Driver\Manager("mongodb://localhost:27017");
//db = $m->selectDB("TYITEXAM");
//collection = $db->selectCollection("restraunt");
//cursor = collection.find();
//foreach (cursor as $document)
//{
//    echo $document["name"] . "<br>";
//    echo $document["class"] . "<br>";
//    echo $document["Rollno"] . "<br>";
//}


// $m->new MongoDB\Driver\Query($filter, $options);
// $db = $m->selectDB('TYITEXAM');
// $collection = $db->selectCollection('restraunt');
// $cursor = $collection->find();
// foreach ($cursor as $document) {
//     echo $document["name"] . "\n";
// }










//1  write a jQuery  to animate  multiple css properties.

{/* <script>
        $(document).ready(function () {
            $("#id1").css("background","black")
            $(".class1").css("background","pink")
            $("h5").css("background","yellow")
            })
</script>
<body>
    <p id="id1"> HI there !! ✌✌ <br> </p>
    <p class="class1">Deepak vishwakarma : 229749 <br></p>
    <h5>Tyit : BscIT</h5>
</body> */}


// 2. Write a jQuery effect method with a callback function.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function(){
                $("paradox").hide()
            })
            $("#b2").click(function(){
                $("paradox").show()
            })
        })
    </script> 
<body>
    <button id="b1">Hide</button>
    <button id="b2">Show</button>
    <p id="paradox">Deepak vishwakarma : 229749</p>
</body> */}


// 3. Write a jQuery to select elements by class name,id and element name.

{/* <script>
    $(document).ready(function () {
        $("#id1").css("background","black")
        $(".class1").css("background","pink")
        $("h5").css("background","yellow")
        })
</script>
<body>
    <p id="id1"> HI there !! ✌✌ <br> </p>
    <p class="class1">Deepak vishwakarma : 229749 <br></p>
    <h5>Tyit : BscIT</h5>
</body> */}


// 4. Write a jQuery to show the use of click() ,hover() , on() , trigger(), off() events.

{/* <script>
        const myOwnEvent = () => {
            alert("heyyy yeah 😎")
        }
        $(document).ready(function () {
            $("#id1").click(function () {
                alert("Button clicked 😒")
            })
            $("#🙃").hover(function () {
                $(this).css("background-color", "yellow")
            }, function () {
                $(this).css("background-color", "pink")

            })
            $("#▶").on("click", function () {
                alert("The paragraph was clicked.")
            })
            $("#⏸").off("click", function () {
                alert("the paragraph was clicked on purpose")
            })
            $("#⚛").click(function () {
                $(this).trigger("click",function () {
                    alert("heyyy yeah 😎")
                })
            })
        })
    </script> 
    <body>
        <paradox>
        HI there !! ✌✌ <br>
        Deepak vishwakarma : 229749 <br>
        Tyit : BscIT <br>
    </paradox>
    <button id="id1">click me 😒</button>
    <button id="⚛"> trigger</button> 
    <button id="🎉">Events</button>
    <button id="🙃">Hover</button>
    <button id="▶">on</button>
    <button id="⏸">off</button>


    </body> */}


// 5. Write a jQuery to change  text content of a paragraph on click of a button.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").text("Deepak vishwakarma : 229749")
            })
            $("#b2").click(function () {
                $("#p1").html("<b>Deepak vishwakarma : 229749</b>")
            })
        })
    </script>
    <body>
        <button id="b1">Text</button>
        <button id="b2">HTML</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}


// 6. Write a jQuery to add and remove a class from an element.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").addClass("class1")
            })
            $("#b2").click(function () {
                $("#p1").removeClass("class1")
            })
        })
    </script>
    <body>
        <button id="b1">Add class</button>
        <button id="b2">Remove class</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}


// 7. Write a jQuery to set the duration in slide toggle effect.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").slideToggle("slow")
            })
        })
    </script>
    <body>
        <button id="b1">Slide Toggle</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}


// 8. Write a jQuery to insert multiple HTML elements at the begginning and end of the element.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").prepend("<b>Deepak vishwakarma : 229749</b>")
            })
            $("#b2").click(function () {
                $("#p1").append("<b>Deepak vishwakarma : 229749</b>")
            })
        })
    </script>
    <body>
        <button id="b1">Prepend</button>
        <button id="b2">Append</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}




// 9. Write a jQuery to create your own customized event.

{/* <script>
        const myOwnEvent = () => {
            alert("heyyy yeah 😎")
        }
        $(document).ready(function () {
            $("#⚛").click(function () {
                $(this).trigger("click",function () {
                    alert("heyyy yeah 😎")
                })
            })
        })
    </script>
    <body>
        <button id="⚛"> trigger</button>
    </body> */}


// 10. Write a jQuery to create animation effect.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").animate({ left: '250px' })
            })
            $("#b2").click(function () {
                $("#p1").animate({ left: '0px' })
            })
        })
    </script>
    <body>
        <button id="b1">Animate</button>
        <button id="b2">Animate</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}



// 11. Write a jQuery to perform Method Chaining.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").css("color", "red").slideUp(2000).slideDown(2000)
            })
        })
    </script>
    <body>
        <button id="b1">Method Chaining</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}


// 12. Write a jQuery to create fade in and fade out effect.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").fadeIn()
            })
            $("#b2").click(function () {
                $("#p1").fadeOut()
            })
        })
    </script>
    <body>
        <button id="b1">Fade In</button>
        <button id="b2">Fade Out</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}


// 13. Write a jQuery to remove the parent element of a paragraph.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").parent().remove()
            })
        })
    </script>
    <body>
        <button id="b1">Remove Parent</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}



// 14. Write a jQuery to remove the css class from an element.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").removeClass("class1")
            })
        })
    </script>
    <body>
        <button id="b1">Remove Class</button>
        <p id="p1" class="class1">Deepak vishwakarma : 229749</p>
    </body> */}



// 15. Write a jQuery to get and set text content of a paragraph.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").text("Deepak vishwakarma : 229749")
            })
            $("#b2").click(function () {
                alert($("#p1").text())
            })
        })
    </script>
    <body>
        <button id="b1">Set Text</button>
        <button id="b2">Get Text</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}


// 16. Write a jQuery to set the duration in slide toggle effect.

{/* <script>
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#p1").slideToggle("slow")
            })
        })
    </script>
    <body>
        <button id="b1">Slide Toggle</button>
        <p id="p1">Deepak vishwakarma : 229749</p>
    </body> */}



// 17. Write a jQuery to get and set the value of HTML.

{/* <script>
        $(document).ready(function () {
            $(".1️⃣").click(function () {
                var str = $("div").text();
                alert(str);
            });
            $(".2️⃣").click(function () {
                $("div").html("<p> HI there !! ✌✌ <br>  Deepak vishwakarma : 229749 <br>  Tyit : BscIT <br></p> ")
            })
        });
    </script>
    <body>
        <button class="1️⃣">Get Value</button>
        <button class="2️⃣">Set Value</button>
        <div>Deepak vishwakarma : 229749</div>
    </body> */}











// 1. create a JSON file 

{/* <script type="text/javascript">
    var data={
    "Name":"Deepak Vishwakarma",
    "Rollno":229749,
    "Sem":5
};
document.writeln(JSON.stringify(data)+"<br/>");
document.writeln(JSON.stringify(data,["Name","Rollno","Sem"])+"<br/>");
document.writeln(JSON.stringify(data,["Name","Rollno","Sem"],5));
</script> */}






// 2. parse JSON file

{/* <script>
        const obj = {
            "name": "Deepak vishwakarma",
            "age": 20,
            "city": "Thane",
            "state": "Maharashtra",
            "country": "India"
        }
        const myJSON = JSON.stringify(obj)
        const myObj = JSON.parse(myJSON)
        document.writeln(myObj.name);
        for (key in myObj) {
            document.write("</br>" + key + ":" + myObj[key]);
        }
        var json_obj = JSON.parse(myObj, function (name, value) {
            if (name == "Thane") {
                return undefined;
            }
            else {
                return value;
            }
        });
        for (key in json_obj) {
            document.write("</br>" + key + ":" + json_obj[key]);
        }
    </script>
     */}
     {/* 
       <script type="text/javascript">
        var data = '{"name":"Deepak Vishwakarma","sem":5,"Couse":"BscIT"}';
        var json_obj = JSON.parse(data, function (name, value) {
            return value;
        });
        document.writeln(json_obj.name);
        for (key in json_obj) {
            document.write("</br>" + key + ":" + json_obj[key]);
        }
        var json_obj = JSON.parse(data, function (name, value) {
            if (name == "sem") {
                return undefined;
            }
            else {
                return value;
            }
        });
        for (key in json_obj) {
            document.write("</br>" + key + ":" + json_obj[key]);
        }
    </script>
        */}

