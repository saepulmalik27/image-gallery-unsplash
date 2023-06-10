/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const breakpoints = require('./src/config/breakpoints')
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            gridTemplateColumns: {
                one: 'minmax(0, 1fr)',
            },
            screens: {
                sm: `${breakpoints.sm}px`,
                md: `${breakpoints.md}px`,
                lg: `${breakpoints.lg}px`,
                xl: `${breakpoints.xl}px`,
                '2xl': `${breakpoints.xxl}px`,
                init: `${breakpoints.init}px`,
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.inner-container': {
                    width: '100%',
                    maxWidth: theme('variables.containerWidth'),
                    margin: '0 auto',
                    backgroundColor: theme('colors.jet-white.DEFAULT'),
                },
                '.text-display-1': {
                    'font-size': theme('fontSize.6xl'),
                    'line-height': theme('lineHeight.snug'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-display-2': {
                    'font-size': theme('fontSize.5xl'),
                    'line-height': theme('lineHeight.snug'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-title-1': {
                    'font-size': theme('fontSize.3xl'),
                    'font-weight': theme('fontWeight.bold'),
                    'line-height': theme('lineHeight.snug'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-title-2': {
                    'font-size': theme('fontSize.2xl'),
                    'font-weight': theme('fontWeight.bold'),
                    'line-height': theme('lineHeight.snug'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-title-3': {
                    'font-size': theme('fontSize.xl'),
                    'font-weight': theme('fontWeight.bold'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-title-4': {
                    'font-size': theme('fontSize.base'),
                    'font-weight': theme('fontWeight.bold'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-subtitle-1': {
                    'font-size': theme('fontSize.base'),
                    'font-weight': theme('fontWeight.normal'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.300'),
                },
                '.text-subtitle-2': {
                    'font-size': theme('fontSize.base'),
                    'font-weight': theme('fontWeight.normal'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.200'),
                },
                '.text-subtitle-3': {
                    'font-size': theme('fontSize.sm'),
                    'font-weight': theme('fontWeight.normal'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.300'),
                },
                '.text-subtitle-4': {
                    'font-size': theme('fontSize.sm'),
                    'font-weight': theme('fontWeight.normal'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.200'),
                },
                '.text-header': {
                    'font-size': theme('fontSize.4xl'),
                    'line-height': theme('lineHeight.snug'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-headline': {
                    'font-size': theme('fontSize.xl'),
                    'line-height': theme('lineHeight.snug'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-body': {
                    'font-size': theme('fontSize.base'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-caption': {
                    'font-size': theme('fontSize.sm'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
                '.text-label': {
                    'font-size': theme('fontSize.xs'),
                    'line-height': theme('lineHeight.normal'),
                    color: theme('colors.jet-black.DEFAULT'),
                },
            })
        }),
    ],
}
