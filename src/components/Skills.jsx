import { ClassNames } from "@emotion/react";
import Carousel from "react-multi-carousel";
import "./Skills.css"
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Skills = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Calendar
                            </h2>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique praesentium eius sit obcaecati quibusdam id eum enim sed dolorum cum commodi ratione tempora est numquam illum facilis, laboriosam asperiores.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <FitnessCenterIcon />
                                    <h5>Workout</h5>
                                </div>
                                <div className="item">
                                    <EmojiPeopleIcon />
                                    <h5>Intern Salsa</h5>
                                </div>
                                <div className="item">
                                    <FitnessCenterIcon />
                                    <h5>Workout</h5>
                                </div>
                                <div className="item">
                                    <EmojiPeopleIcon />
                                    <h5>Beginner Salsa </h5>
                                </div>
                                <div className="item">
                                    <EmojiPeopleIcon />
                                    <h5>Bachata</h5>
                                </div>
                                <div className="item">
                                    <FitnessCenterIcon />
                                    <h5>Workout</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}



export default Skills