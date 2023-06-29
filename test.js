function greet() {
  const message = "Good evening";
  if(message.length > 20) {
    console.log("It is a long boring message");
  }
  return message;
}

console.log(greet())
