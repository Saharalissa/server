module.exports = app => {
  const users = require("../controllers/controller.js");

  // Create a new Customer
  // app.post("/customers", customers.create);

  // Retrieve all Customers
  // app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  // app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  // app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  // app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  // app.delete("/customers", customers.deleteAll);
   // Create a new User
   app.post("/users", users.create);
};
