import "./home.css";

import LogoImg from "../assets/logo.svg";

export default function Home() {
    return <div className="home">
        <header>
            <img src={LogoImg} />
        </header>
        <main>
            <p>
                TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!
            </p>
        </main>
    </div>
}