// function
// constructor function
const Fee = function() {




    // function to exicute data
    this.feecal = function() {
        // to count fee
        let total = 0;

        // map loop
        developerData.map( (data,index) =>{
        
            console.log(`
        
            Serial number     : ${data.serialNumber}
            Name              : ${data.name}
            Age               : ${data.Age}
            Location          : ${data.Location}
            Salary            : ${data.amount}    
            
            
            
            

            showing ${ index + 1 } out of ${developerData.length} 
            
            
            
            `)
            total = total + data.amount
        
            
        })
        console.log(`total cost ${total}BDT`)

    }

   

}