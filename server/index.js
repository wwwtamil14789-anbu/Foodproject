const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Food = require('./models/food');
const Booking = require('./models/booking');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI || 
"mongodb+srv://rose:rose@cluster0.bugc4ez.mongodb.net/food_shop?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Error:", err));

/* ================= ROUTES ================= */

// 👉 Get all foods
app.get('/api/products', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Add food
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, image, category } = req.body;

    if (!name || !price || !image || !category) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newFood = new Food({ name, price, image, category });
    await newFood.save();

    res.status(201).json(newFood);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Update food
app.put('/api/products/:id', async (req, res) => {
  try {
    const updated = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Delete food
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Seed data
app.post('/api/products/seed', async (req, res) => {
  try {
    await Food.deleteMany();

    const foods = await Food.insertMany([
      {
        name: "Burger",
        price: "$10",
        image: "https://via.placeholder.com/150",
        category: "Fast Food"
      },
      {
        name: "Pizza",
        price: "$15",
        image: "https://via.placeholder.com/150",
        category: "Italian"
      }
    ]);

    res.json({ message: "Seeded", count: foods.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Create booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, phone, guests, date, time, specialRequest } = req.body;

    if (!name || !email || !phone || !guests || !date || !time) {
      return res.status(400).json({ message: "All required fields must be filled (name, email, phone, guests, date, time)" });
    }

    const newBooking = new Booking({
      name,
      email,
      phone,
      guests,
      date,
      time,
      specialRequest
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});