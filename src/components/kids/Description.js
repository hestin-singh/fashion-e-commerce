import React from 'react';
const Description =({location})=>{
const value = location.state
    if(!value){
        // console.log(props.detail)
        return <div>
            
            {/* {value} */}
        </div>

    }
    

    return(
        <div className="details">
            {/* <img className="image" alt={value.title}  
                src={value.imageUrls["200x00"]}/> */}
            <img className="image"  alt="gfhg" 
                src={value.imageUrls["400x400"]}/>
            <img className="image" alt="gfhg" 
                src={value.imageUrls["800x800"]}/>
                <hr/>
                <strong>Brand : {value.brand}</strong>
            <br/>
            <span>{value.title}</span>
            <br/>
            <strong>Description : </strong> <span>{value.description}</span>
            <div>
            <strong> Selling Price :{value.sizes[0].sellingPrice}</strong>
            <br/>
            <strong>  MRP : <strike>{value.sizes[0].mrp} </strike></strong>
       </div>
        </div> 
    )
}

export default Description;