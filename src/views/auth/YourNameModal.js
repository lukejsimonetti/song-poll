import React, { useContext, useState, memo } from 'react'
import {withRouter} from 'react-router-dom'
import { Form as FinalForm, Field } from 'react-final-form'
import { Form, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import axios from 'axios'

// import components
import ModalWrapper from '../../components/ModalWrapper'
import Input from '../../components/Input'
import { ModalContext } from '../../contexts/ModalContext';
import { AppStateContext } from '../../contexts/AppStateContext';

const YourNameModal = ({history}) => {
    const { currentModal, setCurrentModal } = useContext(ModalContext)
    const { setUserName } = useContext(AppStateContext)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const closeModal = () => setCurrentModal({ ...currentModal, name: undefined })
    
    const handleSubmit = values => {
        axios.post('/api/yourname', {...values})
        .then((res) => {
            setCurrentModal({name: undefined})
            setUserName(res.data.username)
        })
        .then(() => {
            history.push('/poll/list')
        })
    }

    return (
        <ModalWrapper show={currentModal.name === "YOURNAME"} onHide={closeModal} header="Song Poll App Login">
            <FinalForm
                onSubmit={handleSubmit}
                 render={({ handleSubmit, pristine, invalid }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            name="name"
                            label="What's Your First Name?"
                            id="name"
                            component={Input}
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
    );
};

export default withRouter(YourNameModal);