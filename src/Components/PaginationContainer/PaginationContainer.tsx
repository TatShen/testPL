"use client"
import React, { useState, useEffect } from 'react';

import Card from '@/Components/Card/Card'; 
import productsApi, { Product } from '@/Services/ProductsServices';
import style from "./PaginationContainer.module.css"


const PaginationContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [visitedPages, setVisitedPages] = useState<number[]>([]);
  const perPage = 8; 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await productsApi.getProducts(currentPage, perPage);
        setProducts(data);
        const totalItems = 50; 
        setTotalPages(Math.ceil(totalItems / perPage));

        setVisitedPages((prev) => [...new Set([...prev, currentPage])]);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={style.productContainer}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>

      <div className={style.pagination}>
      <p 
          onClick={handleFirstPage} 
          className={`${currentPage === 1 || visitedPages.includes(1) ? style.disabled : ''}`}
          style={{ color: currentPage === 1 || visitedPages.includes(1) ? 'gray' : 'black' }}
        >
          First
        </p>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <a
              key={index}
              onClick={() => handlePageChange(pageNumber)}
              className={
                pageNumber === currentPage 
                  ? style.active 
                  : visitedPages.includes(pageNumber) 
                  ? style.visited 
                  : ''
              }
              style={{ color: pageNumber === currentPage ? 'blue' : visitedPages.includes(pageNumber) ? 'gray' : 'black' }}
            >
              {pageNumber}
            </a>
          );
        })}
        <p 
          onClick={handleLastPage} 
          className={`${currentPage === totalPages || visitedPages.includes(totalPages) ? style.disabled : ''}`}
          style={{ color: currentPage === totalPages || visitedPages.includes(totalPages) ? 'gray' : 'black' }}
        >
          Last
        </p>
      </div>
    </div>
  );
};

export default PaginationContainer;

