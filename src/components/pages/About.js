import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>ABOUT THIS APP</h1>
      <p>
        This is an app that uses React hooks. It is a smaller app, so it is
        using the useContext hook to transfer common data throughout the
        component hiearchy. It is used so props won't have to be passed down to
        each level.
      </p>
      <p>
        A user can put a GitHub username into the field and bring back
        information of the GitHub user. It brings back how many followers they
        have, how many they follow, and their last 5 repos.
      </p>
    </Fragment>
  );
};
export default About;
