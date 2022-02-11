var friends = ["John", "Jane", "Mark", "Katie", "Smith"];

//Function that outputs the chorus for the 99 Lines of Code Song for a single friend
function Sing99LinesSong(singer) {
  let container = document.createElement("div");
  container.classList.add("friend");
  document.body.appendChild(container);

  let friendHeader = document.createElement("h3");
  friendHeader.appendChild(document.createTextNode(singer));
  container.appendChild(friendHeader);

  for (let i = 99; i > 0; i--) {
    let line = "";
    if (i == 1) {
      line = "Only 1 line of code in the file, only 1 more line of code; " +
        singer +
        " strikes one out, clears it all out, no more lines of code in the file!";
    } else if (i == 2) {
      line = "2 lines of code in the file, 2 lines of code; " +
        singer +
        " strikes one out, clears it all out, only 1 line of code in the file!";
    } else {
      line = i +
        " lines of code in the file, " +
        i +
        " lines of code; " +
        singer +
        " strikes one out, clears it all out, " +
        (i - 1) +
        " lines of code in the file!"
    }
    let chorusLine = document.createElement("p");
    chorusLine.classList.add("song-line");
    chorusLine.appendChild(document.createTextNode(line));
    container.appendChild(chorusLine);
  }
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  //Loop over the friends array calling the Sing99LinesSong function
  for (let i = 0; i < friends.length; i++) {
    Sing99LinesSong(friends[i]);
  }
});


