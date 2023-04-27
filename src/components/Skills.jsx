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
                                    <h5>LOCATED AT THE PARK @8:15AM</h5>
                                    <h5>Monday Kickboxing & Bootcamp</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:15PM</h5>
                                    <h5>Monday Boxing/Weight</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:30AM</h5>
                                    <h5>Tuesday Step Class</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:15PM</h5>
                                    <h5>Tuesday Intermediate Salsa</h5>
                                    <EmojiPeopleIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE PARK @8:15AM</h5>
                                    <h5>Wednesday Cardio Dance Class</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:15PM</h5>
                                    <h5>Wednesday Cardio Dance/Bootcamp Class</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE PARK @8:15AM</h5>
                                    <h5>Thursday Cardio Boxing/Weights Class</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE PARK @9:30AM</h5>
                                    <h5>Thursday Cardio Class</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:15PM</h5>
                                    <h5>Thursday Beginnner Salsa</h5>
                                    <EmojiPeopleIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE PARK @8:15AM</h5>
                                    <h5>Friday Cardio Dance</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @7:15PM</h5>
                                    <h5>Friday Cardio Dance</h5>
                                    <FitnessCenterIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:15PM</h5>
                                    <h5>Friday Bachata</h5>
                                    <EmojiPeopleIcon />
                                </div>
                                <div className="item">
                                    <h5>LOCATED AT THE STUDIO @8:00AM</h5>
                                    <h5>SATURDAY Cardio Dance</h5>
                                    <FitnessCenterIcon />
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