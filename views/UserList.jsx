import { useEffect, useState } from "react";
import { getUsers } from "../utils/httpClient";
import UserTable from "../componets/UsersTable/UserTable"

const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsersList = async () => {
        const response = await getUsers("users")
        const data = await response;
        setUsers(data);
    };

    useEffect(() => {
        getUsersList();
    },[]);

    return (
        <UserTable users={users} />
    );
};

export default UserList;