import React, { Component } from 'react';
import ArticaleHeader from './Articale/ArticaleComponent/ArticaleHeader'
import BasicTable from './Project_Traker/detail_sheet'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class App extends Component {
  
  
  render() {
    return (
       <div className="App">
       <ArticaleHeader/>
       <BasicTable/>
     
      </div>
    )
  }
}

export default App;