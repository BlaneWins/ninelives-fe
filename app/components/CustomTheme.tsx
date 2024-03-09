import React from "react";

export const customTheme = {
    checkbox: {
        defaultProps: {
            color: "primary",
        },
        valid: {
            colors: [
                "primary",
            ],
        },
        styles: {
            base: {
                label: {
                    color: "",
                    className: "text-sm"
                },
            },
            colors: {
                "primary": {
                    background: "checked:bg-primary",
                    border: "checked:border-primary",
                    before: "checked:before:bg-primary",
                },
            },
        },
    },

    typography: {
        defaultProps: {
            variant: "small",
            color: "",
            textGradient: false,
            className: "",
        },
        valid: {
            variants: [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "lead",
                "paragraph",
                "small",
            ],
            colors: [
                "inherit",
                "current",
                "black",
                "white",
                "blue-gray",
                "gray",
                "brown",
                "deep-orange",
                "orange",
                "amber",
                "yellow",
                "lime",
                "light-green",
                "green",
                "teal",
                "cyan",
                "light-blue",
                "blue",
                "indigo",
                "deep-purple",
                "purple",
                "pink",
                "red",
            ],
        },
        styles: {
            variants: {
                h1: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-5xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-tight",
                },
                h2: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-4xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-[1.3]",
                },
                h3: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-3xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h4: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-2xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h5: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h6: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-relaxed",
                },
                lead: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-xl",
                    fontWeight: "font-normal",
                    lineHeight: "leading-relaxed",
                },
                paragraph: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
                small: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-sm",
                    fontWeight: "font-light",
                    lineHeight: "leading-normal",
                },
            },
            textGradient: {
                bgClip: "bg-clip-text",
                color: "text-transparent",
            },
            colors: {
                inherit: {
                    color: "text-inherit",
                },
                current: {
                    color: "text-current",
                },
                black: {
                    color: "text-black",
                },
                white: {
                    color: "text-white",
                },
                "blue-gray": {
                    color: "text-blue-gray-900",
                    gradient: "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
                },
                gray: {
                    color: "text-gray-700",
                    gradient: "bg-gradient-to-tr from-gray-600 to-gray-400",
                },
                brown: {
                    color: "text-brown-500",
                    gradient: "bg-gradient-to-tr from-brown-600 to-brown-400",
                },
                "deep-orange": {
                    color: "text-deep-orange-500",
                    gradient: "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
                },
                orange: {
                    color: "text-orange-500",
                    gradient: "bg-gradient-to-tr from-orange-600 to-orange-400",
                },
                amber: {
                    color: "text-amber-500",
                    gradient: "bg-gradient-to-tr from-amber-600 to-amber-400",
                },
                yellow: {
                    color: "text-yellow-500",
                    gradient: "bg-gradient-to-tr from-yellow-600 to-yellow-400",
                },
                lime: {
                    color: "text-lime-500",
                    gradient: "bg-gradient-to-tr from-lime-600 to-lime-400",
                },
                "light-green": {
                    color: "text-light-green-500",
                    gradient: "bg-gradient-to-tr from-light-green-600 to-light-green-400",
                },
                green: {
                    color: "text-green-500",
                    gradient: "bg-gradient-to-tr from-green-600 to-green-400",
                },
                teal: {
                    color: "text-teal-500",
                    gradient: "bg-gradient-to-tr from-teal-600 to-teal-400",
                },
                cyan: {
                    color: "text-cyan-500",
                    gradient: "bg-gradient-to-tr from-cyan-600 to-cyan-400",
                },
                "light-blue": {
                    color: "text-light-blue-500",
                    gradient: "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
                },
                blue: {
                    color: "text-blue-500",
                    gradient: "bg-gradient-to-tr from-blue-600 to-blue-400",
                },
                indigo: {
                    color: "text-indigo-500",
                    gradient: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
                },
                "deep-purple": {
                    color: "text-deep-purple-500",
                    gradient: "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
                },
                purple: {
                    color: "text-purple-500",
                    gradient: "bg-gradient-to-tr from-purple-600 to-purple-400",
                },
                pink: {
                    color: "text-pink-500",
                    gradient: "bg-gradient-to-tr from-pink-600 to-pink-400",
                },
                red: {
                    color: "text-red-500",
                    gradient: "bg-gradient-to-tr from-red-600 to-red-400",
                },
            },
        },
    },

    progress: {
        defaultProps: {
            color: "blue",
        },
        valid: {
            colors: [
                "primary",
            ],
        },
        styles: {
            base: {},
            variants: {
                filled: {
                    "primary": {
                        background: "bg-primary",
                        color: "text-white",
                    },
                },
            },
        },
    },

    radio: {
        defaultProps: {
            icon:
                <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>paw</title><path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z" /></svg>
        },
        // valid: {
        //   colors: [
        //     "blue-gray",
        //   ],
        // },
        // styles: {
        //   base: {
        //     label: {
        //       color: "blue-gray",
        //     },
        //   }
        // },
        // colors: {
        //   "blue-gray": {
        //     color: "text-blue-gray-500",
        //     border: "checked:border-blue-gray-500",
        //     before: "checked:before:bg-blue-gray-500",
        //   },
        // }
    }
};

