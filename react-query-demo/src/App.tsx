import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Employee from './components/Employee';
import EmployeeRQ from './components/EmployeeRQ';
import Home from './components/Home';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
import CustomQuery from "./components/CustomQuery";
import DynamicParallelQuery from "./components/DyanamicParallelQuery";
import DependentQuery from "./components/DependentQuery";
import Pagination from "./components/Pagination";
import InfintePaging from "./components/InfintePaging";
import PostingData from "./components/PostingData";
import AllColors from "./components/AllColors";
const queryClient = new QueryClient();
const navStyle ={
  display: "inline-flex",
  padding: "10px",
  border:" 1px solid"
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav style={navStyle}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/employee">Employees Render</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/employeeRQ">Employees Render With RQ</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/dyanamicParallel">Dyanmic Parallel Query</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/depedentQueries">Depdent Queries</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/pagination">Paging Demo</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/infinePagination">Infinte Paging Demo</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/addColor">Posting Data</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/allColors">All Colors</Link>
              </li>
            </ul>
          </nav>
          <Routes >
          <Route path="/allColors" element ={<AllColors />} />
          <Route path="/addColor" element ={<PostingData />} />
          <Route path="/infinePagination" element ={<InfintePaging />} />
          <Route path="/pagination" element ={<Pagination />} />
          <Route path='/depedentQueries' element={<DependentQuery email ="rahulpundir@globallogic.com"  />} />
          <Route path='/dyanamicParallel' element={<DynamicParallelQuery empIds ={["1","3"]} />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/employeeRQ' element={<EmployeeRQ />} />
            <Route path='/employeeRQ/:id' element={<CustomQuery />} />
            <Route path='/' element={<Home />} />
          </Routes >
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
