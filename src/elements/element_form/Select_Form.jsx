import React from "react";
import { useField } from "formik";
import { InputLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";
import { at } from "lodash";
import  propTypes  from "prop-types";

function SelectField(props) {
    const {label, data, ...rest} = props
    const [field, meta] = useField(props)
    const {value: selectedValue} = field
    const [touched, error] = at(meta, 'touched', 'error')
    const isError = touched && error && true
    function _renderHelperText() {
        if (isError) {
            return <FormHelperText>{error}</FormHelperText>
        }
    }

    return (
        <FormControl {...rest} error={isError}>
            <InputLabel>{label}</InputLabel>
            <Select style={{height: '40px', border: '0.5px solid #ced4da'}} {...field} value={selectedValue ? selectedValue : ' '}>
                {data.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

SelectField.defaultProps = {
    data: []
}

SelectField.propTypes = {
    data: propTypes.array.isRequired
}

export default SelectField;