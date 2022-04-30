import React, { useState,useEffect } from "react";
import './App.css';
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
function DataList(){
 const[dataList,setDataList]=useState([]);
 const pagination=paginationFactory({
    page:1,
    sizePerPage:10,
    lastPageText:'>>',
    firstPageText:'<<',
    nextPageText:'>',
    prePageText:'<',
    showTotal:true,
    alwaysShowAllBtns:true,
  });
  const columns=[{
      dataField: 'id',
      text: 'Product ID',
      sort:true,
      align: 'center'
    },{
      dataField: 'name',
      text: 'Product Name',
      sort:true,
    },{
      dataField: 'description',
      text: 'Product Description',
      sort:true
    },{
      dataField: 'tagline',
      text: 'Product TagLine',
      sort:true
    },{
      dataField: 'ingredients.malt.0.name',
      text: 'Product Ingredients',
      sort:true
    },{
      dataField:'volume.value',
      text: 'Product Value',
      sort:true
    },{
      dataField: 'volume.unit',
      text: 'Product Unit',
      sort:true
    },{
      dataField: 'first_brewed',
      text: 'First Brewed',
      sort:true
    }];
   useEffect(()=>{
     fetch('https://api.punkapi.com/v2/beers')
     .then(response=>response.json())
     .then(result=>setDataList(result))
     .catch(error=>console.log(error));
   },[])
    return (
      <div>
       <h1 className='text-center'> PRODUCT LIST</h1>
       <BootstrapTable striped
        hover bootstrap4 keyField="id" columns={columns}  data={dataList} pagination={ pagination } />
      </div>
    );
  }
export default DataList;

