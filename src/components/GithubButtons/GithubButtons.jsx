import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/mattdav30"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Github Ford"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/mattdav30"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Github Star"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
