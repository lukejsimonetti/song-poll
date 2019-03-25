// import deps
import React, { useContext, useState, memo } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import { Form, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'

// import contexts
import { ModalContext } from '../../contexts/ModalContext'

// import components
import ModalWrapper from '../../components/ModalWrapper'
import Input from '../../components/Input'

import axios from 'axios'
import { AppStateContext } from '../../contexts/AppStateContext';

const LoginModal = () => {
    const { currentModal, setCurrentModal } = useContext(ModalContext)
    const { isAuthenticated, setIsAuthenticated } = useContext(AppStateContext)

    const [isSubmitting] = useState(false) 

    const closeModal = () => setCurrentModal({ ...currentModal, name: undefined })

    const handleSubmit = values => {
        axios.post('/api/authenticate', {...values})
            .then((res) => {
                setIsAuthenticated(1)
            })
            .then(() => {
                closeModal()
                setCurrentModal({name: "YOURNAME"})
            })
            .catch(err => {
                switch(true){
                    case err.response.status === 400 :{
                        alert("Doesn't seem like there was a password given...")
                    }
                    case err.response.status === 401 :{
                        alert("That password didn't work.")
                    }
                    case err.response.status === 200:{
                            console.log("that worked")
                    }
                    default:{

                    }
                }
            })
    }

    return (
        <ModalWrapper show={currentModal.name === "LOGIN"} onHide={closeModal} header="Song Poll App Login">
            <FinalForm
                onSubmit={handleSubmit}
                 render={({ handleSubmit, pristine, invalid }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            name="password"
                            label="Password"
                            id="password"
                            component={Input}
                            type="password"
                            componentclass="input"
                            rows="6"
                        />
                        <Row>
                            <Col sm={12}>
                                <div className="pull-right">
                                    <ButtonToolbar>
                                        <Button
                                            bsstyle="primary"
                                            type="submit"
                                            disabled={pristine || invalid || isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    Submitting <i className="fa fa-spinner fa-spin" />
                                                </>
                                            ) : (
                                                'Submit'
                                            )}
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                )}
            />
        </ModalWrapper>
    )
}

export default memo(LoginModal)
