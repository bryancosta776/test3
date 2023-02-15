const express = require('express')

const app = express()

app.use(express.json())

app.get('/server', (req, res) => {
    
    let yer = [10, 5, 9, 7, 10, 1, 2, 5, 4]
    
    function bubbleSort(arr){
        swapped = false;
        
        let end = arr.length - 1

        let temp;
    
        for(i = 0; i < end; i++){
            for(j = 0; j < arr[i]; j++){
                if(arr[i] > arr[i + 1]){
                    swapped = true
                    temp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = temp
                }
                
            }
        }

        console.log(end)
        
    }
    do{
        bubbleSort(yer)
    }while(swapped)

    res.json(yer)


})


app.listen(8282, () => {
    console.log('vai rolar o bagulho doido!')
})