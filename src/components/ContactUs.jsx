import React from "react";

const ContactUs = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      {/* Contact Us page for the novels site */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Contact Us About Novels
            </h1>
            <p className="mt-1 text-gray-600">
              Whether you are an author, reader, or have suggestions about novels, we're here to listen.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Contact form */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="mb-8 text-xl font-semibold text-gray-800">
                Send us your inquiry or suggestion
              </h2>

              <form>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstname" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastname" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Phone Number (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Share your message, question, or suggestion about novels"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700"
                  >
                    Send
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you within 1-2 business days.
                  </p>
                </div>
              </form>
            </div>

            {/* Additional contact info */}
            <div className="divide-y divide-gray-200">
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Knowledge Base</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Have questions about novels? Visit our knowledge base.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                    href="#"
                  >
                    Visit Knowledge Base
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">FAQ</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Check our FAQs about novels and the website.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                    href="#"
                  >
                    Visit FAQ
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 11 2-2-2-2" />
                  <path d="M11 13h4" />
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Developer APIs</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Want to integrate with novel data? Check our APIs.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                    href="#"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Contact Us By Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    If you prefer to write us an email directly, contact us at:
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                    href="mailto:contact@riwayat.com"
                  >
                    contact@riwayat.com
                  </a>
                </div>
              </div>
            </div>
            {/* End additional contact info */}
          </div>
        </div>
      </div>
      {/* End Contact Us page */}
    </main>
  );
};

export default ContactUs;
