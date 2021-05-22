import React, { Component } from 'react';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.jpg';
import pic3 from '../../Images/pic3.png';
import img3 from '../../Images/img3.webp';
import img5 from '../../Images/img5.webp';
import img6 from '../../Images/img6.webp';
import img2 from '../../Images/img2.webp';
import img10 from '../../Images/img10.webp';
import img1 from '../../Images/img1.webp';
import men from '../../Images/men.jpg';
import '../../css/myStyle.css';
import { Card, CardGroup } from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return (
      <div>
        <br />
        <center>
          <h1 className='header2'>Shop now</h1>
        </center>

        <br />
        <br />

        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>

          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img width='100%' height='100%' src={pic2} alt='First slide' />
            </div>

            <div className='carousel-item'>
              <img width='100%' height='100%' src={pic1} alt='Second slide' />
            </div>

            <div className='carousel-item'>
              <img width='100%' height='100%' src={pic3} alt='Third slide' />
            </div>

            <a
              className='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>

        <br />
        <br />

        <center>
          <h1 className='header3'>New Arrivals</h1>
        </center>

        <br />
        <center>
          <CardGroup>
            <Card>
              <Card.Img variant='top' src={img3} />
              <Card.Body>
                <Card.Title>
                  <b>Light Wash Skinny Jean</b>
                </Card.Title>
                <Card.Text>
                  Mid Waist <br />
                  Skinny Fit <br />
                  Light Washed <br />
                  Material Composition : 83% Cotton, 15% Polyester <br />
                  Model Height 5' 8", wearing size UK 10 (Size Guide)
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src={img5} />
              <Card.Body>
                <Card.Title>
                  <b>Pleated Printed Dress</b>
                </Card.Title>
                <Card.Text>
                  Occasional Ware <br />
                  Material: Woven <br />
                  Material Composition : 100% Polyester <br />
                  Lining Material : 97% Polyester, 3% Elastane
                  <br />
                  Model Height 5' 8", wearing size UK 10 (Size Guide)
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src={img6} />
              <Card.Body>
                <Card.Title>
                  <b>Checked Long Sleeve Shirt - Men 2012</b>
                </Card.Title>
                <Card.Text>
                  Shirt <br />
                  Long Sleeve <br />
                  Normal Collar <br />
                  Material : Cotton <br />
                  Material Composition : 100% Cotton <br />
                  Model Height 5' 11", wearing size UK M
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card>
              <Card.Img variant='top' src={img10} />
              <Card.Body>
                <Card.Title>
                  <b> Chambray Shirt - Men 1002</b>
                </Card.Title>
                <Card.Text>
                  Long Sleeve <br />
                  Normal Collar
                  <br />
                  Material : Cotton
                  <br />
                  Material Composition : 100% Cotton
                  <br />
                  Model Height 6', wearing size UK M
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src={img2} />
              <Card.Body>
                <Card.Title>
                  <b>Flare Sleeve Dress - 368</b>
                </Card.Title>
                <Card.Text>
                  Evening Wear <br />
                  Material : Woven
                  <br />
                  Material Composition : 100% Polyester
                  <br />
                  Lining Material : 97% Polyester, 3% Elastane
                  <br />
                  Model Height 5' 8", wearing size UK 10 (Size Guide)
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src={img1} />
              <Card.Body>
                <Card.Title>
                  <b>Bermuda Shorts with Buckle - Linen 0226</b>
                </Card.Title>
                <Card.Text>
                  Short
                  <br />
                  Casual Wear
                  <br />
                  Material : Linen
                  <br />
                  Material Composition : 100% Linen
                  <br />
                  Model Height 5' 8", wearing size UK 10 (Size Guide)
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>

          <br />

          <div
            className='shadow p-5'
            style={{ width: '80rem', marginLeft: '10px', height: '500px' }}
          >
            <h3 className='h3 mb-3 font-weight-bold'>
              <center>Our Products</center>
            </h3>

            <img width='100%' height='100%' alt='' src={men} />
            <br />

            <button
              type='button'
              value='View Products'
              className='btn btn-dark'
              onClick={(event) => (window.location.href = '/product')}
              style={{ marginTop: '10px' }}
            >
              View Products
            </button>
          </div>
        </center>
      </div>
    );
  }
}
export default HomePage;
