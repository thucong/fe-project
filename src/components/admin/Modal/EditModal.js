import styles from "./Modal.module.css";

const EditModal = ({ showEdit, closeEdit }) => {
  return (
    <div className={styles.modal}>
      <h2 className={styles.h2}>EDIT USER</h2>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Username <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Fullname <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Password <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="password" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Confirm password <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="password" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Phone <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Gmail <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            Address <span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <div className={styles.grid_container1}>
            <div>
              <label className={styles.label}>
                Date of Birth <span className={styles.span}>*</span>
              </label>
              <br />
              <input type="date" className={styles.date}></input>
            </div>
            <div>
              <label className={styles.label}>
                Role <span className={styles.span}>*</span>
              </label>
              <br />
              <select className={styles.select}>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button type="button" className={styles.cancel} onClick={closeEdit}>
          Cancel
        </button>
        <button type="submit" className={styles.edit}>
          Edit
        </button>
      </div>
    </div>
  );
};
export default EditModal;
