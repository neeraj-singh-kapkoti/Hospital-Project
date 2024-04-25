## 3 MongoDb -

![Screenshot 2024-04-17 145900](https://github.com/Gaurav038/interview-notes/assets/78479119/c14a357b-cc1f-4324-b8ed-1c23635995a4)
While horizontal scaling refers to adding additional nodes, vertical scaling describes adding more power to your current machines. For instance, if your server requires more processing power, vertical scaling would mean upgrading the CPUs.
- MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas.
- It provides easy scalability and is a cross-platform, document-oriented database.
- MongoDB works on the concept of Collection and Document.
- It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.

 - A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:
{"greeting" : "Hello world!"}

- A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.

## Mongoose:
Installation: You can install Mongoose using npm or yarn:

```bash
  npm install mongoose
```
Connecting to MongoDB: Mongoose provides a connect method to establish a connection with the MongoDB database.
```bash 
  const mongoose = require('mongoose');
```
```bash 
  mongoose.connect('mongodb://localhost:27017/my_database');
```
Defining Schemas: Mongoose allows you to define schemas to model your data structures.

```bash 
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
      name: String,
      age: Number,
      email: String
  });
```
Creating Models: Models are constructors compiled from schemas. They represent documents that can be saved and retrieved from the database.

```bash 
const User = mongoose.model('User', userSchema);
CRUD Operations with Mongoose:
Creating a Document:
```bash 
const newUser = new User({
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
});

newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log('User created:', user);
});
```
Reading Documents:
```bash 
User.find({}, (err, users) => {
    if (err) return console.error(err);
    console.log('All users:', users);
});
```
Updating a Document:
```bash 
User.findOneAndUpdate(
    { name: 'John Doe' }, 
    { age: 35 }, 
    { new: true }, 
    (err, user) => {
        if (err) return console.error(err);
        console.log('Updated user:', user);
    }
);
```
Deleting a Document:
```bash 
User.findByIdAndDelete(req.params.id), (err) => {
    if (err) return console.error(err);
    console.log('User deleted successfully');
});
```
## Object-Relational Mapping (ORM) vs Object-Document Mapping (ODM)

ORM (Object-Relational Mapping) and ODM (Object-Document Mapping) are both programming techniques that facilitate the conversion of data between incompatible type systems: relational databases and object-oriented programming languages for ORM, and document databases and object-oriented programming languages for ODM. While both serve a similar purpose, there are some differences between them:

### ORM (Object-Relational Mapping):

- **Targets Relational Databases:** ORM is used primarily with relational databases, where data is organized into tables with rows and columns.
- **Maps Objects to Tables:** ORM maps objects from an object-oriented programming language (like Java or Python) to tables in a relational database. Each object typically corresponds to a row in a table, and object properties map to columns.
- **SQL-Based:** ORM libraries often generate SQL queries to interact with the database. They allow developers to use object-oriented programming concepts and methods to perform CRUD operations without writing SQL queries explicitly.
- **Examples:** Examples of ORM frameworks include Hibernate (for Java), Entity Framework (for .NET), and Sequelize (for Node.js).

### ODM (Object-Document Mapping):

- **Targets Document Databases:** ODM is used primarily with document databases, where data is stored in the form of documents (e.g., JSON or BSON) rather than tables.
- **Maps Objects to Documents:** ODM maps objects from an object-oriented programming language to documents in a document database. Each object typically corresponds to a document, and object properties map to fields in the document.
- **Query Language:** ODM libraries often provide query languages or methods specific to the document database they are designed for. These query languages are designed to work with the structure of documents rather than relational tables.
- **Examples:** Examples of ODM frameworks include Mongoose (for MongoDB with Node.js), Morphia (for MongoDB with Java), and Doctrine MongoDB (for PHP).

In summary, while both ORM and ODM serve the purpose of bridging the gap between object-oriented programming languages and database systems, they are tailored to work with different types of databases and have different design considerations based on the underlying data models.


## Middleware Mongoose

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level

Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.

Document middleware is supported for the following document functions. In Mongoose, a document is an instance of a Model class. In document middleware functions, this refers to the document. To access the model, use this.constructor.

- validate
- save
- remove(deprecated)  ---->   deleteOne
- updateOne
- deleteOne

## Filter query
![Screenshot 2024-04-18 150432](https://github.com/Gaurav038/interview-notes/assets/78479119/aaa98f1a-faaa-4876-9ea9-5560b8771c1e)

## Using `populate()` in Mongoose

In MongoDB, the `populate()` method is a feature provided by Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js. It allows you to automatically replace specified paths in a document with documents from other collections. This is particularly useful when you have relationships between different types of data stored in separate collections and you want to fetch and display related data together.

### Example

Suppose you have two Mongoose models, `User` and `Post`, where each post is associated with a user through a `user` field:

```javascript
// User model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    // Other fields
});

const User = mongoose.model('User', userSchema);

// Post model
const postSchema = new Schema({
    title: String,
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' } // Reference to User model
});

const Post = mongoose.model('Post', postSchema);

// Find a post and populate the 'user' field with the corresponding user document
Post.findById(postId)
    .populate('user')
    .exec((err, post) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(post);
    });
```

![Screenshot 2024-04-19 105428](https://github.com/Gaurav038/interview-notes/assets/78479119/026821cb-a414-44b8-bc62-63035531913b)

### select() and sort()

select() is a method of Mongoose that is used to select document fields that are to be returned in the query result.
```bash
User.find()
    .select('name age')
```
In Mongoose, you can sort the query results using the sort() method. The sort() method accepts an object specifying the fields to sort by and the order (1 for ascending, -1 for descending).

```bash
User.find({})
    .sort({ age: 1 }) // Sort by 'age' in ascending order
```
## Aggregate

In MongoDB, Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. the aggregate() method is used to perform complex data aggregation operations on collections. It is part of the MongoDB aggregation framework, which is a powerful tool for manipulating and transforming data in various ways. 

Overview of the Aggregation Framework:
- Pipeline: The aggregation framework works with an aggregation pipeline, which is a sequence of stages that transform the data as it passes through the pipeline. Each stage performs a specific operation on the input data and passes the result to the next stage.
- Stages: Each stage in the pipeline is an object with a specific operator, such as $match, $group, $sort, and others. These operators perform different types of data manipulation.
- Results: The final output of the aggregation pipeline is the result of the last stage, which may include transformed documents or aggregated data.

Common Aggregation Operators:
 - $match: Filters the documents based on a specified condition.
```javascript

// Example: Filter documents where age is greater than 30
{ $match: { age: { $gt: 30 } } }
```
- $group: Groups the documents based on a specified field and performs aggregations such as sum, average, etc.
```javascrip

// Example: Group by department and calculate the average age
{ $group: { _id: '$department', averageAge: { $avg: '$age' } } }
```
- $sort: Sorts the documents based on a specified field.
```javascrip
// Example: Sort by age in ascending order
{ $sort: { age: 1 } }
```

- $project: Reshapes the documents by including or excluding fields.
```javascrip
// Example: Include only the name and age fields
{ $project: { name: 1, age: 1 } }
```
- $unwind: Deconstructs an array field in each document into multiple documents, one per array element.
```javascrip
// Example: Unwind the 'hobbies' array field
{ $unwind: '$hobbies' }
```
- $lookup: Performs a left outer join to another collection and includes the results as a new field.
```javascrip
// Example: Lookup documents from the 'orders' collection where the userId matches
{ $lookup: { from: 'orders', localField: 'userId', foreignField: 'userId', as: 'userOrders' } }
```
