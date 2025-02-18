import css from "./Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.wrapper}>
      <div className={css.data}>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <MdLocalPhone />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
