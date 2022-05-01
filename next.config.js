module.exports = {
    publicRuntimeConfig: {
        site: {
            name: "Ms. Cece's Math & Science Tutoring",
            url:
                process.env.NODE_ENV === "development"
                    ? "http://localhost:3000"
                    : "https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app",
            title: "Ms. Cece's Math & Science Tutoring",
            description: "Ms. Cece's Math & Science Tutoring",
            socialPreview: "/images/preview.png",
        },
    },
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
};
