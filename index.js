import "./index.css";

const statusOptions = [
  { id: 1, value: "Todo" },
  { id: 2, value: "Planning" },
  { id: 3, value: "QA Raised Bugs" },
  { id: 4, value: "Reopen" },
  { id: 5, value: "Ready to Test" }
];

const epicOptions = [
  { id: 1, value: "Marketing" },
  { id: 2, value: "Vendor Onboarding" },
  { id: 3, value: "Platform Release" }
];

const itemType = [
  { id: 1, value: "Story" },
  { id: 2, value: "Bugs" },
  { id: 3, value: "Task" }
];

const assignUsers = [
  { id: 1, value: "Select Users" },
  { id: 2, value: "Me" },
  { id: 3, value: "Rahul" },
  { id: 4, value: "Ajay" },
  { id: 5, value: "Shreya" },
  { id: 6, value: "Neha" }
];

const AddItem = (props) => {
  const { activeItem, changeItem } = props;

  const onChangeItem = (event) => {
    changeItem(event.target.value);
  };

  return (
    <div className="add-item-container">
      <h1 className="add-item-heading">Add New Item</h1>
      <hr className="horizontal-line" />
      <div className="item-name-card">
        <label htmlFor="item" className="label">
          Item Name
        </label>
        <input type="text" id="item" className="input-text" />
      </div>
      <div className="attachment-card">
        <p className="attachment">Attachments</p>
        <button type="button" className="attachment-btn">
          Drop or click to add files
        </button>
        <p className="attach-para">Maximum 10 files</p>
      </div>
      <hr className="horizontal-line" />
      <div className="item-name-card">
        <label htmlFor="description" className="label">
          Description
        </label>
        <input type="text" id="description" className="input-text" />
      </div>
      <h1 className="default-section">Default Section</h1>
      <div className="assign-user-card">
        <div className="card">
          <p className="attachment assign-user">Assign Users</p>
        </div>
        <select
          className="user-dropdown"
          value={activeItem}
          onChange={onChangeItem}
        >
          {assignUsers.map((eachUser) => (
            <option key={eachUser.id} value={eachUser.value}>
              {eachUser.value}
            </option>
          ))}
        </select>
      </div>
      <div className="assign-user-card">
        <div className="card">
          <p className="attachment assign-user">Status</p>
        </div>
        <select
          className="user-dropdown"
          value={activeItem}
          onChange={onChangeItem}
        >
          {statusOptions.map((eachStatus) => (
            <option key={eachStatus.id} value={eachStatus.value}>
              {eachStatus.value}
            </option>
          ))}
        </select>
      </div>
      <div className="assign-user-card">
        <p className="attachment assign-user">Epic</p>
        <select
          className="user-dropdown"
          value={activeItem}
          onChange={onChangeItem}
        >
          {epicOptions.map((eachEpic) => (
            <option key={eachEpic.id} value={eachEpic.value}>
              {eachEpic.value}
            </option>
          ))}
        </select>
      </div>
      <div className="assign-user-card">
        <p className="attachment assign-user">Item Type</p>
        <select
          className="user-dropdown"
          value={activeItem}
          onChange={onChangeItem}
        >
          {itemType.map((eachItem) => (
            <option key={eachItem.id} value={eachItem.value}>
              {eachItem.value}
            </option>
          ))}
        </select>
      </div>
      <input type="date" placeholder="Start Date" className="input-field" />
      <input type="date" placeholder="Start Date" className="input-field" />
      <input type="text" placeholder="Duration" className="input-field" />
      <input
        type="text"
        placeholder="Estimation Points"
        className="input-field"
      />
      <input type="text" placeholder="Release" className="input-field" />
      <div className="button-container">
        <button className="create button" type="button">
          Create
        </button>
        <button className="button" type="button">
          Add More
        </button>
        <button className="button" type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddItem;
