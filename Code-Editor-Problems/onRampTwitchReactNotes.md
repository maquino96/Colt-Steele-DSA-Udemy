Onramp - Twitch - React Training

React Context API

Prop drilling — tedious process of passing down state from a top level component through various components to get to a base component
— context should not replace prop drilling when passing props down a level or two
— still a bit confusing
— Shouldn’t be placed at the very top, still a tool to be used for concise state management
— I would personally still use Redux for larger projects.

Type check props for a component using PropTypes (package)
-  Used in development to check the types of elements passed through props of a component
- Can make it so that a component has the required props in order to render.
- Useful validations, testing while developing components. 

￼

React Hooks explained:
- Use features of the react framework by calling special ‘hook’ functions from within a component
    - Can be considered ‘primitives’ that give you superpowers by allowing you to do things you can’t do with vanilla JS
- Stateful logic, data that changes within the application
- USING CLASS COMPONENTS FLAW, in order to work with reactive data (state) you needed to make a component which led to nested components and chains upon chains of components. 
- Hooks always start with ‘use’
- Start at the top level of a functional component

useState - handles reactive data, when data changes— rerender the UI
useEffect - runs function you input when initially mounted and again when state changes
	- second argument is an array of dependencies (generally holds state values to rerun the function when state is updated) 
	- no second argument means the input function only runs when the component is initialized
	- using return we can create a teardown function that runs before the component is removed from the UI (unmount component)

understand the component lifecycle
componentDidMount() // initialized
componentDidUpdate() // state updated
componentWillUnmount() // destroyed

useContext - allows you to work with Reacts context API. Mechanism that allows you to share or scope values throughout the entire component tree
- Consumes the value from the nearest parent provider

useRef - mutable value that doesn’t re-render
- More commonly used to grab an element from the DOM

useReducer - a different way to manage state using the redux pattern
- Dispatch actions > reducer function > determines how to set the next state in the store > render UI
- [state, dispatch] = useReducer(reducer, initial state)
    - Dispatch an action, an action is an object that has a type and an optional data payload
    - Reducer function, takes the state and action from dispatch and uses these 2 values to compute the next state.
        - Usually use a switch statement
- Helps code manage complexity as it grows. 

useMemo - cache results of functional call, use only as needed for expensive computations

useCallback() 
useImperativeHandle() 
useLayoutEffect() - similar to useEffect, your callback will run after rendering the component but before the updates are made on the screen 
- Situations where you need to calculate scroll positions before updating the screen
useDebugValue() -  adds custom display names in dev tools

Functional Components v Class Components in React:
- Functional component is a JS function that returns JSX
- Class component is a JS class that extends React.Component and contains a render method
- When passing props, class components make use of the this keyword e.g. const { name } = this.props
- Handling State, React 16.8 introduced hooks and the useState hook allows developers to write stateful functional components
- The constructor of a React.Component is called before its mounted. Need to call super(props) and place state in here otherwise all state variables will be undefined
- Within the constructer a key-value pair of state = { count: 0, stateVariable: ‘test’ } can be stored and accessed as this.state.count or this.state.stateVariable 
- Class components use this.setState() to update state
- useEffect hook replaces componentDidMount lifecycle method to run a callback function after the first render.
- useEffect also takes care of componentWillUnmount when you return a function. 

Functional components are written shorter and simpler, easier to develop, understand, and test. Less use of the this keyword
React team is supporting more React hooks for functional components.
