import React from 'react'

const Footer = () => {
  return (
    <footer>
        <h2>Contact Form</h2>
        <form action="/action_page.php" method="get">
            <input type="text" id="fname" name="fname" placeholder='Enter Your Name' />
            <br /><br />
            <input type="text" id="lname" name="lname"  placeholder='Enter a valid email address'  />
            <br /><br />
            <input type="text" id="text" name="lname"  placeholder='Enter a your message'  />
            <br /><br />
            <input type="submit" id='submit' value="Submit" />
        </form>
    </footer>
  )
}

export default Footer
