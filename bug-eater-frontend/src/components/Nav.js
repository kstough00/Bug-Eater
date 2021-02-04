import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home </Link>
                </li>
                <li>
                    <Link to='/bugs'>Bugs</Link>
                </li>
                <li>
                    <Link to='/bugs/new'>Create New Bug</Link>
                </li>
            </ul>
            
        </div>
    )
}
