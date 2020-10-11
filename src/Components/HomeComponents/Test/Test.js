import React from 'react';
import './Test.css';

const Test = () => {
    return (
        // <div className="categories">
        //     <div className="row">
        //         <div className="col-md-4">
        //             <div className="cat1 d-flex justify-content-around align-items-center">
        //                 <h1>Watch</h1>
        //                 <img src="images/categories/watch.png" alt="" />
        //             </div>
        //         </div>
        //         <div className="col-md-4">
        //             <div className="cat2 d-flex justify-content-between align-items-center">
        //                 <h1>Bag</h1>
        //                 <img src="images/categories/bag.png" alt="" />
        //             </div>
        //         </div>
        //         <div className="col-md-4">
        //             <div className="cat3 d-flex justify-content-between align-items-center">
        //                 <h1>Shoes</h1>
        //                 <img src="images/categories/shoes.png" alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="d-flex justify-content-between bg-secondary mb-3">
                <div className="p-2 bg-info">Flex item 1</div>
                <div className="p-2 bg-warning">Flex item 2</div>
                <div className="p-2 bg-primary">Flex item 3</div>
            </div>
            <div className="d-flex justify-content-around bg-secondary mb-3">
                <div className="p-2 bg-info">Flex item 1</div>
                <div className="p-2 bg-warning">Flex item 2</div>
                <div className="p-2 bg-primary">Flex item 3</div>
            </div>
        </div>
    );
};

export default Test;