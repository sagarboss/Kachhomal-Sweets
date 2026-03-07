import { db } from "./db";
import { categories, products } from "@shared/schema";
import type { Category, Product, InsertCategory, InsertProduct } from "@shared/schema";

export interface IStorage {
  getCategories(): Promise<Category[]>;
  getProducts(): Promise<Product[]>;
  createCategory(category: InsertCategory): Promise<Category>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const [created] = await db.insert(categories).values(category).returning();
    return created;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [created] = await db.insert(products).values(product).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
