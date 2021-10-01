import styles from "./Modal.module.css";

const DeleteModal = ({ showDelete, closeDelete }) => {
  return (
    <div className={styles.modal}>
      <div>
        <h1 className={styles.h1}>Do you want to delete username?</h1>
      </div>
      <div className={styles.button}>
        <button type="button" className={styles.cancel} onClick={closeDelete}>
          No
        </button>
        <button type="submit" className={styles.add}>
          Yes
        </button>
      </div>
    </div>
  );
};
export default DeleteModal;
