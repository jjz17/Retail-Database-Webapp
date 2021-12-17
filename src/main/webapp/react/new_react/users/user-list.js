import userService from "./user-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const UserList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    return(
        <div>
            <h2>User List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/users/find/new")}>
                Add User
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                        <li className="list-group-item"
                            key={user.id}>
                            <text>
                                {"ID: "}
                            </text>
                            <Link to={`/users/find/${user.id}`}>
                                {user.id}
                            </Link>
                            <text>
                                {" Name: "}{user.firstName}{" "}{user.lastName}{", Username: "}
                                {user.username}
                            </text>

                        </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;