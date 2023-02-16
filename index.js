const express = require('express')

const app = express()

app.use(express.json())

app.get('/server', (req, res) => {
    
    let yer = [3, 5, 1, 2, 4]
    
    function insertionSort(arr){
        let valor_Atual
        let j;
        for(let i = 1; i < arr.length; i++){
            valor_Atual = arr[i];
            j = i - 1;
                while(j >= 0 && arr[j] > valor_Atual){
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j+1] = valor_Atual            
            }
            return arr
        }

        let result = insertionSort(yer)
        res.json(result)
    })


app.listen(8282, () => {
    console.log('vai rolar o bagulho doido!')
})


/* let index_min;
            index_min = i;
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[index_min]){
                    index_min = j

                temps = arr[i]
                arr[i] = arr[index_min]
                arr[index_min] = temps
                } */