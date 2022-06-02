import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import ReviewRek from "./Form/Review_Rek";

export default function Review() {
    const { values: formValues} = useFormikContext()
    return(
        <Fragment>
            <ReviewRek formValues={formValues}/>
        </Fragment>
    )
}