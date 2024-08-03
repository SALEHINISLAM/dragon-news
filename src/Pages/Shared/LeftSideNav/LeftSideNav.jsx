import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';

const LeftSideNav = props => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2 className='font-bold text-xl p-3 pb-6'>
                All Categories
            </h2>
            <ul className='space-y-6'>
                {
                    categories.map(category=>
                        <li 
                        className='ml-4 active:text-red-700 text-xl font-semibold block px-4' 
                        key={category.id}>
                            <Link to={`/category/${category.id}`}>
                            {category.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

LeftSideNav.propTypes = {
    
};

export default LeftSideNav;