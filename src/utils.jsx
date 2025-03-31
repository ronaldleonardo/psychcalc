// // utils.js
// export const getCurrentTime = () => {
//   const now = new Date(); // Get the current date and time

//   return {
//     date: now.toLocaleDateString(), // Get the date as a string (e.g., "10/25/2023")
//     hour: now.getHours(), // Get the hour (0-23)
//     minutes: now.getMinutes(), // Get the minutes (0-59)
//     seconds: now.getSeconds(), // Get the seconds (0-59)
//   };
// };

// src/utils.js
export const getCurrentTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
  const hour = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return { date, hour, minutes, seconds };
};
