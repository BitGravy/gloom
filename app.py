import os, random
from flask import Flask, render_template, request
from sqlalchemy import create_engine

app = Flask(__name__)

engine =  create_engine("mysql://gloom:gloom@localhost/gloom")
con = engine.connect()

MONSTERPICDIR = "static/Monsters/"

@app.route("/")
def index():
    monster1 = con.execute("SELECT * FROM monsters WHERE monster_id = 2").fetchall()
    monster = monster1[0]["file"]
    monster_name = monster1[0]["name"]
    #rand_monster = random.choice(os.listdir(MONSTERPICDIR))
    scenarios = con.execute("SELECT * FROM scenarios").fetchall()
    allscenarios = []
    allscenarionums = []
    for i in range(len(scenarios)):
        allscenarios.append(scenarios[i]["name"])
        allscenarionums.append(scenarios[i]["scenario_id"])
    return render_template("index.html", monsterpic = MONSTERPICDIR + monster, monster_name = monster_name, scenarios = allscenarios, scenarionums = allscenarionums)

@app.route("/monsters")
def monsters():
    if not request.args.get("scenario"):
        raise RuntimeError("no scenario")
    if not request.args.get("lvl"):
        raise RuntimeError("no lvl")

    rows = con.execute("SELECT monsters.*, monster_stats.* FROM monsters mon, monster_group mongrp, monster_stats monstat WHERE mongrp.scenario_id = :id AND mon.id = mongrp.monster_id AND monstats.monster_id = mongrp.monster_id AND monstats.lvl = :lvl", id = request.args.get("scenario"), lvl = request.args.get("lvl"))
    # files = []
    # for i in range(len(rows)):
    #     file.append(MONSTERPICDIR + rows[i]["file"])
    # return files
    return jsonify(rows)


if __name__ == "__main__":
	app.run(host='0.0.0.0')
