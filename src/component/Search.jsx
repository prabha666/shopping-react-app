import React from 'react'

function Search(){
 
    function find(key){
        let result=fetch("https://fakestoreapi.com/products"+key)
    }

    return(
     <div className='col-sm-6 mx-auto'>

     <br />
     <input type="Search" onChange={(e)=>find(e.target.value)} className='form-control' placeholder='Search Product'/>
     

     </div>

    )

}
export default Search;