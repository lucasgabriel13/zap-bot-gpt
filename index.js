import { create } from 'venom-bot';

create({
    session: 'chat-jarvis',
    multidevice: true
})
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro)
    })

async function start(client) {
    const botText = "🤖Olá sou Jarvis, um robô criado pelo seu noivo! Ele disse que TE AMA MUITO❤️"
    // Da um console.log em message depois, tem muita coisa bacana
    client.onAnyMessage((message) => {
        if (message.body.toLowerCase() === "hello") {
            // message.from é o número do usuário que enviou a msg "hello"
            client.sendText('553591951270@c.us', botText)
        }
    })
}