import {
    List,
    ListItem,
    Link
  } from '@material-ui/core';

  function NavBar() {
    const projects = [
      {
        name: 'CRM',
        link: 'https://crm-react-yuval.herokuapp.com/',
        languages: ['JavaScript', 'CSS', 'HTML'],
        frameworks: ['react', 'Mobx'],
        database: ['SQL'],
    },
      {
        name: 'NASA-APP',
        link: 'https://nasa-app-yuval.herokuapp.com/',
        languages: ['JavaScript', 'CSS', 'HTML'],
        frameworks: ['react', 'Mobx'],
        database: ['MongoDB'],
    },
    ];
    return (
      <div className="MyProjects">
          {projects.map(p=>{
              return(
              <div>
                  <h1>{p.name}</h1>
                  <span>Link: {p.link}</span>
                  <List>Languages: {p.languages.map(l=><ListItem>{l}</ListItem>)}</List>
                  <List>Frameworks: {p.frameworks.map(l=><ListItem>{l}</ListItem>)}</List>
                  <List>Database: {p.database.map(l=><ListItem>{l}</ListItem>)}</List>
              </div>
              )
          })}
      </div>
    );
  }

  export default NavBar;
