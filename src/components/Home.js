import React from 'react';



export class Home extends React.Component {
    render() {
        return (
            <>
            <nav>
                <button type = "submit" className = "logout">Logout
                </button>
            </nav>
            <h1>Grapes and Grub</h1>
            <form>
            <div className = "signin">
                <p>Sign In</p>
                <input type = "email" placeholder = "Email">
                </input>
                <input type = "text" placeholder = "Password">
                </input>
                <button type = "submit">Submit</button>
            </div>
            </form>
            <form>
            <div className = "signup">
                <p>Sign Up</p>
            <input type = "text" placeholder = "First Name">
                </input>
                <input type = "text" placeholder = "Last Name">
                </input>
                <input type = "email" placeholder = "Email">
                </input>
                <input type = "text" placeholder = "Password">
                </input>
                <button type = "submit">Submit
                </button>
            </div>
            </form>
            </>
        )
    }
}

