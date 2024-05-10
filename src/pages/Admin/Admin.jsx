import { useGetData } from "../../Services/Firebade_realTime/services.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Dropdown from "antd/es/dropdown/dropdown.js";
import DropdownButton from "antd/es/dropdown/dropdown-button.js";
import ExitButtonAuth from "../../components/ExitButtonsAuth/ExitButtonAuth.jsx";
import { useEffect, useState } from "react";
import { log } from "loglevel";
import './Admin.scss'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";

export default function Admin({ setShowInfo }) {
    const { data, isLoading } = useGetData([]);
    const [users, setUsers] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterValue, setFilterValue] = useState('all');
    const [totalPages, setTotalPages] = useState(0);
    const [adaptive, setAdaptive] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 760) setAdaptive(false);
    }, []);

    useEffect(() => {
        if (data) setUsers(Object.values(data))
    }, [data]);

    useEffect(() => {
        setShowInfo(false);
        return () => {
            setShowInfo(true);
        }
    });

    useEffect(() => {
        if (users.length > 0) {
            const filteredUsers = filterValue === 'all' ? users : users.filter(item => item.statusUser === filterValue);
            const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
            setCurrentPage(1);
            setTotalPages(totalPages);
        }
    }, [users, itemsPerPage, filterValue]);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    function getColorForStatus(status) {
        switch (status) {
            case "active":
                return 'active';
            case "new":
                return 'new';
            case "critical":
                return 'critical';
            default:
                return 'default';
        }
    }

    function formatDate(date) {
        const formattedDate = new Date(date);
        return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()} в ${formattedDate.getHours()}:${(formattedDate.getMinutes() < 10 ? (`0${formattedDate.getMinutes()}`) : (formattedDate.getMinutes()))}`;
    }

    const displayItems = () => {
        const filteredUsers = filterValue === 'all' ? users : users.filter(item => item.statusUser === filterValue);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredUsers.slice(startIndex, endIndex).map((item, index) => (
            adaptive ? (
                <tr className="adminTable__body-row" key={index}>
                    <td>{startIndex + index + 1}</td>
                    <td>{item.displayName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td><p className={`adminTable__body-status ${getColorForStatus(item.statusUser)}`}>{item.statusUser}</p></td>
                    <td>{formatDate(item.date)}</td>
                </tr>
            ) : (
                <>
                    <DropdownButton onClick={() => {
                        setOpenDropdown(true);
                    }} />
                    <Dropdown key={index} open={openDropdown}>
                        <p>{startIndex + index + 1}</p>
                        <p>{item.displayName}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p className={`adminTable__body-status ${getColorForStatus(item.statusUser)}`}>{item.statusUser}</p>
                        <p>{formatDate(item.date)}</p>
                    </Dropdown>
                </>
            )
        ));
    };

    const firstPage = () => {
        setCurrentPage(1)
    }

    const lastPage = () => {
        setCurrentPage(totalPages)
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const paginationButtons = Array.from({ length: totalPages }, (_, i) => {
        const pageNumber = i + 1;
        return (
            <button
                key={pageNumber}
                onClick={() => changePage(pageNumber)}
                className={pageNumber === currentPage ? 'active' : 'tableContainer__pagination-btn'}
            >
                {pageNumber}
            </button>
        );
    });

    return (
        <div className="adminPage">
            {adaptive ? (
                <>
                    <div className="adminPage__header">
                        <h1>Администратор</h1>
                        <ExitButtonAuth className="exitBtn" />
                    </div>
                    <div className="tableContainer">
                        <div className="tableContainer__actions">
                            <div className="tableContainer__filter">
                                <select onChange={(e) => { setFilterValue(e.target.value) }}>
                                    <option value="all" defaultValue>Все</option>
                                    <option value="active">Active</option>
                                    <option value="new">New</option>
                                    <option value="critical">Critical</option>
                                </select>
                            </div>
                            <div className="tableContainer__pagination">
                                <button onClick={firstPage}><MdFirstPage /></button>
                                <button onClick={prevPage}><MdOutlineKeyboardArrowLeft /></button>
                                {paginationButtons}
                                <button onClick={nextPage}><MdOutlineKeyboardArrowRight /></button>
                                <button onClick={lastPage}><MdLastPage /></button>
                            </div>
                        </div>
                        <table className="adminTable">
                            <tbody className="adminTable__body">
                                <tr className="adminTable__header">
                                    <th>#</th>
                                    <th>Имя пользователя</th>
                                    <th>Електронная почта</th>
                                    <th>Телефон</th>
                                    <th>Статус</th>
                                    <th>Последняя активность</th>
                                </tr>
                                {displayItems()}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="adminPage__container">

                </div>
            )}
        </div>
    );
}
