# NPM Tutorial

**Youtube URL:** https://www.youtube.com/watch?v=bdHE2wHT-gQ

# 1. Nodemon

## Installation

#### Installing a package globally

`npm install -g nodemon`

#### Installing locally

`npm install --save-dev nodemon`

## Usage

`nodemon <js_file>`

`nodemon 3-basic-routing`

# 2. Definitions

**package.json**: The package file contains package name, version, author, required dependencies and some project configurations.

# 3. Create package / Install dependencies locally

## Creating a new package

`npm init`

## Installing packages locally

`npm install --save lodash`

or

`npm i --save lodash`

_Note: In the new versions of npm `--save` flag is enabled default. But in some old versions the `--save` flag is needed._

# 4. Sharing Code

When uploading a npm package to git repository, you do not need to upload node_module diretory. It contains the files from installed dependencies.

You can install anytime the required dependencies for the package with `npm install` command. This command reads the dependencies from package.json and installs them from npm registry.
