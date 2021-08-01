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
    <div className="navBar">
        <List style={flexContainer}>
          <Link href="/projects">
            <ListItem>My Projects</ListItem>
          </Link>

          <Link href="/skills">
            <ListItem>My Skills</ListItem>
          </Link>

          <Link href="/about">
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
