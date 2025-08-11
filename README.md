# prismgate

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd prismgate`
- `pnpm install`

## Running / Development

- `pnpm start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code; try `ember help generate` for more details.

### Running Tests

- `pnpm test`
- `pnpm test:ember --server`

### Linting

- `pnpm lint`
- `pnpm lint:fix`

### Building

- `pnpm ember build` (development)
- `pnpm build` (production)

### Deploy

Since I have a Vercel account, I decided to automatically deploy the app there. This will also be useful for PR's previews.
The live application is available at: [https://prismgate.vercel.app/](https://prismgate.vercel.app/)

### Dev log

- Init EmberJS Project
- Follow the documentation. While checking the documentation, I found out that it's been so long since I used EmberJS (3.18) that everything has changed. I found references that Ember is trying to modernise itself using Vite ([Embroider](https://github.com/embroider-build/embroider) and Ember-data has now its standalone lib, [WarpDrive](https://emberjs.github.io/data/)).
- I tried to integrate these new features, but it was taking so much time for this project that I dropped it after around 2 to 4 hours of work.
- Started the project with Embroider and Typescript blueprint
- Set up Vercel to deploy the EmberJS app
- Added the `datastore.js` file to load on app load
- Plan a high-level Components approach or routes (if applicable, which I decided to keep everything in `/`)
- Start creating the first models based on `datastore.js` data for ease of development
- Tried to add `WarpDrive` to ease models integration and development, but reverted back
  - The `ember generate model --typescript` in `EmberJS 6.6` doesn't create models with `.ts`. After some research, I found the following answer to this in EmberJS' Discord from Chris Thuburn, member of Ember-data, `To my knowledge, we’ve never created a TS blueprint`. This explains why I'm going to have a few JS files in the middle of TS. I'll try to convert them to `TS` in the end, but if it takes too long, I'll just keep them.
- Based on the info above, I decided to generate a new project with just the `--typescript` blueprint
- Start generating the required models
- New Warp configuration is being a nightamre, I'm regressing to a version I don't send most of the time reading (5.12 LTS)
- Generate Models
  - Since the datastore its not an API, I would have to create all the relationships myself. Becuase of this, I created custom getters in the models I need
