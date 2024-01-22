import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='Contact'>
            <h2 className='Contact-header' style={{marginLeft: '20px'}}>Información de Contacto</h2>
            
            <div className='Contact-link' >  
                <a
                className="Contact-link-gmail"
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRCcVWLccRrGSFWZWdVdKzZHGkLsZnsZpwstllJlDSDlDxGLPKsndBzBzFfXHkstxnChR"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <div style={{  margin: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                    <img 
                    src={process.env.PUBLIC_URL + '/fcfm.png'}
                    alt='si'
                    style={{ height: '80px'}}
                    />
                    <div className="App-link-ug" style={{ marginLeft: '10px' }} >
                    alejandra.campos.u@ug.uchile.cl
                    </div>
                    </div>
                </a>

                <a
                className="Contact-link-gmail"
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRCcVWLccRrGSFWZWdVdKzZHGkLsZnsZpwstllJlDSDlDxGLPKsndBzBzFfXHkstxnChR"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                    <img 
                    src={process.env.PUBLIC_URL + '/gmail.png'}
                    alt='si'
                    style={{margin: '3%', height: '50px'}}
                    />
                    <div className="App-link-gmail" style={{ marginLeft: '20px' }} >
                    ale.campos9292@gmail.com
                    </div>
                    </div>
                </a>

                
                <div className='Contact-link-whatsapp'
                style={{  margin: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                <img 
                src={process.env.PUBLIC_URL + '/Whatsapp.png'}
                alt='si'
                style={{ height: '50px'}}
                />
                <div style={{ marginLeft: '10px' }} />
                {"+56 934625804"}
                </div>
            </div>
            <h3 className='Contact-subheader' style={{marginRight: '40px'}}>Trabajemos juntos!</h3>
        </section>
    );
};

export default Contact;
