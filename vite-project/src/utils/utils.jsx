// utils.js
export default function handleDownload(filePath, fileName) {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  link.click();
}
