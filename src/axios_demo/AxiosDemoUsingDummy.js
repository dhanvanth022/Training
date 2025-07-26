import { useEffect,useState } from "react";
import axios from 'axios';
import './store-container.css'

function AxiosDemoUsingDummyJson(){

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        
        axios.get('https://dummyjson.com/products')
        .then(result=>{
            console.log('success block');
            console.log(result);
            setProducts(result.data.products);
        })
        .catch(err=>{
            console.log('failure block');
            console.log('fetching data is failed');
            console.log(err);
        })
    },[])
    return(
        <div>
            <h1 className="text-center my-4">Dummy Json Products</h1>
            <div className="flex-container container">
                {
                    products.map(product=>{
                        return (
                            <div id='card' className="card shadow p-3 mb-4 bg-white rounded my-3 me-3" style={{ width: '250px', textAlign: 'center' }} key={product.id}>
                                <img src={product.images[0]} alt={product.title} className="img-fluid mb-2" style={{ maxHeight: '210px', objectFit: 'cover' }} />
                                <div className="card-img-top mb-2">
                                    <span className="fw-bold display-9">{product.title}</span>
                                </div>
                                <p className="text-success fs-4">${product.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AxiosDemoUsingDummyJson;