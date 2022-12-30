// import React, {useState, useEffect} from "react";
// import ReactPaginate from 'react-paginate';

// const LeaderboardPagination = (props)=>{
//     const data = props.studentsArray;
//     const [currentItems, setCurrentItems] = useState([]);
//     const [pageCount, setPageCount] = useState(0);
//     const [itemOffset, setItemOffset] = useState(0);
//     const itemsPerPage = 5;

//     useEffect(()=>{
//         const endOffset = itemOffset + itemsPerPage;
//         setCurrentItems(data.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(data.length / itemsPerPage));
//     }, itemOffset, itemsPerPage, data);

//     const handlePageClick = (event)=>{
//         const newOffset = (event.selected * itemsPerPage) % data.length;
//         setItemOffset(newOffset);
//     }
// }

// export default LeaderboardPagination;