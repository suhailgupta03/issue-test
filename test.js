function greet() {
  const message = "Good evening";
  if(message.length > 20) {
    console.log("Big boring message");
  }
  return message;
}

console.log(greet())
