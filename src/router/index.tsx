import React, { FunctionComponent, JSX, Suspense } from "react";
import {
    BrowserRouter
    Routes,
    Route
  } from "react-router-dom";
  


const Routes:FunctionComponent = ():JSX.Element => {

    return (
        <Suspense>
            <BrowserRouter>
            <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default Routes