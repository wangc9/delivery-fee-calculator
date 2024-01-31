# Reflection on the project

This is a personal reflection on the project, the choice of libraries or tools used in it and the reason behind them, my approach to the project and what I've learnt through it. And finally, what could be improved.

## Libraries and tools

### TypeScript, React and Vite

I chose Vite as the build tool for the project because it is relatively easy to use and requires minimum configuration. With the official [Redux TS template for Vite](https://github.com/reduxjs/redux-templates), it was quite simple to get a head start with the configuration. Although during the project, I did get into a problem with the configuration of Vite when using Docker, the general experience was quite smooth. I previously ran into trouble with testing using Vite and Jest, fortunately this hasn't happened in the project.

### Redux

Redux is my go-to state management library. This project also has just the correct size and use case for the library. In the "form" or front page, there are four inputs. Each of them needs to remember the user's input. Using React's useState could be an option but it might mean prop drilling or having to put all four inputs in one file. This makes Redux a good option.

### Material UI

For the CSS library, I used Material UI because the project doesn't really require that many customisations. I've already used Material UI a lot before, so using it in the project feels familiar and *relatively* comfortable.

### ESlint and Prettier

This is really easy to justify. They are the most popular tools for code quality checks. I choose to follow the Airbnb guide which in my opinion is quite comprehensive, although I've also found some arguments against using it as it might be an overkill for small projects. I'm very eager to learn about how Wolt ensures code format.

### Jest, React testing library, and Cypress

These three tools form a good combination to perform different levels of tests in my opinion. I've used jest for unit tests of redux, react testing library for unit tests and integration tests of various components and pages, and finally Cypress for e2e tests. Personally, I think the test cases have basically covered all scenarios that are common for the project, but I think I still have a long way to go to write better automated tests.

### React routers

This was used in a very small fraction of the project just to separate the input page and result page in different routes. It is just a small add-on for the project which follows some basic logic that the result needs to be on a separate page to be more intuitive for users.

### Docker

This is the first time I've tried to use Docker throughout the development. I've always wanted to try Docker on a larger scale and this project seems to be in the right size. Of course, I've run into some problems when doing it, but I'm glad that I've learnt a lot from it.

### GitHub Actions

I'm familiar with using GitHub Actions and it has become kind of a muscle memory for me. I'm glad that I've used it as it has helped me spot some problems with code format and e2e testing.

## What I've learnt

* **More about test-driven development**. In this project, I've tried to use the three levels of tests to compensate for each other and test different functions, components, and scenarios. It is time-consuming, but also quite rewarding. I used to be confused between unit tests and integration tests as their boundary can be blurry sometimes. In this project, I tried to force myself to distinguish them, and I think I have a better grip on them than before.

* **More about Docker**. I've learnt a lot about the use of Docker in development through try-and-error. And I'm surprised to know that Docker is not a firm guarantee that the program inside will always work. There's definitely space for me to improve when it comes to using Docker better.

* **More about accessibility**. I've used the [IBM Equal Access Accessibility Checker](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp) to check the accessibility of the project, and I've learnt a lot from the rules and suggestions, such as the use of `<fieldset>`, labels and correct contrast ratio. This is also the first time I've tried to view a webpage under high-contrast mode.

## What could be improved

* **Better tests**. When designing the tests, I followed my own "rule" that each component should have its own tests and e2e tests should act as a comprehensive guard for the whole app. This results in a somewhat even distribution between the three levels of tests, which works but is time-consuming. In addition, I've only included a handful of test cases. Having more of them and maybe including some more edge cases will definitely help me "sleep better at night". Moving on, I would like to put more emphasis on lower-level tests, and I would really love to know about how Wolt designs tests to have more unit tests, fewer integration tests and even fewer e2e tests.

* **Use customised CSS library**. While using Material UI was quite easy, it has its own trade-off: less customisation and harder to test. The latter is especially true, as I had a hard time trying to analyse what each Material UI component actually contains and how can I put the `data-test-id` into the right component. Using pure CSS or TailwindCSS could be an alternative.

* **Improve Docker**. In this project, I didn't include Cypress in Docker, so the e2e tests need to be run outside of Docker. This is not the optimal solution. Moving on, I'd like to explore Cypress's official docker image and use it instead to integrate e2e tests.

* **Better documentation**. I've tried to follow the guidelines of [TSDoc](https://tsdoc.org/) when writing comments for the code. But I still feel like there are spaces for improvement.

## Summary

This has been a really fun project for me, and I have had the opportunity to close some gaps in my knowledge. Hopefully, this reflection has provided good insight and I am really eager to have a deeper discussion on the project. Thank you for reading.