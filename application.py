# -*- coding: utf-8 -*-
"""For developement
$ export FLASK_APP=application
$ export FLASK_ENV=developement
$ export FLASK_DEBUG=True
$ flask run || flask run --host='0.0.0.0' --no-reload
"""
"""
TDraw Application
VERSION: 0.0.2
Author: taiprogramer.
Official Release.
"""


from model import Button
from flask import Flask, render_template, request
app = Flask(__name__)

colors = ["red", "green", "blue", "yellow", "black", "white", "maroon", "olive", "lime", "aqua",
          "teal", "navy", "fuchsia", "purple", "silver", "gray"
          ]
thickness = ["1", "2", "3", "4", "5", "6", "7", "8"]
time_delays = ["10", "50", "100", "200"]

buttons = Button.createButton()


@app.route("/")
def index():
    return render_template("index.html", colors=colors, thickness=thickness,
                           time_delays=time_delays, buttons=buttons)


@app.route("/mobile")
def mobile():
    return render_template("mobile.html", colors=colors, thickness=thickness,
                           time_delays=time_delays, buttons=buttons)


@app.route("/favicon.ico")
def favicon():
    return "Hello World"


if __name__ == "__main__":
    app.run()
