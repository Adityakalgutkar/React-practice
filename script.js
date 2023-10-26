document.querySelector("#root").querySelector("h1").innerHTML="Hello World";
const tag=document.createElement("p");
document.querySelector("#root").appendChild(tag).innerHTML="Hi how are you";

//<div id=root>
/* <div> 
    <h1>This is the h1</h1>
    <h1>This is the 2nd one</h1>
</div>

<div>

    <h2>This is the h2 </h2>
        <h2>This is the 2nd one</h2>
</div>

</div> */

const content=React.createElement("div",{id:'prior'},[
         React.createElement("div",{},[React.createElement("h1",{},"This is the h1"),
         React.createElement("h1",{id:"h1"},"This is the 2nd one")]),
         React.createElement('div',{},[React.createElement("h2",{},"This is the h2"),
         React.createElement("h2",{id:"h2"},"This is the 2nd one")])]);




const injectTo=ReactDOM.createRoot(document.querySelector("#root"));
console.log(injectTo)
injectTo.render(content)

