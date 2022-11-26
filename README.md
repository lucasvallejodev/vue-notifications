# Vue.js Simple Notifications

![Vue.js Simple Notifications](https://raw.githubusercontent.com/lucasvallejo1992/vue-notifications/2452d98c2661c7b9a4189b73e62046dbd4dcd22d/docs/simple-notification.png)

🎉 Vue.js Simple Notifications allows you to add extra simple notifications to your app with ease.

## Installation

### Project Setup
```sh
npm install
```

### Compile and test it
```sh
npm run dev
```

If you want to use the component on your own project you'll need to use vue 3 and install the following libraries:

### First you need to install tailwind and set it up
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your tailwind template paths
```
/**  @type  {import('tailwindcss').Config}  */
module.exports  = {
  content: [
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Install uuid to manage unique identifiers
```sh
npm install uuid
```

### You are ready to go! 🚀
