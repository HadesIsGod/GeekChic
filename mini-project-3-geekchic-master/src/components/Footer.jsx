import './styles/Footer.css'
import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="part1">
        <ul className='section1'>
          <li>
            <img src="/images/logo.png" alt="Logo" /> {/* Updated src */}
          </li>
          <li>
            <p>Stay up to date on features and releases.</p>
          </li>
          <li>
            <input type="text" placeholder='Enter your email' />
            <button>Subscribe</button>
          </li>
          <li id='tc'>
            By subscribing you agree to our Privacy Policy and provide consent to receive updates <br /> from our company.
          </li>
        </ul>
        <table>
          <thead> {/* Added <thead> for semantic structure */}
            <tr>
              <th>About</th>
              <th>Size Guide</th>
              <th>Follow Us</th>
            </tr>
          </thead>
          <tbody> {/* Added <tbody> for semantic structure */}
            <tr>
              <td>Contact</td>
              <td>Track Order</td>
              <td>Instagram</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Careers</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="part2">
        <p>© 2023 GeekChic. All rights reserved.</p>
        <ul>
          <li><u>Privacy Policy</u></li>
          <li><u>Terms of Service</u></li>
          <li><u>Cookies Settings</u></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
