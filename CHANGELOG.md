# Changelog

## Note
- "*" indicates that the commit link is a placeholder. The corresponding link will be updated in the next commit.
- **Currently, all links to the commits do not work as the project is hold on GitHub as a PRIVATE repo. I am happy to provide access for review upon request.**


## v0.0.2

### Features
- [`5d232f0`](https://github.com/wangc9/delivery-fee-calculator/commit/5d232f07a02719dc87ca8a092ca9869156a900ef)* Add `HookedTextField` component.
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

