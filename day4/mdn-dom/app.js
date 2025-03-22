'use strict'

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";


const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
sect.appendChild(linkPara);
sect.removeChild(linkPara);
// Newer version
linkPara.remove();
//Older Version
// linkPara.parentNode.removeChild(linkPara);  

para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
para.style.borderRadius = '10px'
// Sets a class already declared in a style sheet
para.setAttribute("class", "highlight");
