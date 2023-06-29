function greet() {
  const message = "Good evening";
  if(message.length > 20) {
    console.log("Long boring message");
  }
  return message;
}

console.log(greet())
