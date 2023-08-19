function formatHumanReadableDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const now = new Date();

// YYYY-MM-DD HH:mm
const formattedDate1 = formatHumanReadableDate(now);
console.log("YYYY-MM-DD HH:mm:", formattedDate1);

// DD-MM-YYYY HH:mm
const formattedDate2 = `${String(now.getDate()).padStart(2, "0")}-${String(
  now.getMonth() + 1
).padStart(2, "0")}-${now.getFullYear()} ${String(now.getHours()).padStart(
  2,
  "0"
)}:${String(now.getMinutes()).padStart(2, "0")}`;
console.log("DD-MM-YYYY HH:mm:", formattedDate2);

// DD/MM/YYYY HH:mm
const formattedDate3 = `${String(now.getDate()).padStart(2, "0")}/${String(
  now.getMonth() + 1
).padStart(2, "0")}/${now.getFullYear()} ${String(now.getHours()).padStart(
  2,
  "0"
)}:${String(now.getMinutes()).padStart(2, "0")}`;
console.log("DD/MM/YYYY HH:mm:", formattedDate3);
