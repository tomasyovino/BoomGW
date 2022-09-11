import useForm from "../hooks/useForm";
import DiscordService from "../services/DiscordService";

export const initialFormState = {
    data: {
        name: "",
        user: "",
        subject: "",
        message: "",
    },
    error: {},
}

const Form = () => {

    const { formData, setDynamicFormData, clearForm, isValid } = useForm(initialFormState);

    const { Send } = DiscordService(clearForm);

    return (
        <form
            className="form" 
            onSubmit={(e) => {
                e.preventDefault();
                Send(formData.data);
            }}
        >
            <div className="input-bx">
                <input 
                    type="text" 
                    placeholder="Nombre"
                    autocomplete="off" 
                    required
                    name="name"
                    value={formData.data.name}
                    onChange={(e) => {
                        const { name, value } = e.target;
                        setDynamicFormData( name, value );
                    }} 
                />
                { 
                    formData.error.name 
                        ?   <span>* Nombre es requerido</span>
                        :   ""
                }
            </div>
            <div className="input-bx">
                <input 
                    type="text" 
                    placeholder="Usuario"
                    autocomplete="off" 
                    required
                    name="user"
                    value={formData.data.user}
                    onChange={(e) => {
                        const { name, value } = e.target;
                        setDynamicFormData( name, value );
                    }} 
                />
                { 
                    formData.error.name 
                        ?   <span>* Usuario es requerido</span>
                        :   ""
                }
            </div>
            <div className="input-bx">
                <input 
                    type="text" 
                    placeholder="Asunto"
                    autocomplete="off" 
                    required
                    name="subject"
                    value={formData.data.subject}
                    onChange={(e) => {
                        const { name, value } = e.target;
                        setDynamicFormData( name, value );
                    }} 
                />
                { 
                    formData.error.name 
                        ?   <span>* Asunto es requerido</span>
                        :   ""
                }
            </div>
            <div>
                <textarea 
                    type="text" 
                    cols="80" 
                    rows="10" 
                    placeholder="Mensaje" 
                    required
                    name="message"
                    value={formData.data.message}
                    onChange={(e) => {
                        const { name, value } = e.target;
                        setDynamicFormData( name, value );
                    }} 
                />
                { 
                    formData.error.name 
                        ?   <span>* Mensaje es requerido</span>
                        :   ""
                }
            </div>
            <button type="submit" disabled={ !isValid }>Enviar</button>
        </form>
    )
}

export default Form;