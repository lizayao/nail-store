import { collection, doc, getDoc, getDocs, getFirestore, query, where, limit } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

const initialState = {
  response: {},
  error: {},
  data: [],
  loading: true,
};

const filtersFuntions = {
  where,
  limit,
};

const useFirestore = ({ nameCollection = "", documentId, filters }) => {
  
  const [state, setState] = useState(initialState);

  const listFilters = useMemo(() => {
    return Object.keys(filters || {}).map((key) => {
      const _filter = filtersFuntions[key];
      const [field, operator, value] = filters[key];
      return _filter(field, operator, value);
    });
  }, [filters]);

  useEffect(() => {
    const db = getFirestore();
    if (nameCollection && documentId) {
      getDoc(doc(db, nameCollection, documentId)).then((snapshot) => {
        if (snapshot.exists()) {
          const _data = snapshot.data();
          setState({ ...state, data: _data, loading: false });
        }
      });
    } else if (nameCollection) {
      const _query = query(collection(db, nameCollection), ...listFilters);
      getDocs(_query).then((snapshot) => {
        const _data = snapshot.docs.map((doc) => {
          const item = doc.data();
          item["id"] = doc.id;
          return item;
        });

        setState({ ...state, data: _data, loading: false });
      });
    }
  }, [documentId, nameCollection, listFilters]);

  return [state.data, state.loading, state.response, state.error];
};

export default useFirestore;