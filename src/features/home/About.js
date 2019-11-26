import React, { useState, useEffect } from 'react'
import "./Home.css"
import { Container, Grid, Image, Menu, Segment } from 'semantic-ui-react';
import MissionCard from '../about/MissionCard';
import VisionCard from '../about/VisionCard';
import CreatersCard from '../about/CreatersCard';





const About = () => {
    const [activeItem, setActiveItem] = useState('Mission')

    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }

    let bio;
    let pic;

    if (activeItem === 'Mission') {
        bio = <MissionCard />
        pic = <Image src={'/assets/images/logo.png'} size='large' centered fluid />
    } else if (activeItem === 'Vision') {
        bio = <VisionCard />
        pic = <Image src={'/assets/images/flagLogo.png'} size='large' centered fluid />
    } else if (activeItem === 'Creators') {
        bio = <CreatersCard />
        pic = <Image src={'/assets/images/Us.png'} size='large' centered fluid />
    }

    return (

        <div>
            <div
                className="bgimg-3"
                id="aboutMe"
                style={{
                    minHeight: '1000px',
                    maxHeght: '2500px'
                }}
            >
                <Container id='aboutCard'>
                    {/* <div className="w3-display-middle"> */}

                    <span className="w3-xxlarge w3-text-white w3-wide">ABOUT US</span>
                    {/* <div className="ui inverted divider"></div> */}
                    <Grid columns={2} stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Container>
                                    <div w3-display-middle id="mission-card" >
                                        <Menu fluid widths={3} attached='top' tabular >
                                            <Menu.Item
                                                className="primary"
                                                name='Mission'
                                                active={activeItem === 'Mission'}
                                                onClick={handleItemClick}
                                            />
                                            <Menu.Item
                                                className="info"
                                                name='Vision'
                                                active={activeItem === 'Vision'}
                                                onClick={handleItemClick}
                                            />
                                            <Menu.Item
                                                className="warning"
                                                name='Creators'
                                                active={activeItem === 'Creators'}
                                                onClick={handleItemClick}
                                            />
                                        </Menu>

                                        <Segment padded='very' className={activeItem} fluid attached='bottom'>
                                            {bio}
                                        </Segment>
                                    </div>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <div id="aboutPicture" className="w3-content w3-display-container-middle w3-padding-64">
                                    {pic}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    {/* </div> */}
                </Container>
            </div>
        </div>


    )
}

export default About
