let inputWidth = prompt("Nhập chiều rộng hình chữ nhật:");
let inputHeight = prompt("Nhập chiều cao hình chữ nhật:");

inputWidth = parseInt(inputWidth);
inputHeight = parseInt(inputHeight);

let area = inputWidth * inputHeight;
document.write("Chiều rộng hình chữ nhật là: " + inputWidth);
document.write("<br/>");
document.write("Chiều cao hình chữ nhật là: " + inputHeight);
document.write("<br/>");
document.write("Diện tích hình chữ nhật là: " + area);