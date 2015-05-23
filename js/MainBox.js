/**
 * Created by mingnanwu on 5/23/15.
 */
/** @jsx React.DOM */


// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.


var IntroBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a IntroBox.
            </div>
        );
    }
});
React.render(
    <IntroBox />,
    document.getElementById('mainBox')
);