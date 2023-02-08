const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://notnag:nagraj@cluster0.9mdc9oz.mongodb.net/evrythng?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
