//create in html al these tags and write the words in js
/* function starter() {
  const elements = [
    { tag: "p", text: "Phrase 1" },
    { tag: "div", text: "Phrase 2" },
    { tag: "footer", text: "Phrase 3" },
    { tag: "section", text: "Phrase 4" },
  ];
  const write = document.querySelector(".container");
  for (i = 0; i < elements.length; i++) {
    write.innerHTML += `<${elements[i].tag}> ${elements[i].text} </${elements[i].tag}>`;
  }
}
starter(); */
const elements = [
  { tag: "p", text: "Phrase 1" },
  { tag: "div", text: "Phrase 2" },
  { tag: "footer", text: "Phrase 3" },
  { tag: "section", text: "Phrase 4" },
];
const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  let createTag = document.createElement(tag);
  createTag.innerText = text;
  div.appendChild(createTag);
}
container.appendChild(div);

