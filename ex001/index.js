const root = document.getElementById('root')

/* Basic Example
ReactDOM.render(<div class="header">
<h1>Hello Word</h1>
<p>This is a Paragraph</p>
</div>, root)
*/

/*
function MainContent(){
    return (
        <div class="header">
        <h1>Hello Word</h1>
        <p>This is a Paragraph</p>
        </div>
    )
}
ReactDOM.render(
<div>
    <MainContent />
</div>, root)
*/

// JSX
/*
const element = <h1 className="header">This is JSX</h1>
console.log(element)

/* Output
{
    $$typeof: Symbol(react.element), 
    type: 'h1', 
    key: null, 
    ref: null, 
    props: {…}, …}
*/

// NavBar

function NavBar(){
    return (
        <nav>
            <h1>ReactNews</h1>
            <ul>
                <li>Contact</li>
                <li>About</li>
                <li>News</li>
            </ul>
        </nav>
    )
}

ReactDOM.render(<NavBar />, root)