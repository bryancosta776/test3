const express = require('express')

const app = express()

app.use(express.json())

app.get('/server', (req, res) => {
    
    let yer = [10, 5, 9, 7, 10, 1, 2, 5, 4]
    
    function quickSort(arr){
       if(arr.length === 0) return [];
       
       if(arr.length === 1) return arr;
       
       let pivot = arr[0]
      
       let head = arr.filter(n => n < pivot)
       
       let equal = arr.filter(n => n === pivot)
       
       let tail = arr.filter(n => n > pivot)
       
       
       return quickSort(head).concat(equal).concat(quickSort(tail))
       
    }

    let result = quickSort([3,2])
    res.json(result)
})


app.listen(8282, () => {
    console.log('vai rolar o bagulho doido!')
})