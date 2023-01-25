import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    <div id="top_bg">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="header">
                    <div className="header_left">
                        <h6>Donate</h6>
                        <h1>Making a donation for Nature.</h1>
                        <p className='same_text'>When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</p>
                        <Button btn_text="Donate now" />
                    </div>
                    <div className="header_right">
                        <img src="./images/Image.png" alt="heaer_img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Header