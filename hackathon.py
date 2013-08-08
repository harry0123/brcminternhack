from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash
from contextlib import closing
import os

#configuration
DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	state = 4
	return render_template('index.html', state=state)

if __name__ == '__main__':
    app.run(debug=True)