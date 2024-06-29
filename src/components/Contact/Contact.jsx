import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ userData }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.userData}>
      <ul>
        <li className={css.userDataLi}>
          <div>
            <FaUser />
          </div>
          <p>{userData.name}</p>
        </li>
        <li className={css.userDataLi}>
          <div>
            <BsFillTelephoneFill />
          </div>
          <p>{userData.number}</p>
        </li>
      </ul>
      <button onClick={() => handleDelete(userData.id)}>Delete</button>
    </li>
  );
}
