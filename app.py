from flask import Flask, render_template, request, url_for
from flask.wrappers import Request
from gingerit.gingerit import GingerIt

app = Flask(__name__)

@app.route("/", methods=['POST', 'GET'])
def home():
    if request.method == 'GET':
        return render_template("index.html", inputText='')
    elif request.method == 'POST':
        textContent = request.form['inputText']
        result = GingerIt().parse(textContent)
        correctedText = result["result"]
        return render_template("index.html", inputText=correctedText)

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')