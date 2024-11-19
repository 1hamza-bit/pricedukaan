'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Pagination = ({ totalPages, currentPage, route }) => {
  const router = useRouter();

  // Don't render pagination if there's only 1 page
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', page);
    router.push(`${route}?${searchParams.toString()}`);
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Adjust this number based on how many pages you want to show at once

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('...'); // Add ellipsis if there's a gap
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-wrap justify-center my-8 gap-3">
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => page !== '...' && handlePageChange(page)}
          disabled={page === '...'}
          className={`px-3 py-1 rounded font-medium ${
            currentPage === page
              ? 'bg-[#059669] text-white'
              : 'bg-[#E8E8E8] hover:bg-opacity-75 text-[#202C33]'
          } ${page === '...' ? 'cursor-default' : ''}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
