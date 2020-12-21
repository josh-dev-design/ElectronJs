const stickyNotes = document.getElementsByClassName('stickyNotes')

//Head setting
const mainH = document.getElementById('containerxD')
const colors = document.getElementById('colors')
const inputText = document.getElementById('fieldText')
const textfiled = document.getElementById('')

const submitBtn = document.getElementById('submitButton').addEventListener('click' , summonBtn);

function summonBtn (){
        const list = document.createElement('li')
        const createDiv = document.createElement('div')
        const Xbutton = document.createElement('button')

        createDiv.className = "newDiv"
        list.append(inputText.value)
        document.body.append(createDiv)
        createDiv.append(list)
        createDiv.append(Xbutton)
        Xbutton.classList = "X"
        Xbutton.textContent = "X"
        list.classList = "Stickynotes"
        inputText.value = ""

        Xbutton.addEventListener('click', () =>{
            createDiv.remove()
        })
}


inputText.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        summonBtn();
    }
})



//button settings color
const settings = document.getElementById('settings').addEventListener('click', () =>{
   if(colors.style.display === "block"){
       colors.style.display = "none"
   } else{
       colors.style.display = "block"
   }
})
// Settings Color
const Yellow = document.getElementById('Yellow').addEventListener('click', () =>{
    mainH.style.backgroundColor = "#FFFF00"
})
const Blue = document.getElementById('Blue').addEventListener('click', () =>{
    mainH.style.backgroundColor = "	#3333FF"
})
const DarkGray = document.getElementById('DarkGray').addEventListener('click', () =>{
    mainH.style.backgroundColor = "	#A9A9A9"
})
const Green = document.getElementById('Green').addEventListener('click', () =>{
    mainH.style.backgroundColor = "#32CD32"
})

