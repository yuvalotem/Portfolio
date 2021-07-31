import {
  List,
  ListItem,
  Link
} from '@material-ui/core';

function NavBar() {
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
  return (
    <div className="NavBar">
        <List style={flexContainer}>
          <Link href="/home">
            <ListItem>My Projects</ListItem>
          </Link>

          <Link>
            <ListItem>My Skills</ListItem>
          </Link>

          <Link>
            <ListItem>About Me</ListItem>
          </Link>

          <Link>
            <ListItem>Contact Me</ListItem>
          </Link>
        </List>
    </div>
  );
}

export default NavBar;
