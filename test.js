function greet() {
  const message = "Good evening";
  if(message.length > 20) {
    console.log("A long boring greet")
  }
  return message;
}

const m = greet();
console.log(m)
