const filename = prompt("Enter a filename:"); // For example, "example.txt"

if (!filename.includes(".")) {
  console.log("Invalid filename. It should contain an extension.");
} else {
  const parts = filename.split(".");
  const extension = parts[parts.length - 1];
  console.log("File extension:", extension);
}
