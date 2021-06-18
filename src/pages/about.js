const About = () => {
  return (
    <div>
      <div class="row">
        <div class="col s12 m10">
            
          <h4 class="header">About us</h4>

          <div class="guide-content content">
            <h6 id="requirements-analysis">Requirements Analysis</h6>

            <p>
              The blog system that we are going to develop is a single user
              system. The owner of the system will be able to perform the
              following actions:
            </p>

            <ul>
              <li>Login and logout</li>
              <li>Create, update and delete posts</li>
              <li>Publish, unpublish and archive posts</li>
              <li>Approve and delete comments</li>
            </ul>

            <p>
              All other users are guest users who can perform the following
              actions:
            </p>

            <ul>
              <li>Read posts</li>
              <li>Create comments</li>
            </ul>

            <p>Additional Requirements for this system include:</p>

            <ul>
              <li>
                The homepage of the system should display a list of the most
                recent posts.
              </li>
              <li>
                If a page contains more than 10 posts, they should be displayed
                in pages.
              </li>
              <li>
                The system should display a post together with its comments.
              </li>
              <li>
                The system should be able to list posts with a specified tag.
              </li>
              <li>
                The system should show a cloud of tags indicating their use
                frequencies.
              </li>
              <li>The system should show a list of most recent comments.</li>
              <li>The system should be themeable.</li>
              <li>The system should use SEO-friendly URLs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
