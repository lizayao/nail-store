import React, { useCallback, useEffect, useMemo, useState } from "react";
import ListUsersComponent from "../components/ListUsersComponent";

const initialState = [
  { id: 1, name: "Islas" },
  { id: 1, name: "Coder" },
];

const ItemFormView = () => {
  const [users, setUsers] = useState(initialState);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");


  const handleAdd = useCallback(() => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  });

  const handleSearch = () => {
    setSearch(text);
  };

  useEffect(() => {
    console.log("render ItemFormView");
  });

  const filteredUsers = useMemo(() => {
     const filter = users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    });
    return filter;
  },[search,users]);
   

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <input className="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="col-5">
          <button className="btn btn-info" onClick={handleSearch}>
            search
          </button>
          <button className="btn btn-secondary" onClick={handleAdd}>
            add
          </button>
        </div>
      </div>
      <ListUsersComponent users={filteredUsers} />
    </React.Fragment>
  );
};

export default ItemFormView;