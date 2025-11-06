// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
  shopName: "Drinks R Us",
  productCategories: [
    "Beer", "Wine", "Soft Drinks", "Hot Drinks",
    "Juices", "Smoothies", "Energy Drinks",
    "Mocktails", "Water & Sparkling", "Tea & Coffee"
  ],
  products: {
    "Beer": ["Lager", "Pale Ale", "IPA", "Stout"],
    "Wine": ["Merlot", "Cabernet Sauvignon", "Chardonnay", "Rosé"],
    "Soft Drinks": ["Cola", "Lemonade", "Ginger Beer", "Orange Soda"],
    "Hot Drinks": ["Hot Chocolate", "Chai Latte"],
    "Juices": ["Orange", "Apple", "Mango", "Pineapple"],
    "Smoothies": ["Berry Blast", "Tropical Mix", "Green Glow"],
    "Energy Drinks": ["Original", "Sugar-Free", "Citrus"],
    "Mocktails": ["Virgin Mojito", "Nojito Berry", "Sunset Spritz"],
    "Water & Sparkling": ["Still", "Sparkling", "Lemon Sparkling"],
    "Tea & Coffee": ["Americano", "Latte", "Flat White", "English Breakfast Tea"]
  },
  shops: [
    { name: "New Cross",   manager: "A. Patel",  address: "123 Deptford High St, London SE14" },
    { name: "Stratford",   manager: "J. Khan",   address: "15 Broadway, London E15" },
    { name: "Croydon",     manager: "S. Ahmed",  address: "88 High St, Croydon CR0" }
  ]
};



// Handle the main routes
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

//--
router.get('/search_result', function (req, res) {
  // Example: respond with both fields
  res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

//--
router.get("/register", (req, res) => {
  res.render("register.ejs", { shopName: "Drinks R Us" });
});

router.post("/registered", (req, res) => {
  // Basic confirmation message using fields parsed into req.body
  res.send('Hello ' + req.body.first + ' ' + req.body.last + ' (' + req.body.email + '), you are now registered!');
});

//--
// Survey page (GET)
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

// Survey result (POST)
router.post("/survey_result", (req, res) => {
  // See exactly what the form sent
  // console.log("BODY:", req.body);

  // Handle both name="categories[]" and name="categories"
  const raw = req.body.categories ?? req.body["categories[]"] ?? [];

  // Normalise to an array
  const categories = Array.isArray(raw)
    ? raw
    : (typeof raw === "string" ? [raw] : []);

  const data = {
    first: req.body.first || "",
    last: req.body.last || "",
    email: req.body.email || "",
    age: req.body.age || "",
    categories,
    student: req.body.student === "on" ? "Yes" : "No"
  };

  // Optional guard
  // if (categories.length === 0) return res.status(400).send("Please select at least one drink category.");

  res.render("survey_result", { ...shopData, response: data });
});




// Export the router object
module.exports = router;
