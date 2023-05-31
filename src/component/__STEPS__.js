/**
 * Mongodb Connection
 * 1.Create Account
 * 2. whitelist IP Address
 * 3. database > connect > drive  > Node > ShowAll Code
 * 4. Change the password the uri
 * 
 * --------------------------------------
 * 1. create --- POST
 * 2. app.post("/users" , async (req , res) =>{})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. Access data from the body: const user = req.body
 * 6. const result = await usersCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * 
 * 
 * CLIENT
 * 1. create fetch
 * 2. add secound parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'ccontent-type' : 'application/json'}
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * 
 * 
 * -------------------------
 * READ
 * **/ 