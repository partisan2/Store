import React from 'react'
import NavBar from './components/NavBar'
import { Button, Card, Container ,Image} from 'react-bootstrap'
import { cardData } from '../data/sample'
import Slider from './components/Slider'


function Home() {
  return (
    <div style={{width:'100w'}}>
      <NavBar className='position-fixed top-0'/>
      <Container style={{width:'100vw'}}>
        <Slider/>
      </Container>
      <Container className='d-flex align-items-center justify-content-space-around flex-wrap mt-3'>
        {cardData?.map((item) =>{
            return <Card className='m-3 shadow-lg' style={{maxWidth:'18rem'}}>
                        <Card.Header className='d-flex align-items-center justify-content-center'>
                            <Image src={item.imgPath} style={{maxWidth:'18rem'}} />
                        </Card.Header>
                        <Card.Body>
                            <p style={{fontSize:'14px'}}>{item.category}</p>
                            <h6>{item.header}</h6>
                            <p>{item.description}</p>
                            <Button variant="outline-info">Read More</Button>{' '}
                        </Card.Body>
                    </Card>
        })}
        
      </Container>
    </div>
  )
}

export default Home
