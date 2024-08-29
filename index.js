const os=document.getElementById('os')
console.log(os);



function del(){
os.value=os.value.slice(0,-1)
}

function Clear(){
os.value=""
}
function display(txt)
{
    os.value=os.value+txt;

    console.log(os.value)
}
function calculate(){
    os.value=eval(os.value);
}
function square(){
    let a =prompt('enter the a value');
    let res =a*a;
    alert(`The answer is ${res}`);
}
function cube(){
    let a=prompt('enter the a value');
    let res=a*a*a;
    alert(`The answer is ${res}`);
}
function triangle(){
    let B=prompt('enter the base of triangle');
    let H=prompt('enter the height of triangle');
    let res=1/2*B*H;
    alert(`The answer is ${res}`);
}
function circle(){
    let r= prompt('enter the radius of the circle');
    let res=22/7*r*r;
    alert(`The answer is ${res}`);
}
function rectangle(){
    let l=prompt('enter the length of rectangle');
    let w=prompt('enter the width of the rectangle');
    let res=l*w;
    alert(`The answer is ${res}`);

}