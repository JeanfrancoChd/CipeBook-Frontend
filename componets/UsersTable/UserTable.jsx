import styles from "./UserTable.module.css"
import DeleteButton from "../../utils/httpClient"


export function UserTable({ users }) {

    return (
        <center>
            <br />
            <h2>Lista de Usuarios</h2>
            <br />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>E-mail</th>
                        <th>Permisos</th>
                        <th>Gestión</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.roles}
                            </td>
                            <td>
                                <DeleteButton route={"users/" + user.id} />
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </center>
    )
}

export default UserTable;