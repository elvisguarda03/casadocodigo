module.exports = app => {
    app.get('/', (req, resp) => {
        resp.send(
            `
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Casa do Código</h1>
            </body>
        </html>
        `
        );
    });

    app.get('/livros', (req, resp) => {
        resp.end(`
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Listagem de Livros</h1>
            </body>
        </html>`);
    });
};