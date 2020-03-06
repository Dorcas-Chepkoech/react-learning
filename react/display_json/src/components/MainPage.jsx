import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import NavbarList from './Navbar'

export default function MainPage () {
  return (
    <>
      <NavbarList/>
      <br />
      <br />
      <div className='App'>
        <div className='decks'>
          <CardDeck>
            <Card>
              <Card.Img variant='top' src='https://i.pinimg.com/564x/e3/4c/cc/e34ccc00555c0207bb8d7b1fe46474c2.jpg' style={{height:350}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  lon
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src='https://i.pinimg.com/564x/e3/65/ec/e365ec526c73a75a640519485343b73b.jpg'style={{height:350}} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src='https://i.pinimg.com/564x/05/20/48/0520483b9b7f16441c13b9d80fbf77f6.jpg' style={{height:350}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    </>
  )
}
