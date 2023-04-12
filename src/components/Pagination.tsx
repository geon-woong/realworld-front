import { useState } from "react";
import { useRecoilState } from "recoil";
import { pageAtom } from "../atom";
import { Link } from 'react-router-dom'
export const Pagenation =({ articlesCount, url })=>{
    const [page, setPage] = useRecoilState(pageAtom)
    const totalPage = Math.ceil(articlesCount / 10);
    const pageNums = [...Array(totalPage).keys()].map(p => p + 1);

  if (totalPage === 1) return null;

  return (
    <>
      <nav className="flex justify-center">
        <ul className="flex flex-wrap">
          {pageNums.map(num => (
            <li
              key={num}
              className={`text-xs py-2 px-3 border ${page === num ? 'bg-gray-600 text-white' : ''}`}
            >
              <Link to={url} className="page-link" onClick={() => setPage(num)}>
                {num}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}