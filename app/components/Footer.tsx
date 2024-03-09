'use client';

import { Typography } from "@material-tailwind/react";

const LINKS = [
    {
        title: "Services",
        items: [{text: "Available Cats", url: "available-cats"},
            {text: "Adoption Application", url: "adoption-application"},
            {text: "Foster Application", url: "foster-application"}]
    },
    {
        title: "Company",
        items: [{text: "About Us", url: "about"},
            {text: "Contact", url: "contact"},
            {text: "Feedback", url: "feedback"}]
    },
    {
        title: "Resource",
        items: [{text: "Donate", url: "donate"},
            {text: "Home", url: "/"}]
    },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
    return (
        <footer className="relative w-full mt-12">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography variant="h5" className="mb-6">
                        9 Lives Cat Rescue
                    </Typography>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-3 font-medium opacity-40"
                                >
                                    {title}
                                </Typography>
                                {items.map(({text, url}) => (
                                    <li key={text}>
                                        <Typography
                                            as="a"
                                            href={url}
                                            color="gray"
                                            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                                        >
                                            {text}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="/public">9 Lives Cat Rescue</a>. All Rights
                        Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography
                            as="a"
                            href="https://www.facebook.com/profile.php?id=100086980680366"
                            target="_blank"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography
                            as="a"
                            href="https://www.instagram.com/nine_lives_cat_rescueoxms/"
                            target="_blank"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography
                            as="a"
                            href="https://www.chewy.com/g/9-lives-cat-rescue_b89162803#wish-list&wishlistsortby=DEFAULT"
                            target="_blank"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <svg className="h-auto w-20" viewBox="0 0 601 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M495.8 44.4C495 35.5 487.4 28.1 475.3 29.2C463.8 30.2 459.9 35.9 458.7 43.9L451 103.5H450.6L434.2 52.8C429.3 37.4 426.1 33.5 410.4 34.8C394.7 36.2 391.9 40.4 390.1 56.6L383.9 109.2H383.5L364.5 52C362 44.4 357.2 39.4 345.7 40.4C338 41.1 332.7 44.7 330 49.6C329.7 47.2 328.7 44.6 327 41.7C319.3 28.1 291.7 7.59998 251.7 30.1C237.7 38 227.1 48.7 222.3 61.5C216.9 52.1 206.7 45.6 190.8 44.1C176.9 42.8 166.9 47.3 158.5 57.4H158.1L161.3 22.4C162.6 8.49997 154.6 1.29998 142.7 0.299981C130.8 -0.800019 121.6 4.79997 120.4 18.7L110.5 126.4C109.2 140.3 117.2 147.5 129.1 148.5C141 149.6 150.1 144 151.4 130.1L154.7 93.7C155.8 81.4 161.5 73.9 171.7 74.8C181.8 75.7 186.2 82.3 185.2 93.7L181.6 132.8C180.3 146.7 188.3 153.9 200.2 154.9C212.1 156 221.3 150.4 222.5 136.5L225.6 102.6C226.2 103.9 226.9 105.1 227.6 106.4C246.3 139.4 277 141.5 305.5 125.4C326.3 113.7 336.8 102.8 340.8 93.9L356.2 130.1C363 146.1 367.6 148.3 381.7 147.1C397 145.8 405.6 143.6 408.2 125L414.1 80.4H414.5L428 123.3C433.8 141.2 442.6 141.9 457.9 140.5C472 139.3 476.2 136.3 480.1 119.3L493.2 62.9C495.4 54.5 496.2 49.6 495.8 44.4ZM265.2 50C274.1 45 284.4 45.1 291.5 57.6L258 76.5C251.3 63.6 257.2 54.6 265.2 50ZM323.1 73.5C312.2 79.7 310.8 95.1 297.8 102.5C286.2 109.1 275.3 105.3 268 94.4L318.7 65.7C323 63.3 326.1 60.8 327.9 58.1C327.9 58.4 327.9 58.7 327.9 59C328.3 63.1 329.4 66.9 331.6 72.4C328.8 71.8 325.8 72 323.1 73.5ZM583.2 39.5C572.7 38.1 566.7 43.7 560.5 60L542 107.8L541.6 107.7L534.5 48.3C533.3 37.5 528.4 32 519.1 30.7C507.6 29.2 498.1 35.5 496.8 45.4C496.4 48.6 496.9 54.9 500 69.4L513.4 134.2C514.2 137.5 514.6 140.6 514.3 142.4C513.9 145.4 511.5 147 503.1 145.9C493.8 144.6 487.1 146.8 485.8 156.5C484.4 167 491.4 174.6 507.6 176.8C524.6 179.1 543.2 175.5 555.6 150.8L588.7 84.6C595.3 71.6 599.5 62.7 600 59.3C601.7 47.8 593.1 40.8 583.2 39.5ZM111.3 105.5C110 98.4 103 91.6 93.4 93.5C82.2 95.6 78.9 111.1 65.3 113.7C51.2 116.4 44.4 104.1 41.8 90.7C39.7 79.7 40.8 65.3 57.3 62.2C71.6 59.5 78.8 72.9 89.2 71C97.2 69.5 102.6 62.6 100.9 53.3C98.2 39.2 77 29.2 48.8 34.5C16.6 40.6 -5.50004 62.1 1.49996 99.1C8.59996 136.4 37 148.2 69.2 142.1C105.1 135.3 112.8 113.7 111.3 105.5Z" fill="#263238"/>
                            </svg>

                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}
