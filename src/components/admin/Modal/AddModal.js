import styles from "./Modal.module.css";

const AddModal = ({ closeAdd, headers }) => {
  return (
    <div className={styles.modal}>
      <h2 className={styles.h2}>ADD NEW USER</h2>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[0]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[1]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[2]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="password" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[3]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="password" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[4]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[5]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label}>
            {headers[6]}<span className={styles.span}>*</span>
          </label>
          <br />
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.grid_item}>
          <div className={styles.grid_container1}>
            <div>
              <label className={styles.label}>
                {headers[7]}<span className={styles.span}>*</span>
              </label>
              <br />
              <input type="date" className={styles.date}></input>
            </div>
            <div>
              <label className={styles.label}>
                {headers[8]}<span className={styles.span}>*</span>
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
        <button type="button" className={styles.cancel} onClick={closeAdd}>
          Cancel
        </button>
        <button type="submit" className={styles.add}>
          Add
        </button>
      </div>
    </div>
  );
};
export default AddModal;
