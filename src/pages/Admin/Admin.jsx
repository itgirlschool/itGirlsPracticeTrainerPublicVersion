import { useGetData, useEditData } from "../../Services/Firebade_realTime/services.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ExitButtonAuth from "../../components/ExitButtonsAuth/ExitButtonAuth.jsx";
import { Dropdown, Menu, Space, Pagination, ConfigProvider, Input } from 'antd';
import { setUser } from "../../store/slices/userSlices.js";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './Admin.scss'

import { MdArrowDropDown } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { FiSave } from "react-icons/fi";

export default function Admin({ setShowInfo }) {
    const { data, isLoading } = useGetData([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterValue, setFilterValue] = useState('all');
    const [adaptive, setAdaptive] = useState(true);
    const [userStatuses, setUserStatuses] = useState({});
    const [showSaveButton, setShowSaveButton] = useState({});
    const [notes, setNotes] = useState({});
    const [showNoteInput, setShowNoteInput] = useState({});

    const statuses = [
        "new",
        "active",
        "critical",
        "stop",
        "passed"
    ];

    const dispatch = useDispatch();
    const editData = useEditData();
    useEffect(() => {
        compareDate();
    }, [filteredUsers]);
    const compareDate = () => {
        const currentDate = new Date();
        filteredUsers.forEach(user => {
            if(user.statusUser === "passed" || user.statusUser === "stop"){
                return;
            }
            const formattedDate = new Date(user.date);
            const difference = currentDate - formattedDate;
            const oneWeek = 7 * 24 * 60 * 60 * 1000;
            if (difference > oneWeek) {
                switchUserStatus('critical', user.id);
            }
        });
    };

    function switchUserStatus(status, id, note = "") {
        const updateUser = users.find(user => user.id === id);
        if (updateUser) {
            const { displayName, email, key, password, phone, progress = [], date } = updateUser;
            const newStatus = {
                displayName,
                email,
                id,
                key,
                password,
                phone,
                progress,
                date,
                statusUser: status,
                note: note
            }
            editData.mutate({ id: key, updateData: newStatus });
            dispatch(setUser(newStatus));
        }
    }



    useEffect(() => {
        if (window.innerWidth < 768) setAdaptive(false);
    }, []);
    useEffect(() => {
        if (data) setUsers(Object.values(data));
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
            setFilteredUsers(filteredUsers);
        }
    }, [users, filterValue]);
    function getColorForStatus(status) {
        switch (status) {
            case "active":
                return 'active';
            case "new":
                return 'new';
            case "critical":
                return 'critical';
            case "passed":
                return 'passed';
            case "stop":
                return 'stop';
            default:
                return 'default';
        }
    }
    function formatDate(date) {
        const formattedDate = new Date(date);
        return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()} в ${formattedDate.getHours()}:${(formattedDate.getMinutes() < 10 ? (`0${formattedDate.getMinutes()}`) : (formattedDate.getMinutes()))}`;
    }
    const displayItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        if (adaptive) {
            return filteredUsers.slice(startIndex, endIndex).map((item, index) => (
                <tr className="adminTable__body-row" key={index}>
                    <td>{startIndex + index + 1}</td>
                    <td>{item.displayName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                        <div className="adminTable__body-row-filterBox">
                            <select
                                onChange={(e) => {
                                    setUserStatuses(prevState => ({
                                        ...prevState,
                                        [item.id]: e.target.value
                                    }));
                                    setShowSaveButton(prevState => ({
                                        ...prevState,
                                        [item.id]: true
                                    }));
                                }}
                                className={`adminTable__body-statusFilter adminTable__body-statusFilter--${getColorForStatus(item.statusUser)} filter`}
                            >
                                <option value={item.statusUser} defaultValue>{item.statusUser}</option>
                                {statuses.filter((status) => status !== item.statusUser).map((status) => (
                                    <option value={status} key={status}>{status}</option>
                                ))}
                            </select>
                            {showSaveButton[item.id] && userStatuses[item.id] !== item.statusUser && <button onClick={() => {
                                switchUserStatus(userStatuses[item.id], item.id, notes[item.id] || item.note);
                                setShowSaveButton(prevState => ({
                                    ...prevState,
                                    [item.id]: false
                                }));
                            }}>Сохранить</button>}
                        </div>
                    </td>
                    <td>{formatDate(item.date)}</td>
                    <td className={showNoteInput[item.id] ? "adminTable__body-row-noteBlock" : ""}>
                        {!showNoteInput[item.id] && (

                            <button onClick={() => setShowNoteInput(prevState => ({
                                ...prevState,
                                [item.id]: !prevState[item.id]
                            }))}
                                className="adminTable__body-row-noteBtn">
                                <LuPencil />
                            </button>
                        )}
                        {showNoteInput[item.id] && (
                            <div className="adminTable__body-row-noteBox">
                                <input
                                    type="text"
                                    placeholder={item.note || "Заметка"}
                                    value={notes[item.id] || ""}
                                    onChange={(e) => setNotes(prevState => ({
                                        ...prevState,
                                        [item.id]: e.target.value
                                    }))}
                                />
                                <button onClick={() => {
                                    switchUserStatus(item.statusUser, item.id, notes[item.id] || item.note);
                                    setShowNoteInput(prevState => ({
                                        ...prevState,
                                        [item.id]: false
                                    }));
                                    setNotes(prevState => ({
                                        ...prevState,
                                        [item.id]: ''
                                    }));
                                }}
                                    className="saveNoteBtn"><FiSave /></button>
                            </div>
                        )}
                    </td>
                </tr >
            ));
        } else {
            return filteredUsers.slice(startIndex, endIndex).map((item, index) => (
                <Dropdown className="dropdown" key={index}
                    overlay={
                        <Menu className="dropdown__menu">
                            <Menu.Item className="dropdown__menu-item" key={index}>
                                <h3>Имя пользователя: {item.displayName}</h3>
                                <h3>Ел. почта: {item.email}</h3>
                                <h3>Телефон: {item.phone}</h3>
                                <h3>Статус: <span className={`dropdown__menu-item--${getColorForStatus(item.statusUser)}`}>{item.statusUser}</span></h3>
                                <h3>Посл. активность: {formatDate(item.date)}</h3>
                            </Menu.Item>
                        </Menu>
                    }
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space className="dropdown__space">
                            <h2 className="dropdown__space-index">
                                {startIndex + index + 1}.
                            </h2>
                            <h2>
                                {item.displayName}
                            </h2>
                            <MdArrowDropDown />
                        </Space>
                    </a>
                </Dropdown>
            ));
        }
    };


    return (
        <div className="adminPage">
            {adaptive ? (
                <>
                    {isLoading ? (
                        <Spinner color={"rgb(234 93 128)"} />
                    ) : (
                        <>
                            <div className="adminPage__header">
                                <h1>Администратор</h1>
                                <ExitButtonAuth className="exitBtn" />
                            </div>
                            <div className="adminPage__tableContainer">
                                <div className="adminPage__tableContainer-actions">
                                    <select className="filter" onChange={(e) => { setFilterValue(e.target.value) }}>
                                        <option value="all" defaultValue>Все</option>
                                        <option value="active">Active</option>
                                        <option value="new">New</option>
                                        <option value="critical">Critical</option>
                                    </select>
                                    <Pagination
                                        className="pagination"
                                        size="small"
                                        total={filteredUsers.length}
                                        current={currentPage}
                                        pageSize={itemsPerPage}
                                        onChange={(page, pageSize) => setCurrentPage(page)}
                                        onShowSizeChange={(current, size) => setItemsPerPage(size)}
                                    />
                                </div>
                                <table className="adminPage__tableContainer-adminTable adminTable">
                                    <tbody className="adminTable__body">
                                        <tr className="adminTable__header">
                                            <th>#</th>
                                            <th>Имя пользователя</th>
                                            <th>Email</th>
                                            <th>Телефон</th>
                                            <th>Статус</th>
                                            <th>Последняя активность</th>
                                            <th>Заметки</th>
                                        </tr>
                                        {displayItems()}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    {
                        isLoading ? (
                            <Spinner color={"rgb(234 93 128)"} />
                        ) : (
                            <>
                                <div className="adminPage__header">
                                    <h1>Администратор</h1>
                                    <ExitButtonAuth adaptive={adaptive} className="exitBtn" />
                                </div>
                                <div className="filter">
                                    <select className="filter" onChange={(e) => { setFilterValue(e.target.value) }}>
                                        <option value="all" defaultValue>Все</option>
                                        <option value="active">Active</option>
                                        <option value="new">New</option>
                                        <option value="critical">Critical</option>
                                    </select>
                                </div>
                                <div className="adminPage__users">
                                    {displayItems()}
                                </div>
                                <Pagination
                                    className="pagination"
                                    size="small"
                                    total={filteredUsers.length}
                                    current={currentPage}
                                    pageSize={itemsPerPage}
                                    onChange={(page, pageSize) => setCurrentPage(page)}
                                    onShowSizeChange={(current, size) => setItemsPerPage(size)}
                                />
                            </>
                        )}
                </>
            )}
        </div>
    );
}
