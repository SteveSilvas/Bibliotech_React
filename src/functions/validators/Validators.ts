const Valitadors = {
    OblidgeField(value:any, fieldName:string){
        if(!value){
            alert(`Preencha o campo ${fieldName}.`);
            return false
        }

        return true;
    },

    IsValidEmail(email:string){
        return(email)
    }
}

export default Valitadors;