import getConfig from "next/config";

import Layout from "@/components/Layout";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
    return (
        <Layout>
            <section className="bg-indigo-200 ">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full px-4 mb-20 lg:w-1/2 lg:mb-0">
                            <h1 className="max-w-lg mb-6 text-3xl font-extrabold xl:max-w-none sm:text-4xl xl:text-5xl font-heading">
                                Ms. Cece's
                                <br />
                                Math & Science Tutoring
                            </h1>
                            <h2 className="max-w-lg mb-6 text-3xl font-extrabold xl:max-w-none sm:text-4xl xl:text-3xl font-heading">
                                High-quality education you can trust and your
                                kids will enjoy
                            </h2>
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-indigo.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Certified teacher with decades of
                                        experience
                                    </span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-indigo.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Master's degree in mechanical
                                        engineering
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-indigo.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Praesent varius justo vel justo pulvinar
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <a
                                    className="inline-block w-full px-6 py-4 mb-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow md:w-auto md:mb-0 md:mr-4 hover:bg-indigo-900 border-3"
                                    href="#"
                                >
                                    Call to schedule
                                </a>
                                <a
                                    className="inline-block w-full px-6 py-4 text-lg font-extrabold leading-6 text-center text-indigo-900 transition duration-200 bg-white border-indigo-900 rounded shadow md:w-auto hover:text-white hover:bg-indigo-800 border-3"
                                    href="#subjects"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="w-full pr-0 lg:w-1/2 ">
                            <img
                                className="block object-contain w-full h-screen"
                                src="/images/space-kids.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* NEXT SECTION */}
            <section
                className="relative overflow-hidden bg-white py-28"
                id="subjects"
            >
                <img
                    className="absolute bottom-0 right-0 lg:top-0 lg:h-full"
                    src="/images/pattern-two-smashes-green-right.svg"
                    alt=""
                />
                <img
                    className="absolute top-0 left-0 w-1/2 lg:h-full"
                    src="/images/pattern-dots-green-left.svg"
                    alt=""
                />
                <div className="container relative px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full px-4 lg:w-1/2 mb-14 lg:mb-0">
                            <span className="text-lg font-extrabold text-green-500">
                                Subjects
                            </span>
                            <h2 className="mt-2 mb-10 text-3xl font-extrabold sm:text-4xl xl:text-5xl font-heading">
                                Math and Science
                                <br />
                                for 2nd - 8th graders
                            </h2>
                            <p className="text-xl font-extrabold leading-8">
                                Any STEM subject taught from 2nd to 8th grade,
                                including extra curricular activities.
                            </p>

                            <p className="text-xl font-extrabold leading-8">
                                Uncertain if your child's class subject is
                                covered? <br />
                                <a className="underline" href="#contact">
                                    Contact us
                                </a>
                                .
                            </p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4 mb-8 md:w-1/2">
                                    <div className="flex items-center justify-center p-6 bg-white border-indigo-900 shadow-md h-44 md:px-12 border-3 rounded-2xl">
                                        <img
                                            src="/images/logo-clouds/microsoft.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 mb-8 md:w-1/2">
                                    <div className="flex items-center justify-center p-6 bg-white border-indigo-900 shadow-md h-44 md:px-12 border-3 rounded-2xl">
                                        <img
                                            src="/images/logo-clouds/google.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="flex items-center justify-center p-6 bg-white border-indigo-900 shadow-md h-44 md:px-12 border-3 rounded-2xl">
                                        <img
                                            src="/images/logo-clouds/spotify.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="flex items-center justify-center p-6 bg-white border-indigo-900 shadow-md h-44 md:px-12 border-3 rounded-2xl">
                                        <img
                                            src="/images/logo-clouds/slack.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="relative overflow-hidden bg-purple-200 py-28">
                <div className="container relative px-4 mx-auto">
                    <span className="text-lg font-extrabold text-purple-500">
                        Reviews
                    </span>
                    <h2 className="mt-3 mb-3 text-3xl font-extrabold md:text-4xl font-heading">
                        Ms. Cece has touched a lot of lives!
                    </h2>
                    <p className="mb-16 text-xl font-extrabold leading-8">
                        Students and parents love her approach to education and
                        skill-building.
                    </p>
                    <div className="flex flex-wrap -mx-2 -mb-8">
                        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                            <div className="h-full max-w-md px-6 py-10 mx-auto bg-white border-indigo-900 shadow-md md:px-10 border-3 rounded-2xl">
                                <div className="flex flex-col h-full">
                                    <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                                        Testimonial 1
                                    </h3>
                                    <h4 className="mt-10 font-extrabold md:text-xl">
                                        Parent
                                    </h4>
                                    <span className="font-bold text-purple-400">
                                        Grade and subject at the time of service
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                            <div className="h-full max-w-md px-6 py-10 mx-auto bg-white border-indigo-900 shadow-md md:px-10 border-3 rounded-2xl">
                                <div className="flex flex-col h-full">
                                    <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                                        Testimonial 2
                                    </h3>
                                    <h4 className="mt-10 font-extrabold md:text-xl">
                                        Parent
                                    </h4>
                                    <span className="font-bold text-purple-400">
                                        Grade and subject at the time of service
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                            <div className="h-full max-w-md px-6 py-10 mx-auto bg-white border-indigo-900 shadow-md md:px-10 border-3 rounded-2xl">
                                <div className="flex flex-col h-full">
                                    <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                                        Testimonial 3
                                    </h3>
                                    <h4 className="mt-10 font-extrabold md:text-xl">
                                        Parent
                                    </h4>
                                    <span className="font-bold text-purple-400">
                                        Grade and subject at the time of service
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PRICING SECTION */}
            <section className="relative overflow-hidden bg-red-200 py-28">
                <img
                    className="absolute top-0 left-0 w-full md:h-full"
                    src="/images/pattern-center-dots-red.svg"
                    alt=""
                />
                <div className="container relative px-4 mx-auto">
                    <span className="text-lg font-extrabold text-red-500">
                        Pricing
                    </span>
                    <h1 className="mt-4 mb-6 text-3xl font-extrabold md:text-4xl font-heading">
                        Affordable tutoring sessions
                    </h1>
                    <p className="mb-16 text-xl font-extrabold leading-8">
                        The more you book, the more you save.
                    </p>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-12 xl:w-1/3 xl:mb-0">
                            <div className="max-w-md px-6 py-12 mx-auto bg-white border-indigo-900 shadow-md md:p-12 border-3 rounded-2xl">
                                <div className="mb-12 text-center">
                                    <span className="block text-lg font-extrabold leading-7 text-red-500">
                                        One Hour
                                    </span>
                                    <h2 className="mb-6 text-2xl font-extrabold">
                                        One Session
                                    </h2>
                                    <div className="flex items-start justify-center mb-2">
                                        <span className="pr-1 text-lg font-extrabold">
                                            $
                                        </span>
                                        <span className="text-3xl font-extrabold md:text-4xl">
                                            10
                                        </span>
                                    </div>
                                    <p className="text-lg font-extrabold leading-7">
                                        Pay when booking
                                    </p>
                                </div>
                                <div className="flex items-start mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Mauris pellentesque congue libero nec
                                    </span>
                                </div>
                                <div className="flex items-start mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Suspendisse mollis tincidunt
                                    </span>
                                </div>
                                <div className="flex items-start mb-8">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Mauris pellentesque congue libero nec
                                    </span>
                                </div>
                                <a
                                    className="inline-block w-full px-6 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3"
                                    href="#"
                                >
                                    Book Session
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-12 xl:w-1/3 xl:mb-0">
                            <div className="max-w-md px-6 py-12 mx-auto bg-white border-indigo-900 shadow-md md:p-12 border-3 rounded-2xl">
                                <div className="mb-12 text-center">
                                    <span className="block text-lg font-extrabold leading-7 text-red-500">
                                        One Hour
                                    </span>
                                    <h2 className="mb-6 text-2xl font-extrabold">
                                        Two Sessions
                                    </h2>
                                    <div className="flex items-start justify-center mb-2">
                                        <span className="pr-1 text-lg font-extrabold">
                                            $
                                        </span>
                                        <span className="text-3xl font-extrabold md:text-4xl">
                                            99
                                        </span>
                                    </div>
                                    <p className="text-lg font-extrabold leading-7">
                                        Pay when booking
                                    </p>
                                </div>
                                <div className="flex items-start mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Mauris pellentesque congue libero nec
                                    </span>
                                </div>
                                <div className="flex items-start mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Suspendisse mollis tincidunt
                                    </span>
                                </div>
                                <div className="flex items-start mb-8">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Mauris pellentesque congue libero nec
                                    </span>
                                </div>
                                <a
                                    className="inline-block w-full px-6 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3"
                                    href="#"
                                >
                                    Book Session
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-4 xl:w-1/3">
                            <div className="max-w-md px-6 py-12 mx-auto bg-white border-indigo-900 shadow-md md:p-12 border-3 rounded-2xl">
                                <div className="mb-12 text-center">
                                    <span className="block text-lg font-extrabold leading-7 text-red-500">
                                        One Hour
                                    </span>
                                    <h2 className="mb-6 text-2xl font-extrabold">
                                        Three Sessions
                                    </h2>
                                    <div className="flex items-start justify-center mb-2">
                                        <span className="pr-1 text-lg font-extrabold">
                                            $
                                        </span>
                                        <span className="text-3xl font-extrabold md:text-4xl">
                                            799
                                        </span>
                                    </div>
                                    <p className="text-lg font-extrabold leading-7">
                                        Pay when booking
                                    </p>
                                </div>
                                <div className="flex items-start mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Mauris pellentesque congue libero nec
                                    </span>
                                </div>
                                <div className="flex items-start mb-4">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Suspendisse mollis tincidunt
                                    </span>
                                </div>
                                <div className="flex items-start mb-8">
                                    <img
                                        className="block object-contain w-6 h-6 mr-2"
                                        src="/images/circle-icon-red.svg"
                                        alt=""
                                    />
                                    <span className="text-lg font-extrabold">
                                        Mauris pellentesque congue libero nec
                                    </span>
                                </div>
                                <a
                                    className="inline-block w-full px-6 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3"
                                    href="#"
                                >
                                    Book Session
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CONTACT SECTION */}
            <section className="bg-green-200 py-28" id="contact">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center mb-16 -mx-4">
                        <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
                            <div className="max-w-xl">
                                <span className="text-lg font-extrabold text-green-500">
                                    Contact
                                </span>
                                <h1 className="mt-3 mb-3 text-3xl font-extrabold md:text-4xl font-heading">
                                    Let’s stay connected
                                </h1>
                                <p className="text-xl font-extrabold leading-8">
                                    Whether you have questions about your
                                    child's specific needs or just want to say
                                    hi, we’re here to help.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-16 -mx-4">
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="px-6 py-12 text-center bg-white border-indigo-900 shadow-md md:px-12 border-3 rounded-2xl">
                                <form className="text-left" action="">
                                    <div className="mb-8">
                                        <label className="block mb-2 font-extrabold">
                                            Name
                                            <input
                                                className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 border-2 border-indigo-900 rounded shadow outline-none"
                                                type="email"
                                                placeholder="hello"
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-8">
                                        <label className="block mb-2 font-extrabold">
                                            Email
                                            <input
                                                className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 border-2 border-indigo-900 rounded shadow outline-none"
                                                type="email"
                                                placeholder="hello"
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-8">
                                        <label
                                            className="block mb-2 font-extrabold"
                                            htmlFor=""
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="w-full p-4 text-lg font-extrabold placeholder-indigo-900 border-2 border-indigo-900 rounded shadow resize-none"
                                            name=""
                                            id=""
                                            cols={30}
                                            rows={10}
                                            placeholder="Your message..."
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button className="inline-block w-full px-6 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3">
                                        Send your message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
