import './Footer.css'

const Footer =() =>{
    return(
        <footer className="footer">
            <div className="footerCard">

                {/* <span style={{color:'orange'}}>Intr</span>est<br /> */}
                <div className="card1">
                    <h4>Technologies</h4>
                    <ol className="list">
                        <li>Java</li>
                        <li>GoLang</li>
                        <li>Rust</li>
                    </ol>
                </div>
                <div className="card2">
                    <h3>Touch with us</h3>
                    <ol>
                        <li>contact us</li>
                        <li>about us</li>
                        <li>comming ...</li>
                    </ol>
                </div>
                <div className="card3">
                    <h3>Social chennel</h3>
                    <ol>
                        <li>LinkedIn</li>
                        <li>GitHUb</li>
                        <li>Email</li>
                    </ol>
                </div>
            </div>
            <div className="copy"> &copy; {new Date().getFullYear()}, developed By Mohammad Hayat.</div>
        </footer>
    )
}

export default Footer;