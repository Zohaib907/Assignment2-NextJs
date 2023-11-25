import Navbar from '../../components/nav_bar'
import Link from 'next/link'
export default function About() {
    return (
        <div>
            <section className="Sub-header">
            <Navbar/>
        <h1>About Us</h1>
    </section>


    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href="#" className="hero_btn btn">EXPLORE NOW</Link>
            </div>
            <div className="about-col">
                <img src="/assets/about.png" alt=""/>
            </div>
        </div>
    </section>

    <section className="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <Link href="#">Zohaib Developer</Link></p>
        <p>Copyright © 2023 <Link href="/">Xplore Skill</Link>. All Rights Reserved</p>
    </section>
        </div>
    )
  }