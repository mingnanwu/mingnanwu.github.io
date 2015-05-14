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
            <a className="btn btn-default" href="#"><i className="fa fa-github fa-5x"></i></a>
            <a className="btn btn-default" href="#"><i className="fa fa-align-center"></i></a>
            <a className="btn btn-default" href="#"><i className="fa fa-refresh fa-spin fa-4x"></i></a>
            <a className="btn btn-default" href="#"><i className="fa fa-align-justify"></i></a>
        </div>

);



React.render(icons, document.getElementById('socialIcons'));