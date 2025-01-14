import FormWrapper from "./FormWrapper";
import styles from "./Multiform.module.css";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">

      <div className={styles.formContainer}>
      <div className={styles.formInput}>

      <label>First Name</label>
      <input className={styles.input}
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        </div>

        <div className={styles.formInput}>

      <label>Last Name</label>
      <input className={styles.input}
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      </div>

      <div className={styles.formInput}>

      <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Age</label>
      <input className={styles.input}
        min={1}
        type="number"
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
        />
        </div>
        </div>
    </FormWrapper>
  );
}
