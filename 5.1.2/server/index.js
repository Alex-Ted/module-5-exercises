const express = require("express");

const app = express();

const PORT = 3001;

// app.get('/', (req,res) => {
//     res.send('<h1>Welcome to RF1 Batch</h1>')
// })

// // starts server on port 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

let products = [
  {
    id: 1,
    title: "Nissan GTR",
    price: "100.0",
    quantity: "0",
    image: "product1Image",
  },
  {
    id: 2,
    title: "Porsche 911",
    price: "200.0",
    quantity: "0",
    image: "product2Image",
  },
  {
    id: 3,
    title: "Toyota Trueno AE86",
    price: "250.0",
    quantity: "0",
    image: "product3Image",
  },
  {
    id: 4,
    title: "Philippine Jeepney",
    price: "250.0",
    quantity: "0",
    image: "product4Image",
  }
];

app.use(express.json());

// responds to requests on root URL '/', e.g. localhost:3001/

app.get("/", (req, res) => {
  res.send("<h1>Construction Shop</h1>");
});

// get all contents of database

app.get("/api/products", (req, res) => {
  res.json(products);
});

// get all contents of database

app.get("/api/products", (req, res) => {
  res.json(products);
});

// get a single entry by id

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  res.json(product);
});

// delete an entry, returns status 204 with no response

app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((product) => product.id !== id);

  res.status(204).end();
});

// add a new entry

app.post("/api/products", (req, res) => {
  const maxId =
    products.length > 0 ? Math.max(...products.map((n) => n.id)) : 0;
  const product = req.body;
  //joke.id = maxId + 1; // Assign a new ID to the joke

  products.push(product); // Add the joke to the array
  console.log(products);
  res.json(product);
});

// starts server on port 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.patch("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedProduct = req.body;
  products = products.map((product) => {
    if (product.id === id) {
      return { ...product, ...updatedProduct };
    }
    return product;
  });
  res.json(products.find((product) => product.id === id));
});

app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedProduct = req.body;
  products = products.map((product) => {
    if (product.id === id) {
      return { ...product, ...updatedProduct };
    }
    return product;
  });
  res.json(products.find((product) => product.id === id));
});
