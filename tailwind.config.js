/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
            main : '#03DBB2',
            strong : '#222222',
            medium : '#707070',
            light : '#A3A3A3',
            palewhite : '#F5F5F5',
            lightline : '#EFEFEF',
            red : '#FF6A6A',
            textbox : '#E1E1E1',
            sub : '#F1F9F7',
            lightpressed : '#F2F2F2',
            strongpressed : '#EBEBEB',
            kakao : '#F7E600'
        },
      },
    },
    plugins: [],
  }
