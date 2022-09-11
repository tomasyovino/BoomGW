import axios from "axios";

const DiscordService = (clearForm) => {
    const Send = async (data) => {
        const body = {
            "content": "TICKET",
            "tts": false,
            "color": "white",
            "embeds": [{
                "title": `${data.subject} - ${data.user}`,
                "description": `Nombre: ${data.name}
                                Usuario: ${data.user}
                                Asunto: ${data.subject}
                                Mensaje: ${data.message}`,
            }]
        }

        try {
            // eslint-disable-next-line
            const data = await axios.post(
                "https://discord.com/api/webhooks/1018194033950064761/Ws2HOBFQ26SqeuOVShO26K948vYql-7ajDG4BEr24L93FyctiqQvUfl5tlI7JvPMD8XY", body
            );
            clearForm()
        } catch (err) {
            console.log(`There was an error ${err.message}`);
        }
    }

    return {
        Send
    };
}

export default DiscordService;