window.addEventListener("load", () => {
  /* CREATE OBJECTS */

  // It's generally a good idea to declare objects outside of listeners so they are in scope for everything
  // There are exceptions - like if the element isn't on the page yet because it gets added later

  // Instantiate the object needed for TODO #1

  // Instantiate the objects needed for TODOs #2, #3, and #4

  /* CODE TO RUN IMMEDIATELY */

  // Run any code needed to display things on page when it first loads

  // TODO #1 - Add to existing text "Today's date is" using a new Date object and the .toLocaleDateString() method

  const date = new Date();
  const todaysDate = date.toLocaleDateString();
  document.getElementById("date").innerHTML = "Today's date is " + todaysDate;
  /* EVENT LISTENERS */

  // TODO #2 - Add a click event listener for the button

  const numButton = document.getElementById("num-button");
  // numButton.innerHTML = randomizedNumber;

  numButton.addEventListener("click", () => {
    const randomizedNumber = Math.floor(Math.random() * 100);
    console.log("Button Clicked! ", randomizedNumber);
    document.getElementById("random-num").innerHTML = randomizedNumber;
    // TODO #3 - Change the color of the number (currently defaulting to 0) to yellowgreen if even or coral if odd
    // BONUS: Also change the page background to match (use document.body)
    if (randomizedNumber % 2 === 0) {
      document.getElementById("random-num").style.color = "yellowgreen";
      document.body.style.backgroundColor = "yellowgreen";
    } else {
      document.getElementById("random-num").style.color = "coral";
      document.body.style.backgroundColor = "coral";
    }

    // TODO #4 - If the random number is evenly divisible by 3, add the spinning class to the button; otherwise remove it
    if (randomizedNumber % 3 === 0) {
      numButton.classList.add("spinning");
    } else {
      numButton.classList.remove("spinning");
    }

    if (randomizedNumber % 5 === 0) {
      setTimeout(() => {
        alert(`${randomizedNumber} is divisible by 5!!!`);
      }, 50);
    }
  });

  // First test that it's working with a console.log (check browser DevTools Console)
  // Set it to generate a random number (use Math object)

  // Will also need to make the div holding the number visible

  // TODO #5 - Trigger an alert (Google this!) if the number is evenly divisible by 5
  // NOTE: Use setTimeout() (again, be resourceful!) to deal with the race condition where the alert pops up before the new number re-renders on the page; 50ms should be plenty of time to delay

  // As part of TODO #2: Take a look at the content of the different objects you created at the top using console.log and console.dir
});
