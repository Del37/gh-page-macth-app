import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import './Home.css';

const items = [
  {
    src: 'https://picsum.photos/1200/400/?image=111',
    altText: 'Slide 1',
    caption: 'Find a team to work on your project'
  },
  {
    src: 'https://picsum.photos/1200/400/?image=222',
    altText: 'Slide 2',
    caption: 'Join a project and gain experience'
  },
  {
    src: 'https://picsum.photos/1200/400/?image=333',
    altText: 'Slide 3',
    caption: 'Discover new and interesting projects'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-100" />
        <div className="carousel-caption d-none d-md-block">
          <h3>{item.caption}</h3>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Container className="mt-5">
        <Row>
          <Col md="4" className="mb-4">
            <Card>
              <CardImg top width="100%" src="https://picsum.photos/300/200/?image=102" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Find a Project</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Search for projects and teams that interest you</CardSubtitle>
                <Button color="primary">Find Now</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card>
              <CardImg top width="100%" src="https://picsum.photos/300/200/?image=101" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Join a Project</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Find a project and become part of a team</CardSubtitle>
                <Button color="primary">Join Now</Button>
                </CardBody>
                </Card>
                </Col>
                <Col md="4" className="mb-4">
            <Card>
              <CardImg top width="100%" src="https://picsum.photos/300/200/?image=107" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Join a Team</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Find a project and become part of a team</CardSubtitle>
                <Button color="primary">Join Now</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
  );
};
export default Home;