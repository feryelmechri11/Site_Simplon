import React from 'react';
function Footer() {
    return (
        <div class="container-fluid bigFooter">
          <footer class="container">
            <div class="row footerNewsletter">
    
              <div class="col-md-4">
                <div class="content">
                  <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                <div class="input-group">
                       <input type="email" class="form-control" placeholder="your@email.com">
                       <span class="input-group-btn">
                       <button class="btn footerNewsletterBtn" type="submit">Subscribe Now</button>
                       </span>
                </div>
                </div>
              </div>
    
              <div class="col-md-4">
                <div class="content">
                  <h5>Contact</h5>
                <div class="">
                  <p><img src="images/phone.png" alt="" width="25px" height="25px"> +216 20000000</p>
                  <p><img src="images/mail.png" alt="" width="25px" height="25px"> contact@simplon.co</p> 
                  <p><img src="images/add.png" alt="" width="25px" height="25px"> 15 Avenue De Carthage, Tunis</p>      
                </div>
                </div>
              </div>
    
              <div class="col-md-4">
                <div class="content">
                  <h5>Simplon Tunis</h5>
                
                </div>
              </div>
              </div>
             
          </footer>
        </div>
       

        );
      }
      
      export default Footer;