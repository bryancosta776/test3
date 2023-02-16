const express = require('express')

const app = express()

app.use(express.json())

app.get('/server', (req, res) => {
    
    let yer = [10, 5, 9, 7, 10, 1, 2, 5, 4]
    
    function selection_Sort(arr){
        let temp;
        let min_index
        for(i = 0; i < arr.length; i++){
            min_index = i
            for(let j = i + 1; j < arr.length; j++)
                if(arr[j] < arr[min_index])
                    min_index = j
                temp = arr[i];
                arr[i] = arr[min_index]
                arr[min_index] = temp   
        }
        return arr
    }
    
    const result = selection_Sort(yer)
    res.json(result)


})


app.listen(8282, () => {
    console.log('vai rolar o bagulho doido!')
})