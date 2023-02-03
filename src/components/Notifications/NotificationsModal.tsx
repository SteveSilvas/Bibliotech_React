import React from "react";
import MessageModalType from "../../@Types/MessageModalType";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const NotificationsModal = (props: any) => {

    const renderModal = () => {
        return props.textMessage ?
            renderSuccessModal()
            :
            renderErrorModal();
    }

    const renderSuccessModal = () => {
        return (
            <SuccessModal
                hideModal={props.hideMessage}
                textMessage={props.textMessage}
            />
        );
    }

    const renderErrorModal = () => {

        return (
            <ErrorModal
                hideModal={props.hideMessage}
                textMessage={props.textMessage}
            />
        );
    }

    return renderModal();
}

export default NotificationsModal;