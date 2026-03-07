import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.categories.list.path, async (req, res) => {
    try {
      const allCategories = await storage.getCategories();
      res.json(allCategories);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.products.list.path, async (req, res) => {
    try {
      const allProducts = await storage.getProducts();
      res.json(allProducts);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}

export async function seedDatabase() {
  const existingCategories = await storage.getCategories();
  if (existingCategories.length > 0) return;

  // Create Categories
  const traditional = await storage.createCategory({ name: "Traditional Sweets", description: "Authentic traditional sweets made with pure ghee." });
  const barfis = await storage.createCategory({ name: "Specialty Barfis", description: "Rich and creamy barfis with premium ingredients." });
  const ladoos = await storage.createCategory({ name: "Ladoos", description: "Perfectly round and delicious ladoos for all occasions." });
  const namkeens = await storage.createCategory({ name: "Savory Namkeens", description: "Crispy and savory snacks for your daily cravings." });

  // Create Products
  const sampleProducts = [
    { name: "Sev Mithai (Kesar)", price: 450, categoryId: traditional.id, isSignature: true, imageUrl: "https://images.unsplash.com/photo-1634839845341-3b769213bc54?q=80&w=600&auto=format&fit=crop" },
    { name: "Kaju Katli", price: 900, categoryId: barfis.id, isSignature: true, imageUrl: "https://images.unsplash.com/photo-1599599811452-9dae2da9bc76?q=80&w=600&auto=format&fit=crop" },
    { name: "Mawa Gulab Jamun", price: 350, categoryId: traditional.id, isSignature: true, imageUrl: "https://images.unsplash.com/photo-1610411330366-234220b22da9?q=80&w=600&auto=format&fit=crop" },
    { name: "Motichoor Ladoo", price: 400, categoryId: ladoos.id, isSignature: true, imageUrl: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=600&auto=format&fit=crop" },
    { name: "Special Kesar Peda", price: 500, categoryId: traditional.id, isSignature: true, imageUrl: "https://images.unsplash.com/photo-1589131651877-621535728a50?q=80&w=600&auto=format&fit=crop" },
    { name: "Assorted Farsan", price: 250, categoryId: namkeens.id, isSignature: true, imageUrl: "https://images.unsplash.com/photo-1606822295697-3f30a91f582f?q=80&w=600&auto=format&fit=crop" },
    { name: "Plain Sev Mithai", price: 400, categoryId: traditional.id, isSignature: false },
    { name: "Mix Kaju Sweets", price: 1000, categoryId: barfis.id, isSignature: true },
    { name: "Rasgulla", price: 300, categoryId: traditional.id, isSignature: true },
    { name: "Dry Fruit Atta Ladoo", price: 600, categoryId: ladoos.id, isSignature: true },
    { name: "Kandi Peda", price: 480, categoryId: traditional.id, isSignature: true },
    { name: "Daily Snacks", price: 200, categoryId: namkeens.id, isSignature: false },
  ];

  for (const product of sampleProducts) {
    await storage.createProduct(product);
  }
}
