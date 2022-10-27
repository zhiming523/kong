<h2 align="center">Kong Assessment</h2>

<p align="center">
  <a href="https://github.com/shaminmeerankutty/webpack-sass-bootstrap-boilerplate/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/github/license/mashape/apistatus.svg"></a>
  <a href="https://webpack.js.org">
    <img alt="Webpack" src="https://img.shields.io/badge/webpack-v4.27.0-0072b8.svg"></a>
  <a href="http://getbootstrap.com/">
    <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-v4.1.3-563d7c.svg"></a>
  <a href="https://sass-lang.com">
    <img alt="Sass" src="https://img.shields.io/badge/node--sass-v4.10.0-df5a9c.svg"></a>
  <a href="https://jquery.com/">
    <img alt="jQuery" src="https://img.shields.io/badge/jquery-v3.3.1-ffa200.svg"></a>
  <a href="">
    <img alt="Webpack Dev Server" src="https://img.shields.io/badge/webpack--dev--server-live--reloading-orange.svg"></a>
</p>

<p align="center">
  <em>
  Sass
  · Babel
  · Bootstrap
  · Webpack
  · Webpack Dev Server
  · jQuery 3.5.1
  · Popper.js 
  </em>
</p>

## Getting Started

### Requirements

- Please make sure you have NodeJS installed, as this contains `npm`, which is necessary
  for installing dependencies, starting the appropriate scripts, and building your web project.

### Quick Start

Clone the repo:

    git clone https://github.com/zhiming523/kong.git

Navigate to the project folder:

    cd kong

Install all packages and dependencies required for this project:

    npm install

Start the development environment (then, navigate to http://localhost:8080):

    npm start

Then, open a browser and navigate to: http://localhost:8080/

Building files can be done as follows:

    npm run build

### Design Considerations

- Considerated when to use the bootstrap utilities class vs when to use custom scss to update the components. Without much background of the project I tried to make the decision that I think would be the easiest to help maintain the site in thefutre.

### Assumptions

- Given the Figma file has some inconsistent use of color, font-size, spacing, I assumed that it's not looking for pixel perfect rendering.
- I'm assuming this is part part of larger site rather than a single page site, so I used variables for scss rather than just writting the values into the component scss files for easy update in the future.

### How To Use

- Add your HTML files by inserting or including them in the `src` directory (By default `index.html` is added to your `src` directory, feel free to edit it and
  experiment with the changes live.)

      * Make sure you restart development server after adding new HTML files

- Add images to your `src/assets` folder.
- Add sass (SCSS) files to `src/scss` folder.
  - Make sure you import the scss file in `main.scss`

```sass
    @import "filename";
```

# Licence

Code released under the [MIT License](LICENSE.md).
