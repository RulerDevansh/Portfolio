import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Earth } from "./canvas";
import { SectionWrapper } from "../HigherOrderComponent";
import { slideIn } from "../utils/motion";

function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // Check if form has content
    const isFormFilled = form.name.trim() !== "" || form.email.trim() !== "" || form.message.trim() !== "";

    useEffect(() => {
        const handleReload = () => {
            if (window.innerWidth < 768 && !isFormFilled) {
                window.location.reload();
            }
        };

        const interval = setInterval(handleReload, 120000); // Reload every 2 minutes

        return () => clearInterval(interval); // Cleanup on unmount
    }, [form]); // Runs effect when form updates

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (form.name.trim() !== "" && form.email.trim() !== "" && form.message.trim() !== ""){
          emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name: form.name,
              to_name: "Devansh Srivastava",
              from_email: form.email,
              to_email: "srivastavadevansh123@gmail.com",
              message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              alert("✅ Thank you! We'll get back to you soon. 😊");

              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
              alert("Please try again. Something went wrong!!");
            }
          );
        }
        else {
          setLoading(false);
          alert("⚠️ Please fill all the fields ❗");
        }
    };

    return (
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="sm:text-[14px] text-[14px] text-violet-200 uppercase tracking-wider">
            Email me !!
          </p>
          <h3 className="text-violet-300 font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px]">
            Contact.
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Write your name here!"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Write your email here!"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium">Message For Me</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here!"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto sm:h-[550px] h-[350px]"
        >
          <Earth />
        </motion.div>
      </div>
    );
}

export default SectionWrapper(Contact, "contact");
