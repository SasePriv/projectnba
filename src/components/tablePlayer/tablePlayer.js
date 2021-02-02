import React, {useState, useEffect} from 'react';
import Pagination from "react-js-pagination";
import { useHistory } from 'react-router-dom'
import './tablePlayer.css';

const TablePlayer = ({data, startingValue = 1, disableClick = false}) => {

    const itemsCountPerPage = 15;

    const [activePage, setActivePage] = useState(startingValue);
    const [dataTable, setDataTable] = useState([]);
    const [toggle, setToggle] = useState(false);    

    const history = useHistory();

    useEffect(() => {        
        splices(data);
    },[activePage])

    const splices = (dataTable) => {
        const slice = dataTable.slice((activePage-1)*itemsCountPerPage, activePage*itemsCountPerPage);        
        setDataTable(slice);
    }    

    const handlePageChange = (pageNumber) => {        
        setActivePage(pageNumber)
    }
     
    const shortByParam = (shortBy) => {
        let sort = data.sort((a, b) => {
            if(a[shortBy] < b[shortBy]) { return -1; }
            if(a[shortBy] > b[shortBy]) { return 1; }
            return 0;
        })
        
        if(toggle){
            sort = sort.reverse()
            setToggle(!toggle)
        }else{
            setToggle(!toggle)
        }

        setDataTable(sort)
        splices(sort);
    }

    const handleDetailPlayer = (player) => {
        history.push({
            pathname: "/playerdetail/"+player.first_name+player.last_name,
            state:{player}
        })
    }

    return(
        <div>
            <table className="table table-hover">
                <thead className="headersTable">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" onClick={() => shortByParam("first_name")}>First Name</th>
                        <th scope="col" onClick={() => shortByParam("last_name")}>Last Name</th>
                        <th scope="col" onClick={() => shortByParam("h_meters")}>Hight Meters</th>
                        <th scope="col" onClick={() => shortByParam("h_in")}>Hight Inches</th>
                    </tr>
                </thead>
                <tbody className={`${!disableClick ? "bodyTable" : ""}`}>
                    { dataTable.map((item, index) => {                        
                        return(
                            <tr key={index} onClick={() => (!disableClick) ? handleDetailPlayer(item) : null}>
                                <th scope="row">{(index+1)+((activePage-1)*itemsCountPerPage)}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.h_meters}</td>
                                <td>{item.h_in}</td>
                            </tr>
                        )
                    }) }
                    <tr>

                    </tr>
                </tbody>
            </table>            
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={data.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="itemBox"
                activeClass="activeBox"
            />
        </div>
    )
};

export default TablePlayer;