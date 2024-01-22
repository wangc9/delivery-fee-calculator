# Changelog

## Note
- "*" indicates that the commit link is a placeholder. The corresponding link will be updated in the next commit.
- **Currently, all links to the commits do not work as the project is hold on GitHub as a PRIVATE repo. I am happy to provide access for review upon request.**


## v0.1.0

### Features
- [`5d232f0`](https://github.com/wangc9/delivery-fee-calculator/commit/5d232f07a02719dc87ca8a092ca9869156a900ef)* Enable fee calculation.
	- User can confirm input or make further changes after clicking submit button on the front page
	- All the inputs, along with the calculated fee, are displayed on a separate page at `/order`
	- Unit tests are written to test multiple combinations of input
	- Change font family to `Hanken Grotesk`, clean up pages and add Wolt logo


## v0.0.6

### Features
- [`a027f20`](https://github.com/wangc9/delivery-fee-calculator/commit/a027f204d03cfa734ff4f181dce985a5373be27d) Add confirmation page and data validation.
	- Submit button is disabled until all fields have been filled
	- An error message warning about empty input is shown if the input box is clicked without typing valid value
	- A summary page is shown when the button is clicked to confirm the input


## v0.0.5

### Features
- [`e203bbf`](https://github.com/wangc9/delivery-fee-calculator/commit/e203bbf67fa394b5b313886b43e794acd2c6eba8) Add Redux for state management.
	- Add `calculatorSlice` for updating each value when finished typing
	- Add unit tests for redux


## v0.0.4

### Features
- [`ad13e52`](https://github.com/wangc9/delivery-fee-calculator/commit/ad13e52dad7411646e79d1d890c3de85d10597a3) Add `StyledDateTimePicker` component.
	- Refactor code structure according to Redux recommendation (feature folder). The project is now structured according to feature. Each feature contains multiple components that are used exclusively by the feature.
	- `StyledDateTimePicker` enables inputting date and time by either directly typing into the box or selecting from a date and time selector.
	- Unit test is written for the new component.
	- Improve accessibility by adding visual labels and matching them with aria labels.


## v0.0.3

### Features
- [`596f8e2`](https://github.com/wangc9/delivery-fee-calculator/commit/596f8e2f7de1675334f1ec7aeff2620793825b61) Improve accessibility and CI.
	- Add `<fieldset />` for better form logic
	- Add `aria-label` for text field labeling
	- Enable tests in CI


## v0.0.2

### Features
- [`639b3ad`](https://github.com/wangc9/delivery-fee-calculator/commit/639b3adc3543d9611625b661a464fbac8a361472) Add `HookedTextField` component.
	- Component can accept field name and float/int number
	- Perform validation when value is changed. If input does not comply with the intended type, error message is displayed with the latest change disregarded. E.g. in number 1234. => 1234, in float 1234.+ => 1234.
	- Integration test for `HookedTextField` and the custom `useField` hook


## v0.0.1

### Features
- [`5d232f0`](https://github.com/wangc9/delivery-fee-calculator/commit/5d232f07a02719dc87ca8a092ca9869156a900ef) Project initial setup.
	- Coding language: Typescript
	- Front end framework: React
	- UI library: Material UI
	- State management: Redux
	- Testing: Jest, React Testing Library
	- Code formatting: Eslint (with Airbnb standard), Prettier
	- CI: Github Actions

