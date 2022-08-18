import { useState } from "react";

const NameForm = (props) => {
  console.log("NameForm: props: ", props);

  const [name, setName] = useState("");
  console.log("NameForm: name: ", name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getName(name);
    setName("");
  };

  return (
    <div>
      {" "}
      this is the form
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NameForm;
