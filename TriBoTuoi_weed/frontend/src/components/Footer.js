import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapLocation,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
    <footer
        style={{
            borderTop: '1px solid #ddd',
            backgroundColor: 'white',
            color: 'black',
        }}
        className="page-footer font-small blue pt-4"
    >
        {/* # footer line  */}

        <div className="container-fluid text-center text-md-center">
            <div className="row">
                <div className="col-md-7 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Tap hoa CBT</h5>
                    <p>
                        Rau sach fr fr bussin no cap on god fr fr.{' '}
                    </p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-4 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Contact us</h5>
                    <ul className="list-unstyled">
                        {/* <li><a href="https://goo.gl/maps/ssmVxACT4TtQFxTp9" target="_blank" rel="noopener noreferrer">227 Nguyen Van Cu Ward 4 Dist 5 HCMC</a></li>
                         */}
                        <li>
                            <a
                                href="https://goo.gl/maps/ssmVxACT4TtQFxTp9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faMapLocation}
                                    size="1x"
                                />{' '}
                            </a>
                            227 Nguyen Van Cu Ward 4 Dist 5 HCMC
                        </li>
                        <li>
                            <a href="tel:0969696420">
                                <FontAwesomeIcon icon={faPhone} size="1x" />{' '}
                            </a>
                            0969 696 420
                            <li>
                                {/* <Facebookshare
                                    url={'https://www.youtube.com/watch?v=OXcWwUPRk38'}
                                    quotes={'Goofy ahh website'}
                                    hashtag={'#goofyahhproject'}> 
                                </Facebookshare>
                                {' '}
                                <Twittershare
                                    url={'https://www.youtube.com/watch?v=OXcWwUPRk38'}
                                    quotes={'Goofy ahh website'}
                                    hashtag={'#goofyahhproject'}>
                                </Twittershare>
                                {' '}
                                <Emailshare
                                    url={'https://www.youtube.com/watch?v=OXcWwUPRk38'} 
                                    subject={'Goofy ahh website'}
                                    body={'#goofyahhproject'}>
                                </Emailshare>     */}
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            © 420 Copyright Tap hoa CBT{' '}
        </div>
    </footer>
)

export default Footer