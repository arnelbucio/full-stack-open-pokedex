# Exercise 11.1

Before getting our hands dirty with setting up the CI/CD pipeline let us reflect a bit on what we have read.

## 11.1 Warming up

Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.

Let us assume that the application is coded with some other language than JavaScript/TypeScript, e.g. in Python, Java, or Ruby. You can freely pick the language. This might even be a language you do not know much yourself.

Write a short text, say 200-300 words, where you answer or discuss some of the points below. You can check the length with https://wordcounter.net/. Save your answer to the file named exercise1.md in the root of the repository that you shall create in exercise 11.2.

### The points to discuss:

- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
  Remember that there are no 'right' answers to the above!

For JavaScript, ESLint is the de facto tool for linting. Jest is commonly used to test components in isolation while Cypress is for testing the whole user flow aka end to end testing. Webpack is still the most popular module bundler. There's also rollup, parcel, esbuild, vite, etc. I tried Vite and it's super fast. It's built by the great Evan You - the creator of Vue.js.
Aside from Jenkins and GitHub CI, there's a lot of CI solutions out there like TravisCI, GitlabCI, CircleCI, Bamboo and TeamCity.
Cloud-based CI/CD solutions are probably enough for small to medium applications. With minimal setup you can get your pipeline up and running. Once the cloud-based becomes too slow or lacks a special requirement to complete the pipeline, it's time to move to a self-hosted solution.
