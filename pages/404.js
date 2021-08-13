/* eslint-disable react/no-unknown-property */
import Footer from '../components/layout/footer';
import styled from 'styled-components';

const BlueLink = styled.a `
  color: blue;
`

function NotFoundPage() {
  return(
    // eslint-disable-next-line react/no-unknown-property
    <>
      <div class="min-h-screen px-6 md:px-20 lg:px-32 xl:px-60 2xl:px-80 text-2xl md:text-3xl pt-36 md:pt-44 uppercase text-center space-y-10 font-bold font-secondary bg-white dark:bg-secondary">
        <h1>Page Not Found :(</h1>
        <div class="transform hover:scale-105">
          <p>
            <BlueLink href="/">Back to Home</BlueLink>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default NotFoundPage;