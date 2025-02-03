import path from 'path';
const __dirname = path.resolve();

function render(fileName, res) {
    res.sendFile(__dirname + '/' + fileName)
}

const views = {
    home: function(res) {return render('index.html', res)},
    minhome: function(res) {return render('min.html', res)}
}

export default views