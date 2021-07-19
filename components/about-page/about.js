import classes from './about.module.css';

function AboutMe() {
  return(
    <section className={classes.about}>
      <hr 
        style={{
          width: "70%",
        }}
      />
      <h1 className={classes.header}>
        About Me
      </h1>
      <div>
        <p>
          My name is Ahmad Rafi Wirana. 
        </p>
      </div>
      <hr 
        style={{
          width: "70%",
        }}
      />
    </section>
    
  );
}
export default AboutMe;