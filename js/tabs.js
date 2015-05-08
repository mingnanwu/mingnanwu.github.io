/** @jsx React.DOM */



var ComponentExample = React.createClass(Radium.wrap({
    render: function() {
        return (
            <button type="button" style={[styles]}>
                <p>Hover Me</p>
            </button>
        )
    }
}));

var styles = {
    background: '#c0392b',
    border: 0,
    color: 'white',
    cursor: 'pointer',
    display: 'block',
    fontSize: 18,
    fontWeight: 'bold',
    margin: "20px auto",
    minWidth: 200,
    outline: 0,
    padding: 10,
    WebkitTransition: '200ms all linear',
    MozTransition: '200ms all linear',
    transition: '200ms all linear',
    textTransform: 'uppercase',
    ":hover": {
        background: '#e74c3c',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
        WebkitTransform: 'scale(1.1)',
        MozTransform: 'scale(1.1)',
        transform: 'scale(1.1)'
    }
}

React.render(<ComponentExample/>, document.getElementById('name'));

// Render the menu component on the page, and pass an array with menu options

/**
 * Created by v-kevwu on 4/30/2015.
 */
