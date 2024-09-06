import './PersonalDataForm.css';

function PersonalDataForm() {
  return (
    <form>
      <h2 className="card-title">Personal Data</h2>
      <input type="text" className="firstName" placeholder="First Name" />
      <input type="text" className="lastName" placeholder="Last Name" />
      <input type="text" className="post" placeholder="Frontend Developer" />
      <div className="custom-file-upload">
        <label htmlFor="file">Choose a picture</label>
        <input type="file" id="file" accept="image/*" />
      </div>

      <textarea
        placeholder="Tell something about yourself to stand out from other candidates..."
        className="about"
      />
    </form>
  );
}

export default PersonalDataForm;
