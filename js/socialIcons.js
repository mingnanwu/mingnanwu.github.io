/**
 * Created by mingnanwu on 5/12/15.
 */
var ButtonToolbar = ReactBootstrap.ButtonToolbar,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Button = ReactBootstrap.Button,
    Glyphicon = ReactBootstrap.Glyphicon,
    Tooltip = ReactBootstrap.Tooltip,
    //OverlayTrigger = ReactBootstrap.OverlayTrigger;
    OverlayTrigger = ReactBootstrap.OverlayTrigger;

var icons = (
        <div className="btn-group">
            <OverlayTrigger placement='top' overlay={<Tooltip>My github page</Tooltip>}>
                <a className="btn btn-default" href="https://github.com/mingnanwu"><i className="fa fa-github fa-4x"></i></a>
            </OverlayTrigger>
            <OverlayTrigger placement='top' overlay={<Tooltip>Connect me on LinedIn</Tooltip>}>
                <a className="btn btn-default" href="https://www.linkedin.com/in/mingnanwu"><i className="fa fa-linkedin-square fa-4x"></i></a>
            </OverlayTrigger>
            <OverlayTrigger placement='top' overlay={<Tooltip>Google+</Tooltip>}>
                <a className="btn btn-default" href="https://google.com/+wumingnan"><i className="fa fa-google-plus fa-4x"></i></a>
            </OverlayTrigger>
            <OverlayTrigger placement='top' overlay={<Tooltip><strong>Email me!</strong></Tooltip>}>
                <a className="btn btn-default" href="mailto:mingnanwu@gmail.com"><i className="fa fa-envelope-o fa-4x"></i></a>
            </OverlayTrigger>
            <OverlayTrigger placement='top' overlay={<Tooltip><strong>Email me!</strong> Check this info.</Tooltip>}>
                <a className="btn btn-default" href="https://www.dropbox.com/s/rjwdmqtsz0okyjw/resume%202015.pdf?dl=0"><i className="fa fa-file fa-4x"></i></a>
            </OverlayTrigger>
        </div>

    //<ButtonToolbar>
    //
    //    <Button>Submit</Button>
    //    <Button>Cancel</Button>
    //    <OverlayTrigger placement='left' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
    //        <Button bsStyle='default'>Holy guacamole!</Button>
    //    </OverlayTrigger>
    //</ButtonToolbar>


);




React.render(icons, document.getElementById('socialIcons'));