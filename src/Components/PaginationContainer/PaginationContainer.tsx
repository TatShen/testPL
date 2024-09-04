"use client";
import React, { useState, useEffect } from "react";

import Card from "@/Components/Card/Card";
import productsApi, { Product } from "@/Services/ProductsServices";
import style from "./PaginationContainer.module.css";
import RequestStore from "@/Store/requestStore";
import { useStore } from "zustand";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

const PaginationContainer = () => {
  const { value, isActive, isPromo } = useStore(RequestStore);
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
        const data = await productsApi.getProducts(
          currentPage,
          perPage,
          value,
          isActive,
          isPromo
        );
        setProducts(Array.isArray(data) ? data : []);

        const totalItems = 50;
        setTotalPages(Math.ceil(totalItems / perPage));

        setVisitedPages((prev) => [...new Set([...prev, currentPage])]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, isActive, isPromo, value]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(totalPages);
    }
  };

  if (loading) {
    return <Loader/>;
  }

  return products.length > 0 ? (
    <div>
      <div className={style.productContainer}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        visitedPages={visitedPages}
        onPageChange={handlePageChange}
        onFirstPage={handleFirstPage}
        onLastPage={handleLastPage}
      />
    </div>
  ) : (
    <div>Not Found</div>
  );
};

export default PaginationContainer;
