const c = document.querySelector('c')
const k = document.getElementById('k')
const kC = document.getElementById('kC')
const char = document.getElementById('char')

document.addEventListener('keydown', (val) => { 
    if (val.keycode == 13) {
        kC.textContent=(`You pressed key number: ${val.keyCode}.`);
        k.textContent=(`You pressed the space bar.`)
    } else {
        kC.textContent=(`You pressed key ${val.keyCode}.`)
        k.textContent=(`You pressed the ${val.key} key.`)}
        
    })
    
document.addEventListener('keypress', (val) => { 
    if (val.charCode == 13) {
        char.textContent=(`You pressed ${val.charCode}.`)}
    else {
        char.textContent=(`You pressed ${val.charCode}.`)
    }})
    