import React, { useState }  from 'react';
import data from '../data/data';
import Itemcard from './Itemcard'


const Search = () => {
    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    
    let dataSearch = data.productData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="form-lable h4">Rechercher</label>
                        <input
                            type="text"
                            className="form-control"
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>
                </div>

                {dataSearch.map((item, index) => {
                    return(
                        <Itemcard 
                            img={item.img}
                            title={item.title}
                            price={item.price} 
                            item={item}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Search


