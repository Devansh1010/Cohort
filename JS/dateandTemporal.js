const dateElement = document.querySelector('#date')
const timeElement = document.querySelector('#time')

function getTime(){
    setInterval(()=> {
    const time = new Date()
const hour = (time.getHours() % 12 || 12).toString().padStart(2, '0')
const minutes = time.getMinutes().toString().padStart(2, '0')
const seconds = time.getSeconds().toString().padStart(2, '0')
const ampm = time.getHours() >= 12 ? 'PM' : 'AM';


const day = time.getDay()
const date = time.getDate().toString().padStart(2, '0')
const month = time.getMonth().toString().padStart(2, '0')
const year = time.getFullYear()


const timeString = `${hour} : ${minutes} : ${seconds} : ${ampm}`
const dateString = `${day} : ${date}/${month}/${year}` 


timeElement.innerHTML = timeString
dateElement.innerHTML = dateString
}, 1000)
}

getTime()







