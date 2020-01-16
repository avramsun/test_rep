// let bt = document.getElementsByTagName('button')[0];

// // bt.addEventListener('click', () => {
// //     alert('1');
// // });

// // bt.addEventListener('click', () => {
// //     document.body.style.backgroundColor = 'red';
// // });

// // bt.addEventListener('click', () => {
// //     bt.style.height = '100px';
// //     bt.style.backgroundColor = 'red';

// // });
// let div = document.createElement('div');
// function changeColor (){
// let groundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')';
// div.style.backgroundColor = groundColor;
// div.style.height = random(number) + 'px';
// div.style.width = random(number) + 'px';
// document.body.insertBefore(div,document.getElementsByTagName('script')[0])
// };



// let number = 1000;
// function random (number){
//     return Math.floor(Math.random()*(number+1));
//     }
    

// bt.addEventListener('click', () => {
//     let div1 = document.createElement('div');
//     function circle (){
//     let groundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')';
//     div1.style.backgroundColor = groundColor;
//     div1.style.height = random(number) + 'px';
//     div1.style.width = random(number) + 'px';
//     div1.style.borderRadius = random (100) + '%'
//     document.body.insertBefore(div1,document.getElementsByTagName('script')[0])
//     };
//     circle();
// });

// bt.addEventListener('click', () => {

//     changeColor();
// });

let number = 1000;
function random (number){
    return Math.floor(Math.random()*(number+1));
};



let bt = document.getElementsByTagName('button')[0];

function makeK(){
    let div = document.createElement('div');
    div.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')';
    div.style.width = random(1000) + 'px';
    div.style.height = div.style.width;
    div.style.borderRadius = '50%';
    document.getElementsByTagName('script')
};


bt.addEventListener('click', makeK);
