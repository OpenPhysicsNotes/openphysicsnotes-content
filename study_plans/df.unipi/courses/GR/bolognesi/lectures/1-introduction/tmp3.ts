
import pdf from 'html-pdf'

let html2 = `
    <html>
        <head>
            <style>
                body {
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                    font-size: 12px;
                    line-height: 1.42857143;
                    color: red;
                    background-color: #fff;
                }
            </style>
        </head>
        <body>
                
            <h1>Test</h1>
            <p>Test</p>

        </body>
    </html>
`;


//let html = fetch('http://10.0.1.5:8080/index.md?article_content_only=true').then(res => res.text()).then((text) => {
let html = fetch('http://10.0.1.5:8080/study_plans/df.unipi/courses/GR/bolognesi/lectures/1-introduction/?article_content_only=true').then(res => res.text()).then((text) => {
    let options = {
        format: 'Letter',
        base: `http://10.0.1.5:8080/study_plans/df.unipi/courses/GR/bolognesi/lectures/1-introduction/`,
        renderDelay: 5000,
    };

    text = text.replace(/\<\/head\>/g, `<style>article {         --text_color: black;
        :red; }</style></head>`);
    console.log(text);

    pdf.create(text, options).toFile('./google.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });
})