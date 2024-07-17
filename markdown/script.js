const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const button = document.getElementById("button");

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

function updateContent() {
  const markdownText = editor.value;
  // const htmlContent = marked.parse(markdownText);

  // const processedHtml = htmlContent.replace(/\n/g, "<br>");

  preview.innerHTML = marked(markdownText, { renderer: renderer });
  // preview.innerHTML = processedHtml;

  // const htmlContent = marked.parse(markdownText);
  // preview.innerHTML = htmlContent;
}

// Update content on textarea input

// editor.innerHTML = marked.parse(

const placeholder = `# Marked in browser\n\n 
## This page is made by **Alejandro Gispert**.
  \n\n 
  ### You can edit the content of this page by typing in the textarea above.
  \n\nThe content will be automatically converted to HTML using the **Marked** library.
  \n\n[Visit my GitHub repository](https://github.com/AlejandroGispert) for more information.

  \n\n<h1>This is a code block:<>\n\n
  You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
\`\`\`
// this is multi-line code:
 
  function helloWorld(){
  console.log("Hello, world!")
}
  helloWorld()
\`\`\`

  > Blockquote
  > hello
  > from Cuba

this is Inline code \` console.log("inline!")\`
 This is a line break.
\n\n---\n\n
    Hi 👋, I'm Alejandro
<h3 align="center">A passionate frontend developer from Cuba living in Denmark</h3>

<h3 align="left">Connect with me:</h3>
<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>  <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a>

<p><img align="left" width="355px" src="https://github-readme-stats.vercel.app/api/top-langs?username=alejandrogispert&show_icons=true&locale=en&layout=compact" alt="alejandrogispert" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=alejandrogispert&show_icons=true&locale=en" alt="alejandrogispert" /></p>

 👋 Hi, I’m @AlejandroGispert

🌱 I’m currently learning React.js and typescript

💞️ I’m on HackYourFuture

 📫 How to reach me: by mail - alejandrobusiness2022@gmail.com

Here is my webpage <a href="https://sparkly-taffy-695cb1.netlify.app/"> => Click Here <= </a>

<p align="left" >
  Codewars Score✨ <a href="https://www.codewars.com/users/AlejandroCoderHYF">
       <img  src="https://www.codewars.com/users/AlejandroCoderHYF/badges/micro?theme=light?top_languages=true" />
    </a>✨
</p>

💪 Strengths in:
* - accesibility-
* - Responsive design-
* - Javascript-
1. and more 
1. much more

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
\n\n---\n\n
  # Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


`;

// );

button.addEventListener("click", () => {
  preview.innerHTML = "";
  editor.value = "";
});

window.onload = function () {
  // Initial content update
  editor.value = placeholder;
  editor.addEventListener("input", updateContent);
  updateContent();
};
