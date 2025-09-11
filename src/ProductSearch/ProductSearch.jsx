import React, { useState, useEffect } from 'react'
import './ProductSearch.css'
import { Link } from 'react-router-dom'
import Data from '../Data'
import { Suspense } from 'react'
import Header from '../Header/Header'

const ProductSearch = () => {
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('')
    const [data, setData] = useState([])
    const filteredData = Data.filter(e => e.title.includes(searchValue) && e.category.includes(category))
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const findTheme = JSON.parse(localStorage.getItem('GinaTheme'))
        setTheme(findTheme)
        localStorage.setItem('GinaData', JSON.stringify(Data))
        const alldata = JSON.parse(localStorage.getItem('GinaData')) || Data
        setData(alldata)
    }, [])
    
      setInterval(() => {
      const findTheme = JSON.parse(localStorage.getItem('GinaTheme'))
        setTheme(findTheme)
   }, 200);

    const chooseCategory = (cat) => {
        if(category == cat){
            setCategory('')
        } else(
            setCategory(cat)
        )
        
    }

  return (
    <>
    <Header/>
        <div className={theme ? "searchit" : "searchit dark"}>
            <div className="container">
                {/* head */}
                <div className="head">
                    <input type="text" placeholder='type to search..' onChange={(e) => setSearchValue(e.target.value)}/>
                </div>

                <div className="category">
                <div className={category == '' ? 'cate cat' : 'cat'} onClick={() => setCategory('')}>all</div>
                    <div className={category == 'men' ? 'cate cat' : 'cat'} onClick={() => chooseCategory('men')}>Men</div>
                    <div className={category == 'women' ? 'cate cat' : 'cat'} onClick={() => chooseCategory('women')}>Women</div>
                    <div className={category == 'kids' ? 'cate cat' : 'cat'} onClick={() => chooseCategory('kids')}>Kids</div>
                </div>

                {/* grid */}
                <div className="grid">
                    {data.length != 0 && filteredData.map((item) => (
                        <>
                            <Link to={`/details/${item.id}`} className="card">
                                <img src={item.img} alt="" />
                    
                                <h1 className="title">{item.title}</h1>
                    
                                <div className="prices">
                                    <h1 className="price">${item.price}</h1>
                                    <h3 className="formerPrice">${item.formerPrice}</h3> 
                                </div>
                    
                                    <button className="btn">Add To Cart</button>
                            </Link>
                        </>
                    ))}
                </div>

              <Suspense>
                     {data.length == 0 && <>
                        <h2 className='error'>No product(s) found</h2>
                    </>}
              </Suspense>
            </div>
        </div>
    </>
  )
}

export default ProductSearch