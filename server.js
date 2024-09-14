const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/enviar-email', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seu-email@gmail.com', // Substitua pelo seu e-mail
            pass: 'sua-senha-de-aplicativo' // Substitua pela senha do aplicativo
        }
    });

    const mailOptions = {
        from: email,
        to: 'seu-email@gmail.com', // Substitua pelo seu e-mail
        subject: 'Mensagem do Formulário de Contato',
        text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar e-mail');
        }
        res.send('E-mail enviado com sucesso');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
