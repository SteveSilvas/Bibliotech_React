type InputElement = {
    class?: string,
    type: string,
    disabled?: boolean,
    value?: any,
    placeholder?: string,
    changeValue?: (value: string) => void
}

export default InputElement;