import { PrismaClient } from "@prisma/client"

export class DB {
  private static _instance: PrismaClient
  private constructor() { }
  static get instance() {
    if (!DB._instance) {
      DB._instance = new PrismaClient()
    }
    return DB._instance
  }
}
const db = DB.instance
export default db