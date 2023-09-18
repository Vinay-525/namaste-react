# Namaste React 🚀

# Parcel

- Provides Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing - Keeps track of all the file changes
- Code Splitting
- Differential Bundling - Supports Older Browsers
- Diagnostics
- Error Handling
- Host Our App Over HTTPS
- Tree Shaking - Remove Unused Code
- Different Builds For Dev and Prod Bundles

# JSX

- JSX (Javascript Extension) - JSX is the convention to merge HTML and JS together
- JSX is not HTML, instead it has HTML or XML like syntax
- JSX is not part of React
- JSX is not pure JS as JS Engine cannot understand JSX
- JSX transpiled before reaches the JS Engine means converts the code to some other code
  which browser can understand
- Transpiling is done by Babel which is part of Parcel Package
- JSX -> Babel-> React.createElement() -> ReactElement(JS Object) -> HTMLElement(On Render)
- Babel is the transpiler or JS compiler
- If you want to give attributes to JSX, we must use camelCase
- Prevents Cross Site Scripting (malicious) attacks by sanitizing the data before evaluation JS Expression in {}

# React Component

- Everything in react is a react component
- Class Based Component - Old Way
- Functional Component - New Way
- Functional Component - It is a JS function which returns some piece of JSX
- Must start with CAPITAL LETTER

# Component Composition

- Putting One Component into other component is called component composition

# Props

- Props means properties
- Passing props to a react component is same as passing arguments to a function
- React says Never use indexes as keys as it will cause performance hit
- Not Using Keys (Not Acceptable) <<< Index as keys <<<<<<<<< Unique Id (Best Practices)

# Config Driven UI

- Is the UI which is based on config which is coming from backend
- Suppose, different states in India have different offers or no offers , so based on that
  in backend API, our Frontend UI changes

# Hooks

- Normal JS utility functions
- useState - Superpowerful State Variables - It maintains the state of the react component . React keeps the track on those state variables that as soon as state variable updates, react triggers the diff aka
  re-conciliation algorithm and then updates the DOM efficiently (UI)

- - Whenever state variable updates, react re-render this component
- - React will keep your UI in sync with data layer, as soon as data layer updates , UI layer updates by re-rendering
- useEffect
- useParams is given by React Router
- useMemo - which increases the performance of the app
- useEffect - Callback fn will be called after the component renders
- Load -> Render -> Make API Call -> React Re-render

# Exports / Imports

- Two types of exports - Default and Named
- Default Import / Export :
- export default Header;
- import Header from "./Header";
- Named Import / Export :
- export const URL = "xyz";
- import {URL} from "./"

# Namaste Food

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCards
- Footer
- - Copyright
- - Links
- - Address
- - Contact

# React

- React is fast and efficient in DOM manipulation
- React uses somthing called as Re-conciliation Algorithm
- Re-conciliation Algorithm is also known as React Fiber
- React creates a virtual DOM which is not a actual DOM but a JS representation of Actual DOM
- Virtual DOM is nothing but a JS Object (React Element eventually)
- In React 16, a new algorithm has come up which is known as React Fiber
- React Fiber is a new way of finding the diff and updating the DOM
- React does not touch the DOM a lot, that is why react is fast
- Virtual DOM as a concept existed a long back, virtual DOM is not a react thing, React took that that virtual DOM and built its core algorithm on top of virtual DOM. React can efficiently finds out the difference between virtual DOMs (updated and previous) and update the UI. This is the core of React Algorithm
- React has one of the best render mechanism that means react has very fast render cycles
- Whenever state variable updates, React triggers a re-conciliation cycle(re-renders the component again)
- React re-render the whole component again and again but it is only updating the diff (difference of 2 virtual DOMs) in the actual DOM(UI)
- Actual DOM manipulation is very expensive but react is very smart and efficient in doing faster DOM manipulations

# Diff Algorithm

- Basically finds out the difference between the 2 virtual DOMs - updated virtual DOM and previous virtual DOM
  Ex:

OLD VIRTUAL DOM
APP

- BODY (Rate Card Container) - OLD ------- BODY (Rate Card Container) - NEW
- - RC1 ---------------------------------- - RC1
- - RC2 ---------------------------------- - RC2
- - RC3 ---------------------------------- - RC3
- - RC4 ---- Button Clicked ------------>
- - RC5
- - RC6
- - RC7

# Optional Chaining

- Read about it - JS Concept

# Shimmer UI

- A better way to show loading states in our web or mobile app
- Show Fake Cards instead of loader to improve user experience

# NextJs

# Recharts

# Material UI

# Redux
