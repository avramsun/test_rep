let input = document.getElementsByTagName('input')[0];

let p = document.createElement('p');
document.body.insertBefore(p,document.getElementsByTagName('script')[0]);


input.addEventListener('input', () => {
    p.textContent = input.value;
    
})