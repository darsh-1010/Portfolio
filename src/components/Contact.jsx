import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    // Debug: Log environment variables
    console.log('Environment Variables Check:', {
      serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Darsh Shah",
          from_email: form.email,
          to_email: "darsh.cs@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setSent(false);
          console.error(error);
        }
      );
  };

  const handleRefresh = () => {
    setSent(false);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        
        <div className="mt-4 text-white">
          <p className="text-secondary mb-2">📧 darsh.cs@gmail.com</p>
          <p className="text-secondary mb-2">📱 +91 9913361337</p>
          <p className="text-secondary mb-4">📍 Ahmedabad, Gujarat, India</p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex gap-4 items-center">
            <button
              type='submit'
              disabled={loading || sent}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? "Sending..." : sent ? "Sent!" : "Send"}
            </button>
            
            {sent && (
              <button
                type='button'
                onClick={handleRefresh}
                className='bg-[#915EFF] py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#7c4dff] transition-colors'
              >
                Send Another
              </button>
            )}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
