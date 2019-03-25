// import deps
import React from 'react'
import PropTypes from 'prop-types'
import { Form, HelpBlock } from 'react-bootstrap'

const Input = ({ input, label, id, size, hideLabel, grid, meta: { touched, error }, ...props }) => {
    return (
        <Form.Group controlId={id} validationstate={touched && error ? 'error' : null} bssize={size}>
            <Form.Label srOnly={hideLabel}>{label}</Form.Label>
            <Form.Control {...props} {...input} bssize={size} />
            {touched && error && <HelpBlock>{error}</HelpBlock>}
        </Form.Group>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    size: PropTypes.oneOf(['lg', 'large', 'sm', 'small']),
    type: PropTypes.string,
    componentclass: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

Input.defaultProps = {
    hideLabel: false,
    type: 'text',
    componentclass: 'input'
}

export default Input
