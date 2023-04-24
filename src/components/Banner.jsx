import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import studiobanner from "../assets/studiobanner.png"
import "./banner.css"


const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Salsa!", "Bachata!", "Circuit Training", "Kickboxing!", "Zumba!"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 900;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Jose's Dance Studio</span>
                        <h1>{`Hi, my name is Jose and here we teach you `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae enim ducimus laborum sit quasi iusto aperiam debitis facilis, ratione culpa? Libero ad tenetur ut neque iure mollitia expedita! Ipsam.</p>
                        <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={studiobanner} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner