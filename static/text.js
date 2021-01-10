function textAnimation(argument) {
	// body...

	const heading = document.querySelector('.heading');
const characters = heading.textContent.match(/[\w\W]/g);    //Get the texts and create an array.
heading.textContent = '';    //Empty the contents.

// Loop through each character and push it inside heading element as a new span element.
characters.forEach(char => {
  const span = document.createElement('span');
  span.class = "w3-animate-top";
  span.textContent = char;
  heading.appendChild(span);
});

// // Create charcter count variable and set timer with new function called setChar().
// let char = 0;
// let timer = setInterval(setChar, 10);

// //Stop the interval when all characters are rendered else set character span class to faded.
// function setChar(){
//   const spanChar = document.querySelectorAll('span')[char];
//   spanChar.className = 'faded';
//   char++;
//   char === characters.length && clearInterval(timer);
// }}
}
