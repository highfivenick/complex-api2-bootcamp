document.querySelector('button').addEventListener('click', getAnimals)


function getAnimals(){
    fetch ('https://zoo-animal-api.herokuapp.com/animals/rand')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h1').innerText = data.name

            document.querySelector('img').src = data.image_link
            
            document.querySelector('.type').innerText = `Type: ${data.animal_type}`
            
            
            document.querySelector('.diet').innerText = `Diet: ${data.diet}`
            
            
            document.querySelector('.lifespan').innerText = `Lifespan: ~${data.lifespan} years`

            
            document.querySelector('.location').innerText = `Native to ${data.geo_range}`
            
            document.querySelector('.habitat').innerText = `Habitat: ${data.habitat}`

           
            document.querySelector('.length').innerText = `Average Length: ${data.length_min} - ${data.length_max}`

            document.querySelector('.weight').innerText = `Average weight: ${data.weight_min} - ${data.weight_max}`


            fetch ('https://owen-wilson-wow-api.herokuapp.com/wows/random')
            .then(res => res.json())
            .then(wowdata => {
                console.log(wowdata)
                console.log(wowdata[0].audio)
                document.querySelector('audio').src = wowdata[0].audio

             
            })
            
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}
        
        
