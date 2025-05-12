import mysql from "mysql2/promise";

export default defineEventHandler(async (event) => {
  // Добавляем подробное логирование
  console.log("Starting DB connection...");

  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "igor_admin",
      password: "1777177zZ$",
      database: "igor_wedding",
      port: 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("DB connected!");

    const { main_guest, attendance, guests, total_guests } = await readBody(
      event
    );
    console.log("Received data:", {
      main_guest,
      attendance,
      guests,
      total_guests,
    });

    const [results] = await db.execute(
      `INSERT INTO wedding_rsvp 
      (main_guest, attendance, guests, total_guests) 
      VALUES (?, ?, ?, ?)`,
      [main_guest, attendance, JSON.stringify(guests), total_guests]
    );

    console.log("Insert results:", results);
    await db.end();

    return {
      success: true,
      insertedId: results.insertId,
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      error: true,
      message: error.message,
      code: error.code,
    };
  }
});
