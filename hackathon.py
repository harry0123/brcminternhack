from flask import Flask, render_template
from contextlib import closing

#configuration
DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	state = 7
	return render_template('index.html', state=state)

if __name__ == '__main__':
    app.run(debug=True)
