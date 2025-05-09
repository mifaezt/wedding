import mysql from "mysql2/promise";

export default defineEventHandler(async (event) => {
  const { main_guest, attendance, guests, total_guests } = await readBody(
    event
  );

  const db = await mysql.createConnection({
    host: "localhost",
    user: "igor_admin",
    password: "1777177zZ$",
    database: "igor_wedding_rsvp",
  });

  await db.execute(
    `INSERT INTO wedding_rsvp 
    (main_guest, attendance, guests, total_guests) 
    VALUES (?, ?, ?, ?)`,
    [
      main_guest,
      attendance,
      JSON.stringify(guests), // Сохраняем массив как JSON
      total_guests,
    ]
  );

  await db.end();
  return { success: true };
});
