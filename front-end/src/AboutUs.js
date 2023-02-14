import './AboutUs.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import loadingIcon from './loading.gif'

/**
 * A React component that represents the About Us page.
 * @returns The contents of this component, in JSX form.
 */

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
            .then(response => {
                const aboutUsFromBackEnd = response.data.aboutUs
                setAboutUs(aboutUsFromBackEnd)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoaded(true)
            })
    }, [])

    return (
        <>
            <h1>{aboutUs.header}</h1>
            
            {error && <p className="AboutUs-error">{error}</p>}
            {!loaded && <img src={loadingIcon} alt="loading" />}
            
            <img className="authorPhoto" src={aboutUs.photo} />
            <p className="aboutText">
                {aboutUs.text}
            </p>
        </>
    )
}

export default AboutUs;