import './AboutUs.css';
import authorPhoto from './IMG_7001.JPG';

/**
 * A React component that represents the About Us page.
 * @returns The contents of this component, in JSX form.
 */

const AboutUs = () => {
    return (
       // return 3 paragraphsof text, including an About Us header and an image
        <>
            <h1>About Us</h1>
            <img className="authorPhoto" src={authorPhoto} />
            <p className="aboutText">
                Hi! My name is Rohan and I'm a senior at NYU majoring in Computer Science and minoring in Math at CAS. I'm originally from Long Island,
                but currently live in Lafayette Hall on campus. When the weather is nice, I like playing either basketball or football,
                and I also enjoy playing a variety of video games. Growing up, I've always been interested in reading Fantasy books, so some of my favorite series have included: Harry Potter,
                Percy Jackson (and most of the Rick Riordan series), and Lorien Legacies. I'm looking forward to taking this course and working on
                a pretty fun project!
            </p>
        </>
    )
}

export default AboutUs;