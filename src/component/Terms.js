import React, { Component } from 'react';

class Terms extends Component { 

  render() {
    return (
    <section className="page-section mb-0" id="terms" style={{marginTop: "150px"}}>
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase">Terms and Conditions</h2>
            <div className="divider-custom-terms divider-light-terms">
                <div className="divider-custom-line-terms"></div>
                <div className="divider-custom-icon-terms"><i className="fa fa-folder-open" aria-hidden="true"></i></div>
                <div className="divider-custom-line-terms"></div>
            </div>
            <div className="row"> 
                <div className="col-lg-12">
                <div className="lead text-justify">
                <p>
                    These terms and conditions ("Terms") govern your use of the Know Your Neighborhood website 
                    ("Website") and any related services provided by Know Your Neighborhood ("Company"). By 
                    accessing or using the Website, you agree to be bound by these Terms. If you do not agree 
                    with any part of these Terms, you must not use the Website.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Use of the Website</h6>
                <p> 
                    1.1. You must be at least 13 years old to use the Website. <br/>
                    1.2. You agree to use the Website only for lawful purposes and in accordance with these Terms.<br/>
                    1.3. You are solely responsible for any content you post or submit on the Website.<br/>
                    1.4. You agree not to engage in any activity that may interfere with or disrupt the functioning of the Website.<br/>
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Intellectual Property</h6>
                <p> 
                    2.1. The Website and its contents, including but not limited to text, images, graphics, logos, and software, are 
                        the property of Know Your Neighborhood or its licensors and are protected by copyright and other intellectual property laws.<br/>
                    2.2. You may not reproduce, distribute, modify, or create derivative works of any content from the Website without 
                        the prior written consent of Know Your Neighborhood.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>User Accounts</h6>
                <p> 
                    3.1. In order to access certain features of the Website, you may be required to create a user account. <br/>
                    3.2. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.<br/>
                    3.3. You must provide accurate and up-to-date information when creating your account.<br/>
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Privacy</h6>
                <p> 
                    4.1. The collection and use of personal information on the Website are governed by our Privacy Policy. <br/>
                    4.2. By using the Website, you consent to the collection, use, and disclosure of your personal information in accordance with our Privacy Policy.<br/>
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Limitation of Liability</h6>
                <p> 
                    5.1. The Website and its content are provided on an "as-is" basis without any warranties, express or implied.
                    5.2. Know Your Neighborhood shall not be liable for any damages arising out of or in connection with your use of the Website.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Modifications</h6>
                <p> 
                    6.1. Know Your Neighborhood reserves the right to modify or discontinue the Website or any part thereof at any time without prior notice.
                    6.2. Know Your Neighborhood may also update these Terms from time to time. It is your responsibility to review the Terms periodically for any changes.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Governing Law</h6>
                <p> 
                    7.1. These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of laws principles.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Severability</h6>
                <p> 
                    8.1. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to 
                    the fullest extent permitted by law.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Entire Agreement</h6>
                <p> 
                    9.1. These Terms constitute the entire agreement between you and Know Your Neighborhood regarding your use of the Website and supersede any 
                    prior agreements or understandings.
                </p> <br></br>
                <p>By using the Know Your Neighborhood website, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Terms;