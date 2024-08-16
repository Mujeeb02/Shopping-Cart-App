import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('rate');
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setItems(data);
        setCategories(['All', ...new Set(data.map((item) => item.category))]);
      } catch (error) {
        console.log('Error fetching data');
        setItems([]);
      }
      setLoading(false);
    };

    fetchProductData();
  }, []);

  const filteredItems = items
    .filter(
      (item) =>
        (category === 'All' || item.category === category) &&
        item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'rate') {
        return b.rating.rate - a.rating.rate;
      } else if (sort === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

      <div className="p-6 bg-gray-100">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[2vh] sm:gap-[15vw] mb-0">
          <SearchBar search={search} setSearch={setSearch} />
          <FilterBar
            category={category}
            setCategory={setCategory}
            categories={categories}
            sort={sort}
            setSort={setSort}
          />
        </div>

        <div>
          {loading ? (
            <Spinner />
          ) : paginatedItems.length > 0 ? (
            <>
              <ProductList items={paginatedItems} />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="flex justify-center items-center min-h-[60vh]">
              <p>No Data found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
