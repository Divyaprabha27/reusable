import './Footer.css';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import insta from '../../assets/instagram.png';
const Footer = () => {
    return (
        <div className="container footer-wrapper">
            <footer className="nav">
                <ul className="nav col-md-4 ">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <ul className="col-md-4 mb-0 text-muted">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><img src={fb}/></a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><img src={twitter}/></a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><img src={insta}/></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;