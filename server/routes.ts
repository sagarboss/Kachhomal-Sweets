import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // All product and category data is now static in the frontend
  // No API routes needed
  return httpServer;
}
