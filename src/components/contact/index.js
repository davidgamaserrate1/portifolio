import React from "react";
import SectionDescription from "../sectionDescription";
import ContactItem from "./contact-item";
import './contact-styles.css'

const contactsMethods = [
    {  
      'name':'whatsapp',
      'image': 'https://img.icons8.com/ios/50/null/whatsapp--v1.png',
      'valueContact': '(67) 99167-3073',
      'link' :'https://api.whatsapp.com/send?phone=5567991673073&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio!'
    },
    {   
        'name':'Linkedin',
        'image': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
        'valueContact': 'david-gama-688639181/',
        'link' :'https://www.linkedin.com/in/david-gama-688639181/'
    },
    {'name':'Instagram',
    'image': '/static/media/instagram.ba44525f77b11eb0844b.png',
    'valueContact': '_david.gama',
    'link' :'https://instagram.com/_david.gama?igshid=ZDdkNTZiNTM='
    },
    {'name':'email',
      'image': 'https://cdn-icons-png.flaticon.com/512/646/646094.png',
      'valueContact': 'david.gama@ufms.br',
      'link' :'mailto:david.gama@ufms.br?Subject=Portifolio&Body=Ol%E1%2C%20vim%20atrav%E9s%20do%20seu%20portif%F3lio%21'
    },

]
 
const Contact = () =>{
    return(
        <section id="contact-section">        
            <SectionDescription section={"Contato:"}/>              
            <div className="contact">
                {contactsMethods.map((contact)=>(
                    <ContactItem className="items"
                        name={contact.name}
                        image ={contact.image}
                        valueContact={contact.valueContact}
                        link={contact.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default Contact 

 