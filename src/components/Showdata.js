import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

const Showdata = () => {
    const location = useLocation()
    const [data, setData] = useState([])

    console.log('location ', location.pathname.split('/')[2])
    const loadData = async () => {
        const response = await fetch(
            `http://api.quotable.io/quotes/${location.pathname.split('/')[2]}`
        )
        const json = await response.json()
        console.log(json)
        setData(json)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5 pb-3'>Details of data</h1>
            <div className='container'>
                <h2 className='text-center pb-3'>{data._id}</h2>
                <div className='row'>
                    <div className='col-lg-3 col-sm-12'></div>
                    <div className='col-lg-6 col-sm-12 border border-radius p-4'>
                        <h5>Author:  {data.author}</h5>
                        <h5>Content:  {data.content}</h5>
                        <h5>AuthorSlug:  {data.length}</h5>
                        <h5>Length:  {data.authorSlug}</h5>
                        <h5>DateAdded:  {data.dateAdded}</h5>
                        <h5>DateModified:  {data.dateModified}</h5>
                    </div>
                    <div className='col-lg-3 col-sm-12'></div>
                </div>
            </div>
        </div>
    )

}
export default Showdata;