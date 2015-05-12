/** @jsx React.DOM */



//var index = React.createClass(Radium.wrap({
//
//    render: function() {
//
//        var self = this;
//
//        return (
//            //<button type="button" style={[styles]}>
//            //    <p>Hover Me</p>
//            //</button>
//            <div style={[styles]}>
//                <ul>{ this.props.items.map(function(m, index){
//                    var style = '';
//
//                    if(self.state.focused == index){
//                        style = 'focused';
//                    }
//
//                    // Notice the use of the bind() method. It makes the
//                    // index available to the clicked function:
//
//                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
//
//                }) }
//
//                </ul>
//
//                <p>Selected: {this.props.items[this.state.focused]}</p>
//            </div>
//        )
//    }
//}));
//
//var styles = {
//    background: '#c0392b',
//    border: 0,
//    color: 'white',
//    cursor: 'pointer',
//    display: 'block',
//    fontSize: 10,
//    //fontWeight: 'bold',
//    margin: "20px auto",
//    minWidth: 20,
//    outline: 0,
//    padding: 10,
//    WebkitTransition: '200ms all linear',
//    MozTransition: '200ms all linear',
//    transition: '200ms all linear',
//    textTransform: 'uppercase',
//    ":hover": {
//        background: '#e74c3c',
//        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
//        WebkitTransform: 'scale(1.1)',
//        MozTransform: 'scale(1.1)',
//        transform: 'scale(1.1)'
//    },
//    ':focus': {
//        backgroundColor: 'green'
//    },
//
//    ':active': {
//        backgroundColor: 'yellow'
//    }
//};
//
//
////React.render(<ComponentExample/>, document.getElementById('name'));
//
//// Render the menu component on the page, and pass an array with menu options
//
//
//React.render(
//    <index items={ ['Home', 'Services', 'About', 'Contact us'] } />,
//    document.getElementById('name')
//);



/**
 * Created by v-kevwu on 4/30/2015.
 */
