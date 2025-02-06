let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv= document.querySelector(".copyCode");
let rgb1="#000";
let rgb2="#555";

let HexValue=()=>{
    let myHexValue = "0123456789abcdef";
    let colours="#"
        for (let i = 0; i < 6; i++) {
            colours=colours+myHexValue[Math.floor(Math.random() * 16)];
        }
        return colours;
};

const handelButton1 = () => {
   rgb1=HexValue();
   console.log(rgb1);
   btn1.innerText=rgb1
   document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1},${rgb2})`
   copyDiv.innerHTML= `background-image: linear-gradient(to right, ${rgb1},${rgb2})`
};

const handelButton2=()=>{
    rgb2=HexValue();
    console.log(rgb2);
    btn2.innerText=rgb2
    document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1},${rgb2})`
    copyDiv.innerHTML= `background-image: linear-gradient(to right,${rgb1},${rgb2})`
}

btn1.addEventListener('click', () => {
    handelButton1()
});

btn2.addEventListener('click', () => {
    handelButton2()
});

copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
})