import { ReactComponent as GithubIcon } from './icons/github.svg';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';

import './index.css';

export default function () {
  return (
    <footer>
      <ul>
        <li>
          <a href='https://github.com/ReganCrowley' target='_blank'>
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/regan-crowley/' target='_blank'>
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
