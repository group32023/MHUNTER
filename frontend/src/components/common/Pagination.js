import React from 'react'

const Pagination = ({totalLines, linesPerPage, setCurrentPage}) => {

    let pages = [];
    for(let i = 1; i<=Math.ceil(totalLines/linesPerPage);i++){
        pages.push(i);
    }
  return (
    <div>
   
      {pages.map((page,index) => {
        // eslint-disable-next-line no-undef
        return <button key={index} onClick={()=> setCurrentPage(page)}>{page}</button>
      })};
    
    </div>
  )
}

export default Pagination
