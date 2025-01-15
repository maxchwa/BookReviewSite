/*const firstpopup = document.getElementById("popup");
firstpopup.addEventListener("click", myFunction);

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}*/

const youngRomantics = document.getElementById("youngRomantics");
const weight = document.getElementById("weight");
const lifeSale = document.getElementById("lifeSale");
const leftHand = document.getElementById("leftHand");

const bookInfo = document.getElementById("bookInfo");
const bookName = document.createElement("div");
const author = document.createElement("div");
const description = document.createElement("div");
const individualCoverSmall = document.getElementsByClassName("individualCoverSmall");

bookName.style.fontFamily = "Courier";
bookName.style.fontSize = "4vw";
author.style.fontFamily = "Courier";
author.style.fontSize = "3vw";
description.style.fontFamily = "Courier";
description.style.fontSize = "1vw";
description.style.marginTop = "2%";

youngRomantics.addEventListener("click", function() {

    bookName.textContent = "Young Romantics";
    author.textContent = "Daisy Hay";
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    bookInfo.appendChild(bookName);
    bookInfo.appendChild(author);
    bookInfo.appendChild(description);
    youngRomantics.style.filter = "drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.5))";
    weight.style.filter = "grayscale(100%)";
    lifeSale.style.filter = "grayscale(100%)";
    leftHand.style.filter = "grayscale(100%)";
}); 

weight.addEventListener("click", function() {

    bookName.textContent = "Weight";
    author.textContent = "Jeanette Winterson";
    description.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.";
    bookInfo.appendChild(bookName);
    bookInfo.appendChild(author);
    bookInfo.appendChild(description);
    weight.style.filter = "drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.5))";
    youngRomantics.style.filter = "grayscale(100%)";
    lifeSale.style.filter = "grayscale(100%)";
    leftHand.style.filter = "grayscale(100%)";

}); 

lifeSale.addEventListener("click", function() {

    bookName.textContent = "Life For Sale";
    author.textContent = "Yukio Mishima";
    description.textContent = "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";
    bookInfo.appendChild(bookName);
    bookInfo.appendChild(author);
    bookInfo.appendChild(description);
    lifeSale.style.filter = "drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.5))";
    youngRomantics.style.filter = "grayscale(100%)";
    weight.style.filter = "grayscale(100%)";
    leftHand.style.filter = "grayscale(100%)";

}); 

leftHand.addEventListener("click", function() {

    bookName.textContent = "The Left Hand of Darkness";
    author.textContent = "Ursula K. Le Guin";
    description.textContent = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.";
    bookInfo.appendChild(bookName);
    bookInfo.appendChild(author);
    bookInfo.appendChild(description);
    leftHand.style.filter = "drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.5))";
    youngRomantics.style.filter = "grayscale(100%)";
    lifeSale.style.filter = "grayscale(100%)";
    weight.style.filter = "grayscale(100%)";

}); 