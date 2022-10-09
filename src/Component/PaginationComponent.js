import React, { useEffect, useState } from 'react';
import './style.css';
const renderData=(items)=>{
        return(
            <ul>
                {items.map((itemshow,index)=>{
                    return <li key={index}>{itemshow.mission_name}</li>
                })}
            </ul>
        )
}
function PaginationComponent() {
    const[items,setItems]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[itemsPerPage,setItemsPerPage]=useState(5)
    const[pageNumberLimit,setpageNumberLimit]=useState(5)
    const[maxPageNumberLimit,setMaxPageNumberLimit]=useState(5)
    const[minPageNumberLimit,setMinPageNumberLimit]=useState(0)
    const pages = []
    for(let i=0;i<=Math.ceil(items.length/itemsPerPage);i++){
        pages.push(i)
    }
    console.log(pages)
    const indexOfLastItem = currentPage * itemsPerPage;
    // 30 1*10
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // 10 - 10 = 0 
    const currentPageItems = items.slice(indexOfFirstItem,indexOfLastItem)
    const handleClick=(event)=>{
        setCurrentPage(event.target.id)
    }
    const renderPageNumbers=pages.map((number)=>{
        if(number<maxPageNumberLimit+1&&number>minPageNumberLimit){
            return (<li key={number}id={number} onClick={handleClick} className={currentPage==number?"active":null}>{number}</li>);
        }
        else{
            return null;
        }
    })
       
    useEffect(
        ()=>{
             fetching()
        },[]
    )
  
    const fetching=()=>{
        fetch('https://api.spacexdata.com/v3/launches').then(response=>response.json()).then((data)=>{
            console.log(data)
            setItems(data)
        })
    }
    const handleprevbutton=()=>{
        setCurrentPage(currentPage-1)
        if((currentPage-1)%pageNumberLimit==0){
            setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit)
        }
    }
    const handlenextbutton=()=>{
        setCurrentPage(currentPage+1)
        if(currentPage+1>maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)
        }
    }
    let pageIncButton = null;
    if(pages.length>maxPageNumberLimit){
        pageIncButton=<li onClick={handlenextbutton}>&hellip;</li>
    }
    let pageDecButton = null;
    // if(pages.length>maxPageNumberLimit){
    //     pageDecButton=<li onClick={handleprevbutton}>&hellip;</li>
    // }
    if(minPageNumberLimit>=1){
        pageDecButton= <li onClick={handleprevbutton}>&hellip;</li>
    }

    return (
        <div>
            <h1>Custom Pagination In React</h1>
            {renderData(currentPageItems)}
            <div className='pagenumbers'>
                <button onClick={handleprevbutton} disabled={currentPage == pages[0]? true:false}>Previous</button>
                {pageDecButton}
            {renderPageNumbers}
                {pageIncButton}
                <button onClick={handlenextbutton} disabled={currentPage == pages[pages.length-1]?true:false}>Next</button>
            </div>
        </div>
    );
}
export default PaginationComponent;