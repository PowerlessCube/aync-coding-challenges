// (#Q2) Create a function which receives a function as argument and executes it after 2 seconds

const delayByTwoSeconds = (cb) => {
  if (typeof cb !== "function") throw new Error("not a callback function");
  setTimeout(() => cb(), 2000);
};

delayByTwoSeconds(() => console.log("I will run after two seconds"));
