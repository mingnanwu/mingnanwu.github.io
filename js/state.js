var ClickApp = React.createClass({
        getInitialState:function(){
            return {
                clickCount: 0,
            }
        },
        handleClick: function(){
            this.setState({
                clickCount: this.state.clickCount + 1
            })
        },
        render: function(){
            return (
                <div>
                <h2>click it</h2>
                <button onClick={this.handleClick}>button</button>
        <p>you clicked: {this.state.clickCount}</p>=
    </div>
)
}
});

var clickComponent = React.render(
        <ClickApp/>,
    document.getElementById('app')
)


