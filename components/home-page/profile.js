import Image from 'next/image';

import classes from './profile.module.css';

function Profile() {
  return(
    <section className={classes.profile}>
      <div className={classes.image}>
        <Image 
          src='/images/site/Rafi_Kadept Kastrat.jpg'
          alt='my profile picture'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Rafi</h1>
      <p>
        I am a sophomore computer science student at Universitas Indonesia
      </p>
    </section>
  );
}

export default Profile;