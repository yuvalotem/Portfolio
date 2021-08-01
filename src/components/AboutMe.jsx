import {
    List,
    ListItem
  } from '@material-ui/core';

  function AboutMe() {
    const info = {
        age: 24,
        experience: 1,
        work: 'part time Web Developer',
        company: 'Osheya',
        stack: ['JavaScript','HTML', 'CSS','React', 'Node', 'MySQL', 'MongoDB', 'Mobx', 'VanillaJS', 'Jquery', 'AWS'],
        hobbies: ['basketball', 'surfing', 'hiking', 'snowboarding', '']
    }
    return (
      <div className="aboutMe">
        <h1>About Me</h1>
        <span>
            Hello, My name is Yuval and I'm {info.age} years old.
            I'm a fullstack developer with {info.experience} years of experience.
            I'm currently working as {info.work} at {info.company}.
            my stack is <List>{info.stack.map(s=><ListItem>{s}</ListItem>)}</List>
            when I'm not coding you can find me <List>{info.hobbies.map(h=><ListItem>{h}</ListItem>)}</List>
        </span>
      </div>
    );
  }

  export default AboutMe;
