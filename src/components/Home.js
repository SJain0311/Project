import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    const loadData = async () => {
        const response = await fetch('https://api.quotable.io/quotes')
        const json = await response.json()
        console.log(json.results)
        setUsers(json.results)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <h1>List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">ID</th>
                        <th scope="col">AUTHOR</th>
                        <th scope="col">CONTENT</th>
                        <th scope="col">AUTHOR SLUG</th>
                        <th scope="col">LENGTH</th>
                        <th scope="col">DATE ADDED</th>
                        <th scope="col">DATE MODIFIED</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(item => (
                            <tr>
                                <td>
                                    <Link
                                        to={`/show/${item._id}`}
                                        onClick={() => {
                                            navigate(`/show/${item._id}/`, {
                                                state: { itemId: item._id }
                                            })
                                        }}
                                        className='text-decoration text-violet font-weight-bold'
                                    >
                                        {item._id}
                                    </Link></td>
                                <td>{item.author}</td>
                                <td>{item.content} </td>
                                <td>{item.authorSlug}</td>
                                <td>{item.length}</td>
                                <td>{item.dateAdded}</td>
                                <td>{item.dateModified}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default Home;