let input = document.getElementById('location')
let btn = document.getElementById('btn')
let temps = document.getElementById('temp')
let desc = document.getElementById('description')
let locationVal = document.getElementById('location-description')

const apikey = '8e868be3dd44cec7d437ab06815249e3'

btn.onclick = function(){
    if(input.value.length === 0){
        alert('enter something')
    }else{

        loc = input.value
        var url = https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}

        fetch(url).then(res => res.json()).then(data =>{

            console.log(data)

            let {temp}  = data.main 
            let {name} = data
            let {description} = data.weather[0]

            temps.textContent = Math.floor(temp - 272)

       locationVal.innerText = name

       desc.innerHTML = description

        } )

        .catch(e => {
            console.log(e.message)
        })

    }

input.value = ''



}





