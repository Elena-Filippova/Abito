import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header/Header"
import { useEffect, useState } from 'react'
import { cardArray } from '../constans'

export const Layout = () => {
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState([])

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleSearchArray = () => {
    setProducts(cardArray.filter((p) => p.title.toLowerCase().includes(searchText) || p.price.toLowerCase().includes(searchText)));
  } 

  useEffect(() => {
    setProducts(cardArray)
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box flex">
              <input 
                type="text" 
                placeholder="Поиск по объявлениям"
                value={searchText}
                onChange={handleSearch}
              />
              <button className="btn btn-primary btn-search flex" onClick={handleSearchArray}>
                <img src="/image/search.svg" alt="Search" />
                <span>Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{products}} />
      </main>
    </>
  );
}