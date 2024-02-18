# Changelog


## v0.2.5
### Bug fixes
- [`e885288`](https://github.com/wangc9/delivery-fee-calculator/commit/e885288c438b558828781342bf5049ce3dc140c8) Change test id name for delivery fee.


## v0.2.4
### Bug fixes
- [`78d5489`](https://github.com/wangc9/delivery-fee-calculator/commit/78d54891ca80337c979a79ab5f8b77e5cc6553ee) Change logic to exclude 7 pm as the rush hour


## v0.2.3
### Bug fixes
- [`d874377`](https://github.com/wangc9/delivery-fee-calculator/commit/d8743770d2188d3cc839358d8bac830592257db6) Clear redux when cancel button is clicked


## v0.2.2
### Bug fixes
- [`6830932`](https://github.com/wangc9/delivery-fee-calculator/commit/6830932ff7a379b5d644faab8461a3608db5ffca) Use dayjs in unit tests to mitigate time zone problem and change `ContentContainer` style


## v0.2.1
### Features
- [`11d588c`](https://github.com/wangc9/delivery-fee-calculator/commit/11d588cafcb649ac69aa6d55212f403b9a9031a7) Add unit tests and personal reflection


## v0.2.0
### Features
- [`92fbd5c`](https://github.com/wangc9/delivery-fee-calculator/commit/92fbd5cc6ee0d6c942b4a36a2b86c8b9da105a24) Change style and deploy to render


## v0.1.8
### Features
- [`86a87e8`](https://github.com/wangc9/delivery-fee-calculator/commit/86a87e812416a0a2729bbbf58dbc7fbfc07e5699) Add `ContentContainer`
	- All pages are now included in the container with the same style
	- Unit tests are updated

### Bug fixes
- [`86a87e8`](https://github.com/wangc9/delivery-fee-calculator/commit/86a87e812416a0a2729bbbf58dbc7fbfc07e5699) Fix state update


## v0.1.7
### Bug Fixes
- [`91a46a9`](https://github.com/wangc9/delivery-fee-calculator/commit/91a46a97957d58e9c14b1c2b945e27060d731150) Fix multiple bugs
	- Add sleep in development docker to prevent race issues
	- Delete unused html code


## v0.1.6
### Chores
- [`d531eb7`](https://github.com/wangc9/delivery-fee-calculator/commit/d531eb7c93a069926d6e0ec16cebaf16d3467c5a) Improve documentation


## v0.1.5
### Features
- [`2dd7c77`](https://github.com/wangc9/delivery-fee-calculator/commit/2dd7c7785e9967161bb70190d7e6b644a627c354) Add docker file for production


## v0.1.4
### Chores
- [`618f0ab`](https://github.com/wangc9/delivery-fee-calculator/commit/618f0abf284b52fcf66ac91d992b5c3b8922f3e7) Split calculator page and confirmation page into reusable components
	- Split `Calculator` into `Calculator` and `Confirmation`
	- Use `Header` and `ConfirmItem` to display confirmation page
	- Add unit tests for the new pages and components


## v0.1.3
### Features
- [`77e1590`](https://github.com/wangc9/delivery-fee-calculator/commit/77e159094482f8c3b395e05e004fa96ff8397897) Change input validation
	- Validation now happens only when the user has finished typing and clicked out of the text box
	- The submit button is disabled until all text boxes receive correct input (positive integer or float number and order time is later than the current time)
	- All unit and integration have been updated
	- e2e tests include edge cases


## v0.1.2
### Features
- [`bc3349f`](https://github.com/wangc9/delivery-fee-calculator/commit/bc3349f4194b47850a9fdc1a4ea4f0eca29f14ec) Change front page style

### Chores
- [`bc3349f`](https://github.com/wangc9/delivery-fee-calculator/commit/bc3349f4194b47850a9fdc1a4ea4f0eca29f14ec) Add README for local build instructions


## v0.1.1

### Features
- [`1fc5a23`](https://github.com/wangc9/delivery-fee-calculator/commit/1fc5a23a1403cbf7ae89d553b8bf46cff55383fb) Add e2e tests.
	- More `data-test-id`s are added for easier testing
	- Use Cypress to perform e2e tests

### Bug fixes
- [`f99cd17`](https://github.com/wangc9/delivery-fee-calculator/commit/f99cd17a648e8adb34e89313102177eb7bc20dd8) Use `DesktopDateTimePicker` instead of `DateTimePicker` for CI consistency
- [`1f3d9b9`](https://github.com/wangc9/delivery-fee-calculator/commit/1f3d9b959e761fac4bc4916def1d06276e41a0f7) Fix eslint issue for cypress config file


## v0.1.0

### Features
- [`0136517`](https://github.com/wangc9/delivery-fee-calculator/commit/013651726649d9ca71b575b727f3f5684ce50202) Enable fee calculation.
	- User can confirm input or make further changes after clicking submit button on the front page
	- All the inputs, along with the calculated fee, are displayed on a separate page at `/order`
	- Unit tests are written to test multiple combinations of input
	- Change font family to `Hanken Grotesk`, clean up pages and add Wolt logo

### Bug fixes
- [`eefa91d`](https://github.com/wangc9/delivery-fee-calculator/commit/eefa91d4608eba603ccac2399913619775372b5a) Change time in unit tests.
	- Initial unit tests can run locally, but fail to run in CI pipeline. Possible reason: different time zone causing the calculation to fail to determine "Friday rush"


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

