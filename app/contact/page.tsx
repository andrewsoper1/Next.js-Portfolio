'use client'
import { useState } from 'react';
import { validateEmail } from '../../utils/helper';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
       

        if (name === 'name') {
            setName(value);
            setErrors((prevErrors) => prevErrors.filter((error) => error !== "Name is required."));
        } else if (name === 'email') {
            setEmail(value);
            setErrors((prevErrors) => prevErrors.filter((error) => error !== "Email is required."));
        }  else if (name === 'message') {
            setMessage(value);
            setErrors((prevErrors) => prevErrors.filter((error) => error !== "Message is required."));



        }
    };

    const handleFormSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = [];

        
        if (!name) newErrors.push("Name is required.");
        if (!email) newErrors.push("Email is required.");
        if (!message) newErrors.push("Message is required.");
        if (!validateEmail(email)) newErrors.push("Invalid email address.");

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }
        
        
            


        alert("Thanks for reaching out!")

        setName('');
        setEmail('');
        setMessage('');
        setErrors([]);
        
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const newErrors = [...errors]

        if (value.trim() === "" ) {
            if (name === 'name' && !newErrors.includes("Name is required.")) {
                newErrors.push("Name is required.");
            } else if  (name === 'email' && !newErrors.includes("Email is required.")) {
                newErrors.push("Email is required.");
            } else if  (name === 'message' && !newErrors.includes("Message is required.")) {
                newErrors.push("Message is required.")
            }
        }
        if (name === 'email' && value.trim() !== "" && !validateEmail(value)) {
            if (!newErrors.includes("Invalid email address.")) {
                newErrors.push("Invalid email address.");
            }
        }

        setErrors(newErrors);
    };
    



    return (
        <div className ="text-center">
            <h3 className="contactme">Contact Me</h3>
            <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Email"
        />
        
        <input
          value = {message}
          name= "message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type = "text"
          placeholder = "Message"
          />
          
        <button type="submit">
          Submit
        </button>
        
        
        {errors.length > 0 && (
                    <div className="error-messages">
                        {errors.map((error, index) => (
                            <p key={index} className="error-text">{error}</p>
                        ))}
                    </div>
                )}
      </form>

    </div>
    )
}

export default Contact