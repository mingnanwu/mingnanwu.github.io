/**
 * Created by mingnanwu on 5/12/15.
 */
var ButtonToolbar = ReactBootstrap.ButtonToolbar,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Button = ReactBootstrap.Button,
    Glyphicon = ReactBootstrap.Glyphicon;


var icons = (
        //
        //<ButtonToolbar>
        //<ButtonGroup>
        //    <Button bsSize='large'><Glyphicon glyph='star' /> Star</Button>
        //    <Button bsSize='xsmall'><Glyphicon glyph='star' /> Star</Button>
        //</ButtonGroup>
        //</ButtonToolbar>
        <div className="btn-group">
            <a className="btn btn-default" href="https://github.com/mingnanwu"><i className="fa fa-github fa-4x"></i></a>
            <a className="btn btn-default" href="https://www.linkedin.com/in/mingnanwu"><i className="fa fa-linkedin-square fa-4x"></i></a>
            <a className="btn btn-default" href="https://google.com/+wumingnan"><i className="fa fa-google-plus fa-4x"></i></a>
            <a className="btn btn-default" href="mailto:mingnanwu@gmail.com"><i className="fa fa-envelope-o fa-4x"></i></a>
        </div>

);



React.render(icons, document.getElementById('socialIcons'));