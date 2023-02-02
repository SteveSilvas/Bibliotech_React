type MessageModalType = {
    textMessage: string,
    showModal: boolean,
    typeMessage?: number,
    hideMessage?: (value: string) => void
}

export default MessageModalType;