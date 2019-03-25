// import deps
import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

const ModalWrapper = props => {
    return (
        <Modal show={props.show} bssize={props.size} backdrop={props.backdrop} onHide={props.onHide}>
            {props.header && (
                <Modal.Header closeButton={props.closeButton}>
                    <Modal.Title>{props.header}</Modal.Title>
                    {props.subHeader && <p>{props.subHeader}</p>}
                </Modal.Header>
            )}
            <Modal.Body>{props.children}</Modal.Body>
            {props.footer && <Modal.Footer>{props.footer}</Modal.Footer>}
        </Modal>
    )
}

ModalWrapper.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
    show: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(['lg', 'large', 'sm', 'small']),
    closeButton: PropTypes.bool,
    backdrop: PropTypes.oneOf(['static', true, false]),
    onHide: PropTypes.func.isRequired
}

ModalWrapper.defaultProps = {
    closeButton: true,
    backdrop: true
}

export default ModalWrapper
