

var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem;


var navbarInstance = (
    <div>
    <Navbar brand='Under Constraction' inverse toggleNavKey={0}>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
            <NavItem eventKey={1} href='#'>Link</NavItem>
            <NavItem eventKey={2} href='#'>Link</NavItem>
            <DropdownButton eventKey={3} title='Dropdown'>
                <MenuItem eventKey='1'>Action</MenuItem>
                <MenuItem eventKey='2'>Another action</MenuItem>
                <MenuItem eventKey='3'>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='4'>Separated link</MenuItem>
            </DropdownButton>
        </Nav>
    </Navbar>
    </div>
);

React.render(navbarInstance, document.getElementById('navBar'));