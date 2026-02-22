import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Earth } from "./canvas";
import { SectionWrapper } from "../HigherOrderComponent";
import { slideIn } from "../utils/motion";

const RECIPIENT_EMAIL = "srivastavadevansh.123@gmail.com";

function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // Check if form has content
    const isFormFilled = form.name.trim() !== "" || form.message.trim() !== "";

    useEffect(() => {
        const handleReload = () => {
            if (window.innerWidth < 768 && !isFormFilled) {
                window.location.reload();
            }
        };

        const interval = setInterval(handleReload, 120000); // Reload every 2 minutes

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isFormFilled]); // Runs effect when form fill status changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.name.trim() !== "" && form.message.trim() !== "") {
          setLoading(true);

          const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
          const body = encodeURIComponent(form.message);
          const gmailURL = `https://mail.google.com/mail/?view=cm&to=${RECIPIENT_EMAIL}&su=${subject}&body=${body}`;

          window.open(gmailURL, "_blank");

          setLoading(false);
          setForm({ name: "", message: "" });
          alert("✅ Gmail opened! Please send the pre-filled email to reach me. 😊");
        } else {
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
