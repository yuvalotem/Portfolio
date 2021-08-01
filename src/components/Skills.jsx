

  function Skills() {
    const skills = [
      {
        name: 'JavaScript',
        rank: 90
    },
      {
        name: 'HTML',
        rank: 83
    },
      {
        name: 'CSS',
        rank: 88
    },
    ];
    return (
      <div className="skills">
          {skills.map(s=>{
              return(
              <div>
                  <h1>{s.name}</h1>
                  <span>Rank: {s.rank}</span>
              </div>
              )
          })}
      </div>
    );
  }

  export default Skills;
