import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
       <section className="py-5">
       <div className="row">
           <div className="col-10 mx-auto col-md-6 my-3">
           <Title title='contact us'/>
               <form className="mt-5"  action="https://formspree.io/ahmed.muhammed.elsaid@gmail.com" method="POST">
               {/* first Input "Name"*/}
               <div className="form-group">
                   <input className="form-control"
                   name="firstName" type="text"
                   placeholder="John Doe"/>
               </div>
               {/*Second Input "Email"*/}
               <div className="form-group">
                   <input type="email" name="email"
                   placeholder="Enter Your Email.."
                   className="form-control"/>
               </div>
               {/** Third Input Subject */}
               <div className="form-group">
                   <input type="text" name="subject"
                   placeholder="Topic Subject..." className="form-control"/>
               </div>
               {/**Message area */}
               <div className="form-group">
                   <textarea name="message" rows="10"
                    placeholder="Drop your message here.."
                    className="form-control"
                    >

                   </textarea>
               </div>
               <div className="form-group mt-3">
                <input type="submit" value="Send"
                className="form-control"/>
               </div>
               </form>
           </div>
       </div>
       </section>
    )
}
