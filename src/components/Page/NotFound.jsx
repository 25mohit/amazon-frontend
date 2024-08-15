import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegQuestionCircle, FaCaretRight } from "react-icons/fa";

const NotFound = () => {
  return (
    <center className='not-found'>
        <Link to="/">
            <img src="./Assets/Images/logo2.svg" alt="" />
        </Link>
        <table>
            <tbody>
                <tr className='fx aic'>
                    <td>
                        <FaRegQuestionCircle id="info-icon"/>
                    </td>
                    <td className='fdc'>
                        <h3 style={{color: 'var(--primary-color)'}}>Looking for something?</h3>
                        <p>We're sorry. The Web address you entered is not a functioning page on our site.</p>
                        <div className='fx aic' >
                            <FaCaretRight style={{color: 'var(--primary-color)'}}/>
                            <b>
                                Go to Amazon.in's <Link to="/">Home</Link> Page
                            </b>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
  )
}

export default NotFound