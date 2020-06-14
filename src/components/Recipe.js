import React from 'react';


export class Recipe extends React.Component {
    render() {
        return (
            <>
                <button type = "submit" className ="logout">Logout</button>
            <h1>Grapes and Grub</h1>
            <div className = "form-section">
                <label htmlFor = "recipe-title">Recipe Title</label>
                <input type = "text" className = "recipe-title" required />
            </div>
            <div className = "recipe-section">
                <textarea name = "recipe-summary" rows = "5" placeholder = "Recipe Summary" required></textarea>
                </div>
            <label htmlFor =  "recipe-rating">Rating</label>
            <input type = "number" className = "recipe-rating" />
            <button type = "submit">Submit </button>
            <div class = "container">
                <table>
                    <tr>
                        <th>Recipe</th>
                        <th>Recipe Description</th>
                        <th>Rating</th>
                    </tr>
                    <tr>
    <td>Chicken Marsala</td>
    <td>Steps of Recipe</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grilled Salmon</td>
    <td>Steps of Recipe</td>
    <td>6</td>
  </tr>
  <tr>
    <td>Chocolate Cake</td>
    <td>Steps of Recipe</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Lasagna</td>
    <td>Steps of Recipe</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Homeade Pizza Dough</td>
    <td>Steps of Recipe</td>
    <td>9</td>
  </tr>
  <tr>
    <td>Grilled Filet Mignon</td>
    <td>Steps of Recipe</td>
    <td>5</td>
  </tr>
                </table>
            </div>
            </>
        )
    }
    }


