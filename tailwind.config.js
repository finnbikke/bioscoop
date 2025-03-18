module.exports =  {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          darkbg:"#1E293B",
          blue: {
            850: "#1e40af"
          }


        },
        screens: {
          "other":{"min": "340px", "max":"1200px"},
      },
    },
  },
    plugins: [],
  }