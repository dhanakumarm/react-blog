const ContactContainer = () => {
  return (
    <div>
      <div className="row">
      <h4 className="header">Contact Form</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="subject" type="text" className="validate" />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea id="body" className="materialize-textarea"></textarea>
              <label htmlFor="body">Body</label>
            </div>
          </div>

          <div className="row">
          <div className="input-field col s4 m6 xl2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </div>

            <div className="input-field col s4 m6 xl2">
              <button
                className="btn waves-effect waves-light"
                type="button"
                name="action"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactContainer;
