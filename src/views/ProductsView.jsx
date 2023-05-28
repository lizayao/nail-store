import React, { Fragment, memo, useMemo } from "react";
import ItemComponent from "../components/ItemComponent";
import useFirestore from "../utils/useFirestore";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import CarouselComponent from "../components/CarouselComponent";


const nameCollection = "items";

const ProductsView = (props) => {
  const { category } = useParams();

  const options = useMemo(() => {
    const _optionwithFilters =  { nameCollection, filters: { where: ["category", "==", category] } };
    const _optionWithOutFilters = { nameCollection };
    return category ?_optionwithFilters : _optionWithOutFilters ;
  }, [category]);

  const [data, loading] = useFirestore(options);
  
  return (
    <Fragment>
     <CarouselComponent />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {loading ? (
            <div>
              <h2>Cargando la página</h2>
              <Spinner animation="border" variant="warning" />
            </div>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="col">
              
                  <ItemComponent showInfo data={item}  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(ProductsView);
