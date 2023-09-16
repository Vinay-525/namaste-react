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
