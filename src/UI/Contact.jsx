import React, { useEffect, useRef, useState } from "react";
import { useView } from "../Contexts/ViewContext";
import "../App.css";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedTitle from "../Animate/AnimatedTitle";

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState(0);
  const [formDisplay, setFormDisplay] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  const { formState, register, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const formRef = useRef(null);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const pubilcKey = import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY;

  function onSubmit(data) {
    emailjs.sendForm(serviceID, templateID, formRef.current, pubilcKey).then(
      () => {
        toast.success("Message sent successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        reset();
        setTimeout(() => setFormDisplay(!formDisplay), 4000);
      },
      (error) => {
        toast.error("Message not sent, Check your network.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        reset();
        setTimeout(() => setFormDisplay(!formDisplay), 4000);
      }
    );

    // toast.error("Message not sent,Something Went Wrong!.Check Your Network.", {
    //   position: "bottom-left",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   theme: "dark",
    // });
  }

  return (
    <>
      <section
        ref={ref}
        id="contact"
        style={{
          transform: formDisplay
            ? "perspective(300px) rotateY(-180deg)"
            : "perspective(300px) rotateY(-360deg)",
        }}
        className="overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]"
      >
        {!formDisplay ? (
          <div className="flex justify-between items-center w-full duration-1000">
            <div className="inline w-full">
              <AnimatedTitle
                wordSpace="mr-2 md:mr-[12px]"
                charSpace="mr-[0.001em]"
                className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold"
              >
                GOT A PROJECT IN MIND?
              </AnimatedTitle>
              <a href="#contact">
                <span
                  onClick={() => setFormDisplay(!formDisplay)}
                  className="contactBtn sm:mt-0 text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
                >
                  CONTACT ME
                </span>
              </a>
            </div>
            <a href="#contact">
              <button
                className="contactBtn text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none"
                onClick={() => setFormDisplay(!formDisplay)}
              >
                CONTACT&nbsp;ME
              </button>
            </a>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              exit={{ opacity: 0 }}
              style={{
                transform: `${
                  formDisplay
                    ? "perspective(300px) rotateY(-180deg)"
                    : "perspective(300px) rotateY(0deg)"
                }`,
              }}
              className="w-full"
            >
              <div className="ml-auto float-right md:absolute right-0 -top-5 text-2xl opacity-50">
                <Icon
                  icon="gg:close"
                  data-blobity
                  onClick={() => {
                    setFormDisplay(false);
                    reset();
                  }}
                />
              </div>
              <div className="flex items-center h-full gap-2 w-full">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                  className={`back w-full flex flex-col gap-3 grow-[2] basis-0`}
                >
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userName"
                      className="opacity-70 text-sm lg:text-base "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      {...register("userName", {
                        required: "I need to know your name",
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z0-9]{2,}/,
                          message: "Please enter a valid name.",
                        },
                      })}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                    />
                    {errors?.userName && (
                      <span className="text-red-400 text-sm">
                        {errors?.userName?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userEmail"
                      className="opacity-70 text-sm lg:text-base "
                    >
                      Email
                    </label>
                    <input
                      id="userEmail"
                      type="email"
                      {...register("userEmail", {
                        required: "Enter email address",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please provide a valid email address",
                        },
                      })}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                    />
                    {errors?.userEmail && (
                      <span className="text-red-400 text-sm">
                        {errors?.userEmail?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userMessage"
                      className="opacity-70 text-sm lg:text-base"
                    >
                      Message
                    </label>
                    <textarea
                      id="userMessage"
                      {...register("userMessage", {
                        required: "Let us know what’s on your mind.",
                      })}
                      rows={4}
                      cols={50}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                    />
                    {errors?.userMessage && (
                      <span className="text-red-400 text-sm">
                        {errors?.userMessage?.message}
                      </span>
                    )}
                  </div>
                  <button
                    className={`rounded-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5  font-bold uppercase mt-4`}
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </section>
      <ToastContainer />
    </>
  );
}
